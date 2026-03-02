"use client";

type NodePosition = {
  id: string;
  x: number;
  y: number;
};

type Props = {
  nodes: NodePosition[];
  width: number;
  height: number;
};

const NODE_WIDTH = 220;
const NODE_HEIGHT = 60;
const LINE_WIDTH = 2;

export default function OrganigramaLines({
  nodes,
  width,
  height
}: Props) {
  if (!nodes.length) return null;

  const alcalde = nodes.find(n => n.id === "alcalde");
  const director = nodes.find(n => n.id === "director");
  if (!alcalde || !director) return null;

  const areaCandidates = nodes.filter(n => n.y > director.y);
  if (!areaCandidates.length) return null;

  const areaLevelY = Math.min(...areaCandidates.map(n => n.y));
  const areas = nodes.filter(n => n.y === areaLevelY);

  const alcaldeCenterX = alcalde.x + NODE_WIDTH / 2;
  const alcaldeBottomY = alcalde.y + NODE_HEIGHT;
  const directorCenterX = director.x + NODE_WIDTH / 2;
  const directorTopY = director.y;
  const directorBottomY = director.y + NODE_HEIGHT;
  const horizontalLineY = directorBottomY + 40;

  return (
    <svg
      width={width}
      height={height}
      className="absolute left-0 top-0 pointer-events-none"
    >
      <line
        x1={alcaldeCenterX}
        y1={alcaldeBottomY}
        x2={directorCenterX}
        y2={directorTopY}
        stroke="black"
        strokeWidth={LINE_WIDTH}
      />

      <line
        x1={directorCenterX}
        y1={directorBottomY}
        x2={directorCenterX}
        y2={horizontalLineY}
        stroke="black"
        strokeWidth={LINE_WIDTH}
      />

      {areas.length > 0 && (
        <line
          x1={areas[0].x + NODE_WIDTH / 2}
          y1={horizontalLineY}
          x2={areas[areas.length - 1].x + NODE_WIDTH / 2}
          y2={horizontalLineY}
          stroke="black"
          strokeWidth={LINE_WIDTH}
        />
      )}

      {areas.map(area => (
        <line
          key={area.id}
          x1={area.x + NODE_WIDTH / 2}
          y1={horizontalLineY}
          x2={area.x + NODE_WIDTH / 2}
          y2={area.y}
          stroke="black"
          strokeWidth={LINE_WIDTH}
        />
      ))}

      {areas.map(area => {
        const subareas = nodes.filter(n => n.x === area.x && n.y > area.y);
        if (!subareas.length) return null;

        const areaCenterX = area.x + NODE_WIDTH / 2;
        const areaBottomY = area.y + NODE_HEIGHT;
        const subHorizontalY = areaBottomY + 40;

        return (
          <g key={area.id}>
            <line
              x1={areaCenterX}
              y1={areaBottomY}
              x2={areaCenterX}
              y2={subHorizontalY}
              stroke="black"
              strokeWidth={LINE_WIDTH}
            />

            {subareas.map(sub => (
              <line
                key={sub.id}
                x1={areaCenterX}
                y1={subHorizontalY}
                x2={sub.x + NODE_WIDTH / 2}
                y2={sub.y}
                stroke="black"
                strokeWidth={LINE_WIDTH}
              />
            ))}
          </g>
        );
      })}
    </svg>
  );
}
