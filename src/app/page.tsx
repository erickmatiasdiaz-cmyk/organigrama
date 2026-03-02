/**
 * Página principal del organigrama institucional
 */

import OrganigramaCanvas from "@/components/organigrama/OrganigramaCanvas";

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden bg-gray-100 flex flex-col">
      {/* ========================= */}
      {/* HEADER INSTITUCIONAL */}
      {/* ========================= */}
      <div className="bg-white border-b">
        <div className="max-w-[1400px] mx-auto px-4 h-[96px] sm:h-[110px] flex items-center justify-between gap-4">
          {/* TITULO */}
          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
              Organigrama Institucional
            </h1>

            <p className="text-xs sm:text-sm text-gray-500 truncate">
              Departamento Comunal de Salud
            </p>
          </div>

          {/* LOGO MUNICIPAL */}
          <img
            src="/organigrama/logosb.png"
            alt="Municipalidad de Santa Bárbara"
            className="h-full max-h-[78px] sm:max-h-[92px] object-contain shrink-0"
          />
        </div>
      </div>

      {/* ========================= */}
      {/* CONTENIDO */}
      {/* ========================= */}
      <div className="flex-1 min-h-0 p-3 sm:p-6">
        <OrganigramaCanvas />
      </div>

    </main>
  );
}
