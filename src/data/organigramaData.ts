export type OrgNode = {
  id: string;
  name: string;
  parentId: string | null;
  type: "area" | "unit";
  columnIndex?: number;
  hasPopup?: boolean;
  description?: string;
  image?: string;
  color?: string;

  // NUEVO
  personName?: string;
  email?: string;
  phone?: string;
};


export const organigrama: OrgNode[] = [

  // ======================
  // NIVEL SUPERIOR
  // ======================

  {
    id: "alcalde",
    name: "Alcalde",
    parentId: null,
    type: "unit",
    hasPopup: true,
    image: "/organigrama/foto.jpeg",
    personName: "Cristian Oses Abuter",
    email: "cristian.oses@santabarbara.cl",
    phone: "+56 9 1234 5678",
    color: "#374151",
    description:
      `• Asiste a las sesiones del Concejo Municipal.
       • Cita a sesión del Concejo Municipal cada vez que corresponda.
       • Refrenda y transcribe las resoluciones del Alcalde, acuerdos del Concejo y del COSOC.
       • Informa a la Dirección que corresponde de los acuerdos del Alcalde, Concejo y del COSOC.
       • Transcribe de los originales, los decretos y resoluciones del Alcalde.
       • Visa los decretos, ordenanzas, reglamentos, órdenes administrativas, circulantes, oficios y resoluciones de la Municipalidad.
       • Mantiene un archivo clasificado de todos los decretos y resoluciones del Alcalde.
       • Lleva el archivo del Concejo Municipal y envía copias de sus a quienes corresponda.
       • Controla la adecuada recepción, tramitación y despacho de la documentación municipal.
       • Establece prioridad en la tramitación de la documentación externa de la municipalidad, de acuerdo a criterios del buen servicio.
       • Lleva el registro de organizaciones comunitarias, juntas de vecinos y organizaciones que desarrollen actividades relevantes para el efecto de las constituciones del COSOC, en la forma que señala la Ley.
       • Cita a reunión de representantes de las organizaciones comunitarias y actividades relevantes para la participación para participar en la designación de miembros de los COSOC para formular ternas cumpliendo con las demás obligaciones que dicha norma legal establece.
       • Procura asesoría técnica a las diferentes unidades respecto del aprovechamiento y uso de los recursos computacionales.
       • Proporciona los antecedentes que requiera la Secretaria de planificación comunal para la elaboración y actualización del plan de Desarrollo Comunal y Presupuesto Municipal.
       • Mantiene permanentemente informado al personal a su cargo, de todas aquellas materias que tengan relación con el desarrollo de su gestión.
       • Supervisa, controla y evalúa el rendimiento y eficiencia del personal a su cargo.
       • Coordina las distintas unidades a su cargo.
       • Mantiene permanentemente informado al Alcalde sobre todas las materias relacionadas con la unidad a su cargo.
       • Planifica, organiza y supervisa el cumplimiento de las actividades definidas para cada una de las áreas subalternas, como asimismo coordina su acción con las distintas unidades de la municipalidad.
       • Cumple las demás funciones que la Ley o el Alcalde le encomiendan de acuerdo a la naturaleza de sus tareas.
      `,
  },
  {
    id: "director",
    name: "Director Comunal de Salud",
    parentId: "alcalde",
    type: "unit",
    hasPopup: true,
    image: "/organigrama/foto.jpeg",
    personName: "Marina Soto Pasmiño",
    email: "marina.soto@santabarbara.cl",
    phone: "+56 9 1234 5678",
    color: "#374151",
    description:
      `• Coordinar y asesorar las actividades de saluda de acuerdo a las instrucciones emanadas por el Alcalde y el Ministerio de Salud.
       • Proponer al Alcalde, proyectos para el mejor funcionamiento del sistema de salud de la comuna, tanto rural como urbano.
       • Asesorar permanentemente al equipo de profesionales y personal en general con respecto a funciones técnicas y administrativas
       • Coordinar el Plan Anual Comunal de Salud, proporcionando estatregias y lineamientos para su desarrollo.
       • Participar en la confección del Presupuesto Anual de Departamento de la Salud y publicación de balance presupuestario.
       • Supervisión, control y coordinación de la información de atenciones de salud prestadas en el sector rural y urbano de la comuna.
       • Evaluación de la gestión técnica y administrativa de los fucionarios de DSM.
       • Coordinar y supervisar el desarrollo de la programación cuantitativa del DSM.
       • Asistencia a reuniones, tendientes a la coordinación de los programas vigentes y a reuniones, según instucciones de la jefatura correspondiente.
      `,
  },
  // ======================
  // AREAS PRINCIPALES
  // ======================

  {
    id: "gestion",
    name: "Gestión y Control",
    parentId: "director",
    type: "area",
    columnIndex: 0,
    hasPopup: true,
    image: "/organigrama/foto.jpeg",
    personName: "Maria Elena Contreras",
    email: "elena.contreras@santabarbara.cl",
    phone: "+56 9 1234 5678",
    description:
       `• El Departamento de Planificación, Programación y Control , tiene por 
       objetivo Coordinar la elaboración, ejecución y evaluación del Plan 
       Comunal de Salud Municipal, que define los objetivos estratégicos del 
       área, estableciendo los compromisos de gestión anual para la 
       Dirección y planificar, programar, coordinar y evaluar las acciones de 
       salud ejecutadas por los distintos establecimientos dependientes de la 
       dirección de modo de facilitar la ejecución del Plan Comunal de Salud 
       Municipal, de acuerdo a las normas, planes y programas del Ministerio 
       de Salud y los intereses de la gestión comunal, velando por su cumplimiento.
`,
  },

  {
    id: "servicios",
    name: "Servicios Generales",
    parentId: "director",
    type: "area",
    columnIndex: 1,
    hasPopup: true,
    image: "/organigrama/foto.jpeg",
    personName: "Ivar Silva Vasquez",
    email: "ivar.silva@santabarbara.cl",
    phone: "+56 9 1234 5678",
    description:
      `• Su función principal es administrar el uso, mantenimiento, reparación y medidas de seguridad y prevención de riesgos, referentes a los equipos e 
      instalaciones existentes, coordinar los servicios menores, movilización y maestros.
`,
  },

  {
    id: "rrhh",
    name: "RRHH",
    parentId: "director",
    type: "area",
    columnIndex: 2,
    hasPopup: true,
    image: "/organigrama/foto.jpeg",
    personName: "Judith Ruiz ",
    email: "judith.ruiz@santabarbara.cl",
    phone: "+56 9 1234 5678",
    description:
      `• Coordinar y asesorar las actividades de saluda de acuerdo a las instrucciones emanadas por el Alcalde y el Ministerio de Salud.
       • Proponer al Alcalde, proyectos para el mejor funcionamiento del sistema de salud de la comuna, tanto rural como urbano.
       • Asesorar permanentemente al equipo de profesionales y personal en general con respecto a funciones técnicas y administrativas
       • Coordinar el Plan Anual Comunal de Salud, proporcionando estatregias y lineamientos para su desarrollo.
       • Participar en la confección del Presupuesto Anual de Departamento de la Salud y publicación de balance presupuestario.
      `,
  },

  {
    id: "finanzas",
    name: "Jefe Finanzas",
    parentId: "director",
    type: "area",
    columnIndex: 3,
    hasPopup: true,
    image: "/organigrama/foto.jpeg",
    personName: "Jaime Cabezas",
    email: "jaime.cabezas@santabarbara.cl",
    phone: "+56 9 1234 5678",
    description:
   `• Encargado de la elaboración y vigilancia del cumplimiento del presupuesto del Departamento de Salud.
    • Autorización, según disponibilidad presupuestaria, de las órdenes emanadas por las distintas unidades.
    • Control y supervisión de los procesos de adquisición y pagos.
    • Control y supervisión de los procesos de remuneraciones.
    • Actualización y modificaciones al presupuesto de Salud Municipal, según corresponda.`,
  },

  {
    id: "farmacia",
    name: "Farmacia y Abastecimiento",
    parentId: "director",
    type: "area",
    columnIndex: 4,
    hasPopup: true,
    image: "/organigrama/foto.jpeg",
    personName: "Gissela Urriola",
    email: "gissela.urriola@santabarbara.cl",
    phone: "+56 9 1234 5678",
    description:
      `• Administrar la gestión de medicamentos e insumos médicos tanto en la adquisición como en la planificación, administración,
       distribución, control en los distintos establecimientos de la Dirección Comunal de salud.
      `,
  },

  {
    id: "cecosf",
    name: "CECOSF",
    parentId: "director",
    type: "area",
    columnIndex: 5,
    hasPopup: true,
    image: "/organigrama/foto.jpeg",
    personName: "Barbara Sanchez",
    email: "barbara.sanchez@santabarbara.cl",
    phone: "+56 9 1234 5678",
    description:
      `• Programar, dirigir, coordinar, gestionar y supervisar todas las actividades relacionadas con el modelo de Salud Familiar y 
      Comunitaria, relacionadas con el Centro de Salud y estaciones médico rural.

      `,
  },

  {
    id: "rural",
    name: "Salud Rural Postas",
    parentId: "director",
    type: "area",
    columnIndex: 6,
    hasPopup: true,image: "/organigrama/foto.jpeg",
    personName: "Fabiola Castillo",
    email: "fabiola.castillo@santabarbara.cl",
    phone: "+56 9 1234 5678",
    description:
      `• Programar, dirigir, coordinar, gestionar y supervisar todas las actividades relacionadas con el modelo de Salud Familiar y 
      Comunitaria, relacionadas con Postas de Salud Rural y estaciones médico rural.
      `,
  },

  {
    id: "juridica",
    name: "Área Jurídica",
    parentId: "director",
    type: "area",
    columnIndex: 7,
    hasPopup: true,
    image: "/organigrama/foto.jpeg",
    personName: "Maria Elena Contreras",
    email: "elena.contreras@santabarbara.cl",
    phone: "+56 9 1234 5678",
    description:
      `• Coordinar y asesorar las actividades de saluda de acuerdo a las instrucciones emanadas por el Alcalde y el Ministerio de Salud.
       • Proponer al Alcalde, proyectos para el mejor funcionamiento del sistema de salud de la comuna, tanto rural como urbano.
       • Asesorar permanentemente al equipo de profesionales y personal en general con respecto a funciones técnicas y administrativas
       • Coordinar el Plan Anual Comunal de Salud, proporcionando estatregias y lineamientos para su desarrollo.
      `,
  },

  {
    id: "informatica",
    name: "Área Informática",
    parentId: "director",
    type: "area",
    columnIndex: 8,
    hasPopup: true,
    image: "/organigrama/foto.jpeg",
    personName: "Erick Castillo Diaz ",
    email: "erick.castillo@santabarbara.cl",
    phone: "+56 9 1234 5678",
    description:
      `• Coordinar y asesorar las actividades de saluda de acuerdo a las instrucciones emanadas por el Alcalde y el Ministerio de Salud.
       • Proponer al Alcalde, proyectos para el mejor funcionamiento del sistema de salud de la comuna, tanto rural como urbano.
       • Asesorar permanentemente al equipo de profesionales y personal en general con respecto a funciones técnicas y administrativas
       • Coordinar el Plan Anual Comunal de Salud, proporcionando estatregias y lineamientos para su desarrollo.
       • Participar en la confección del Presupuesto Anual de Departamento de la Salud y publicación de balance presupuestario.
       • Supervisión, control y coordinación de la información de atenciones de salud prestadas en el sector rural y urbano de la comuna.
      `,
  },

  // ======================
  // SUBAREAS GESTION Y CONTROL
  // ======================

  { id: "proyectos", name: "Desarrollo de Proyectos", parentId: "gestion", type: "unit" },
  { id: "capacitacion", name: "Capacitación", parentId: "gestion", type: "unit" },

  // ======================
  // SUBAREAS SERVICIOS GENERALES
  // ======================

  
  { id: "movilizacion", name: "Movilización", parentId: "servicios", type: "unit" },
  { id: "reparacion", name: "Reparación", parentId: "servicios", type: "unit" },
  { id: "aseo", name: "Servicios de Aseo", parentId: "servicios", type: "unit" },

  // ======================
  // SUBAREAS RRHH
  // ======================

  { id: "bienestar", name: "Bienestar", parentId: "rrhh", type: "unit" },
  { id: "personal", name: "Personal", parentId: "rrhh", type: "unit" },
  { id: "decretos", name: "Decretos", parentId: "rrhh", type: "unit" },  
 // ======================
  // SUBAREAS FINANZAS
  // ======================
  { id: "adquisiciones", name: "Adquisiciones", parentId: "finanzas", type: "unit" },
  { id: "programasfin", name: "Programas", parentId: "finanzas", type: "unit" },
  { id: "remuneraciones", name: "Remuneraciones", parentId: "finanzas", type: "unit" },
  { id: "inventario", name: "Inventario", parentId: "finanzas", type: "unit" },
  // ======================
  // SUBAREAS INFORMATICA
  // ======================
  { id: "comunicaciones", name: "Comunicaciones", parentId: "informatica", type: "unit" },
  { id: "estadistica", name: "Estadística", parentId: "informatica", type: "unit" },
  { id: "soporte", name: "Soporte Técnico", parentId: "informatica", type: "unit" }
];
