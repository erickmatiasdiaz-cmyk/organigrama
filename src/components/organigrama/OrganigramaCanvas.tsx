"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { organigrama, OrgNode } from "@/data/organigramaData";
import OrganigramaLines from "./OrganigramaLines";
import OrganigramaModal from "./OrganigramaModal";

const NODE_WIDTH = 220;
const NODE_HEIGHT = 60;
const VERTICAL_GAP = 120;
const MIN_GAP = 40;
const VIEWPORT_PADDING = 16;

type PositionedNode = {
  id: string;
  name: string;
  x: number;
  y: number;
};

type ViewportSize = {
  width: number;
  height: number;
};

type TreeBounds = {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  width: number;
  height: number;
};

const getAreaColor = (node: OrgNode) => {
  switch (node.id) {
    case "finanzas":
      return "#475569";
    case "rrhh":
      return "#4b5563";
    case "abastecimiento":
      return "#6b7280";
    case "servicios_generales":
      return "#64748b";
    case "juridica":
      return "#52525b";
    case "informatica":
      return "#3f8f66";
    default:
      return "#375144";
  }
};

export default function OrganigramaCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewport, setViewport] = useState<ViewportSize>({ width: 1200, height: 700 });
  const [selectedNode, setSelectedNode] = useState<(OrgNode & { color?: string }) | null>(null);

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      setViewport({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    const observer = new ResizeObserver(updateSize);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const nodes = useMemo(() => {
    const alcalde = organigrama.find(n => n.id === "alcalde");
    const director = organigrama.find(n => n.id === "director");
    const areas = organigrama
      .filter(n => n.type === "area")
      .sort((a, b) => (a.columnIndex ?? 0) - (b.columnIndex ?? 0));

    const result: PositionedNode[] = [];
    const alcaldeY = 0;
    const directorY = NODE_HEIGHT + VERTICAL_GAP;
    const areaY = (NODE_HEIGHT + VERTICAL_GAP) * 2;

    areas.forEach((area, index) => {
      const areaX = index * (NODE_WIDTH + MIN_GAP);
      result.push({
        id: area.id,
        name: area.name,
        x: areaX,
        y: areaY
      });

      const subareas = organigrama.filter(n => n.parentId === area.id);
      subareas.forEach((sub, subIndex) => {
        result.push({
          id: sub.id,
          name: sub.name,
          x: areaX,
          y: areaY + NODE_HEIGHT + VERTICAL_GAP + subIndex * (NODE_HEIGHT + 40)
        });
      });
    });

    if (!result.length) return result;

    const minX = Math.min(...result.map(n => n.x));
    const maxX = Math.max(...result.map(n => n.x + NODE_WIDTH));
    const centerX = (minX + maxX) / 2 - NODE_WIDTH / 2;

    if (alcalde) {
      result.push({
        id: alcalde.id,
        name: alcalde.name,
        x: centerX,
        y: alcaldeY
      });
    }

    if (director) {
      result.push({
        id: director.id,
        name: director.name,
        x: centerX,
        y: directorY
      });
    }

    return result;
  }, []);

  const bounds = useMemo<TreeBounds>(() => {
    if (!nodes.length) {
      return {
        minX: 0,
        minY: 0,
        maxX: 0,
        maxY: 0,
        width: 1,
        height: 1
      };
    }

    const minX = Math.min(...nodes.map(n => n.x));
    const maxX = Math.max(...nodes.map(n => n.x + NODE_WIDTH));
    const minY = Math.min(...nodes.map(n => n.y));
    const maxY = Math.max(...nodes.map(n => n.y + NODE_HEIGHT));

    return {
      minX,
      minY,
      maxX,
      maxY,
      width: Math.max(1, maxX - minX),
      height: Math.max(1, maxY - minY)
    };
  }, [nodes]);

  const normalizedNodes = useMemo(
    () =>
      nodes.map(n => ({
        ...n,
        x: n.x - bounds.minX,
        y: n.y - bounds.minY
      })),
    [bounds.minX, bounds.minY, nodes]
  );

  const fit = useMemo(() => {
    if (!normalizedNodes.length) {
      return {
        scale: 1,
        offsetX: 0,
        offsetY: 0
      };
    }

    const availableWidth = Math.max(1, viewport.width - VIEWPORT_PADDING * 2);
    const availableHeight = Math.max(1, viewport.height - VIEWPORT_PADDING * 2);
    const scale = Math.min(
      availableWidth / bounds.width,
      availableHeight / bounds.height,
      1
    );

    return {
      scale,
      offsetX: (viewport.width - bounds.width * scale) / 2,
      offsetY: (viewport.height - bounds.height * scale) / 2
    };
  }, [bounds.height, bounds.width, normalizedNodes.length, viewport.height, viewport.width]);

  return (
    <>
      <div className="relative w-full h-full bg-gray-100 overflow-hidden">
        <div ref={containerRef} className="absolute inset-0">
          <div
            className="absolute left-0 top-0 origin-top-left"
            style={{
              width: bounds.width,
              height: bounds.height,
              transform: `translate(${fit.offsetX}px, ${fit.offsetY}px) scale(${fit.scale})`
            }}
          >
            <OrganigramaLines
              nodes={normalizedNodes}
              width={bounds.width}
              height={bounds.height}
            />

            {normalizedNodes.map(node => (
              <div
                key={node.id}
                onClick={() => {
                  const realNode = organigrama.find(n => n.id === node.id);
                  if (!realNode) return;
                  if (realNode.id === "alcalde" || realNode.id === "director" || realNode.type === "area") {
                    setSelectedNode({
                      ...realNode,
                      color: getAreaColor(realNode)
                    });
                  }
                }}
                className="
                  absolute
                  bg-white
                  border
                  border-gray-400
                  shadow-sm
                  text-center
                  flex
                  items-center
                  justify-center
                  px-2
                  text-sm
                  leading-tight
                  font-medium
                  hover:shadow
                  transition
                  cursor-pointer
                  select-none
                "
                style={{
                  width: NODE_WIDTH,
                  height: NODE_HEIGHT,
                  left: node.x,
                  top: node.y
                }}
              >
                {node.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <OrganigramaModal
        open={selectedNode !== null}
        title={selectedNode?.name}
        description={selectedNode?.description}
        image={selectedNode?.image}
        name={selectedNode?.personName}
        email={selectedNode?.email}
        phone={selectedNode?.phone}
        color={selectedNode ? getAreaColor(selectedNode) : undefined}
        onClose={() => setSelectedNode(null)}
      />
    </>
  );
}
