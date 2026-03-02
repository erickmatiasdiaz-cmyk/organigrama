"use client";

import { useEffect } from "react";

/**
 * PROPS DEL MODAL
 */
type Props = {
  open: boolean;
  title?: string;
  description?: string;
  image?: string;
  name?: string;
  email?: string;
  phone?: string;
  color?: string;
  onClose: () => void;
};

/**
 * ORGANIGRAMA MODAL
 *
 * OBJETIVOS DEL LAYOUT:
 * ✔ Modal con tamaño estable
 * ✔ Imagen nunca se recorta
 * ✔ Imagen usa tamaño natural
 * ✔ Scroll solo en descripción
 * ✔ Ficha siempre abajo
 * ✔ Sin espacios blancos cuando hay mucho texto
 * ✔ Funciona igual para todas las áreas
 */

export default function OrganigramaModal({
  open,
  title,
  description,
  image,
  name,
  email,
  phone,
  color,
  onClose,
}: Props) {

  /**
   * CERRAR CON ESC
   */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
      onClick={onClose}
    >

      {/* ========================= */}
      {/* CONTENEDOR PRINCIPAL */}
      {/* ========================= */}
      <div
        className="
          w-[820px]
          h-[560px]
          bg-white
          rounded
          shadow-xl
          overflow-hidden
          flex flex-col
        "
        onClick={(e) => e.stopPropagation()}
      >

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}
        <div
          className="px-6 py-5 text-white border-b border-black/10"
          style={{
            backgroundColor: color || "#374151",
          }}
        >
          <div className="text-xs uppercase tracking-wider opacity-90">
            Departamento de Salud Municipal
          </div>

          <div className="text-xl font-semibold leading-tight mt-1">
            {title}
          </div>
        </div>

        {/* ========================= */}
        {/* CONTENIDO PRINCIPAL */}
        {/* ========================= */}
        <div className="grid grid-cols-[38%_62%] flex-1 min-h-0">

          {/* ================================================= */}
          {/* COLUMNA IZQUIERDA */}
          {/* ================================================= */}
          <div className="border-r bg-gray-50 flex flex-col h-full">

            {/* ---------- IMAGEN ---------- */}
            <div className="p-4 flex justify-center">
              <div className="bg-white border border-gray-200 shadow-sm p-2">
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    className="
                      max-w-full
                      max-h-[300px]
                      object-contain
                    "
                  />
                ) : (
                  <div className="w-[220px] h-[220px] flex items-center justify-center text-gray-400 text-sm">
                    Sin imagen disponible
                  </div>
                )}
              </div>
            </div>

            {/* EMPUJA LA FICHA HACIA ABAJO */}
            <div className="flex-1" />

            {/* ---------- FICHA PERSONA ---------- */}
            {(name || email || phone) && (
              <div className="px-4 pb-4">
                <div className="border rounded bg-white p-3 text-sm shadow-sm">

                  {name && (
                    <div className="font-semibold text-gray-800">
                      {name}
                    </div>
                  )}

                  {email && (
                    <div className="text-blue-600 text-sm mt-1 break-all">
                      {email}
                    </div>
                  )}

                  {phone && (
                    <div className="text-gray-600 text-sm">
                      {phone}
                    </div>
                  )}

                </div>
              </div>
            )}

          </div>

          {/* ================================================= */}
          {/* COLUMNA DERECHA */}
          {/* ================================================= */}
          <div className="p-6 flex flex-col min-h-0">

            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Funciones del área
            </div>

            {/* SCROLL SOLO AQUÍ */}
            <div className="flex-1 overflow-y-auto">
              <div className="border bg-gray-50 p-4 text-sm text-gray-700 leading-relaxed whitespace-pre-line rounded">
                {description || "Sin descripción disponible."}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
