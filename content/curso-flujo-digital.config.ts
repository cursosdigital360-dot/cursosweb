export interface CourseEvent {
  time: string;
  title: string;
  description?: string;
  points?: string[];
}

export interface CourseDay {
  dayNumber: number;
  dateLabel: string;
  events: CourseEvent[];
}

export interface CourseModule {
  id: number;
  title: string;
  description: string;
  equipments?: string[];
}

export interface CourseConfig {
  meta: {
    title: string;
    description: string;
    h1: string;
    keywords: string[];
  };
  info: {
    id: string;
    name: string;
    instructor: string;
    modality: string;
    location: string;
    dates: string;
    duration: string;
    seatsTotal: number;
    investment: {
      normalPrice: string;
      earlyBirdPrice: string;
      depositAmount: string;
      currency: string;
      textClose: string;
    };
  };
  ctas: {
    primary: string;
    secondary: string;
    microcopy: string;
    whatsappMessage: string;
    whatsappLink: string;
  };
  trustBlock: {
    title: string;
    text: string;
    signals: string[];
  };
  transformation: {
    centralIdea: string;
    commercialPromise: string;
    outcomesTitle: string;
    outcomes: string[];
    closingNote: string;
  };
  modules: CourseModule[];
  technology: {
    title: string;
    text: string;
    tools: string[];
    focus: string;
  };
  schedule: {
    title: string;
    days: CourseDay[];
    optionalExperience?: {
      title: string;
      description: string;
    };
  };
  experience: {
    title: string;
    text: string;
    includes: string[];
  };
  targetAudience: {
    forWhom: {
      title: string;
      items: string[];
    };
    notForWhom: {
      title: string;
      items: string[];
    };
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaFinal: {
    title: string;
    text: string;
    ctaLabel: string;
    microcopy: string;
  };
  visualDirection: {
    aesthetic: string;
    sensation: string;
    colors: {
      primaryBg: string;
      secondary: string;
      accent: string;
      support: string;
    };
  };
  assets: {
    heroBg: string;
    instructorPhoto: string;
    scannerMedit: string;
    scannerSeed: string;
    sprintrayPrinter: string;
    exocadSoftware: string;
    provisionalsResin: string;
    makeupDental: string;
    clinicPhoto: string;
    tepicNight: string;
    tobaraTrip: string;
    ogImage: string;
  };
}

export const cursoFlujoDigitalConfig: CourseConfig = {
  meta: {
    title: "Curso de Flujo Digital Dental en Tepic | Dr. Alan Castillo",
    description: "Curso presencial de flujo digital dental en Tepic con el Dr. Alan Castillo. Aprende escaneo intraoral, diseño en Exocad, impresión 3D y provisionales en resina.",
    h1: "Curso de flujo digital dental en Tepic",
    keywords: [
      "curso de flujo digital dental",
      "curso Exocad México",
      "curso Exocad Tepic",
      "curso escáner intraoral",
      "curso impresión 3D dental",
      "odontología digital Tepic",
      "curso odontología digital México",
      "provisionales impresos en resina",
      "curso dental presencial"
    ]
  },
  info: {
    id: "curso-flujo-digital-2026",
    name: "Flujo Digital en tu Clínica",
    instructor: "Dr. Alan Castillo",
    modality: "Curso presencial intensivo",
    location: "Tepic, Nayarit",
    dates: "Viernes 31 de julio y sábado 1 de agosto",
    duration: "2 días de práctica real",
    seatsTotal: 20,
    investment: {
      normalPrice: "$12,000 MXN",
      earlyBirdPrice: "$9,300 MXN",
      depositAmount: "$2,000 MXN",
      currency: "MXN",
      textClose: "La preventa está disponible por tiempo limitado. El cupo es reducido para mantener una experiencia práctica, personalizada y con acompañamiento real."
    }
  },
  ctas: {
    primary: "Apartar mi lugar por WhatsApp",
    secondary: "Ver temario del curso",
    microcopy: "Aparta tu lugar con $2,000 MXN. Cupo limitado a 20 participantes.",
    whatsappMessage: "Hola, quiero información para apartar mi lugar en el curso Flujo Digital en tu Clínica del Dr. Alan Castillo.",
    whatsappLink: "https://wa.me/525520894849?text=Hola%2C%20quiero%20informaci%C3%B3n%20para%20apartar%20mi%20lugar%20en%20el%20curso%20Flujo%20Digital%20en%20tu%20Cl%C3%ADnica%20del%20Dr.%20Alan%20Castillo."
  },
  trustBlock: {
    title: "Aprende con práctica real, no solo viendo diapositivas",
    text: "Este curso está diseñado para odontólogos que quieren entender y aplicar el flujo digital dentro de su clínica, desde el escaneo hasta el diseño, impresión y terminado de provisionales.",
    signals: [
      "Instructor: Dr. Alan Castillo",
      "Práctica 1 a 1",
      "Equipos reales de escaneo e impresión",
      "Software Exocad",
      "Resinas biocompatibles",
      "Enfoque clínico y práctico",
      "Cupo reducido"
    ]
  },
  transformation: {
    centralIdea: "Aprende a escanear, diseñar, imprimir y maquillar provisionales en resina dentro de un flujo digital real de clínica.",
    commercialPromise: "En 2 días presenciales, el odontólogo aprenderá a integrar escáner intraoral, diseño en Exocad, impresión 3D y comunicación efectiva con laboratorio dental para comenzar a implementar un flujo digital más claro, práctico y profesional en su clínica.",
    outcomesTitle: "Al finalizar el curso podrás aplicar un flujo digital más claro en tu clínica",
    outcomes: [
      "Escanear pacientes.",
      "Diseñar en Exocad.",
      "Imprimir en 3D.",
      "Maquillar provisionales impresos en resina.",
      "Entender el flujo completo entre escaneo, diseño, impresión y terminado.",
      "Comunicarte mejor con tu laboratorio dental.",
      "Tener mayor claridad para integrar tecnología digital en tu práctica odontológica."
    ],
    closingNote: "Este curso no busca saturarte de teoría. Está diseñado para que entiendas el flujo completo practicando paso a paso."
  },
  modules: [
    {
      id: 1,
      title: "Escaneo intraoral",
      description: "Aprenderás el uso práctico del escáner intraoral para capturar información clínica con precisión y llevar el caso al entorno digital.",
      equipments: ["Medit", "SEED Scan"]
    },
    {
      id: 2,
      title: "Diseño digital en Exocad",
      description: "Practicarás diseño dental digital con Exocad para comprender el proceso desde el archivo escaneado hasta la preparación del caso."
    },
    {
      id: 3,
      title: "Impresión 3D dental",
      description: "Aprenderás el flujo básico de impresión 3D aplicado a odontología, utilizando impresoras dentales SprintRay."
    },
    {
      id: 4,
      title: "Provisionales impresos en resina",
      description: "Trabajarás con provisionales y resinas biocompatibles para entender el proceso de fabricación, terminado y aplicación clínica."
    },
    {
      id: 5,
      title: "Maquillaje dental de provisionales",
      description: "Practicarás maquillaje de provisionales impresos en resina para mejorar el acabado estético y la presentación del caso."
    },
    {
      id: 6,
      title: "Comunicación con laboratorio",
      description: "Aprenderás a mejorar la comunicación 1 a 1 con tu laboratorio dental mediante archivos, diseño digital y procesos más claros."
    }
  ],
  technology: {
    title: "Trabajarás con tecnología real de odontología digital",
    text: "Durante el curso utilizarás herramientas y equipos aplicados al flujo digital clínico.",
    tools: [
      "Escáner intraoral Medit",
      "Escáner intraoral SEED Scan",
      "Impresoras dentales SprintRay",
      "Software Exocad",
      "Resinas biocompatibles",
      "Micromotor",
      "Pinceles",
      "Laptop gamer para práctica y procesamiento"
    ],
    focus: "No se trata solo de conocer el equipo. Se trata de entender cómo se conecta cada parte del proceso para llevar un caso desde la boca del paciente hasta un resultado impreso y terminado."
  },
  schedule: {
    title: "Programa del Curso",
    days: [
      {
        dayNumber: 1,
        dateLabel: "Viernes 31 de julio",
        events: [
          {
            time: "10:00 a.m.",
            title: "Registro",
            description: "Recepción de participantes y preparación inicial."
          },
          {
            time: "10:15 a.m.",
            title: "Presentación",
            description: "Introducción al curso, objetivos y estructura del flujo digital."
          },
          {
            time: "10:30 a.m. a 2:00 p.m.",
            title: "Escaneo intraoral y diseño inicial",
            points: [
              "Uso del escáner intraoral.",
              "Práctica en tiempo real.",
              "Práctica con pacientes.",
              "Acompañamiento uno a uno.",
              "Introducción práctica a diseño en Exocad."
            ]
          },
          {
            time: "2:00 p.m. a 3:00 p.m.",
            title: "Comida y descanso",
            description: "Espacio de convivencia y networking."
          },
          {
            time: "3:00 p.m. a 6:00 p.m.",
            title: "Impresión 3D dental",
            points: [
              "Preparación de archivos.",
              "Flujo de impresión.",
              "Uso de impresoras dentales.",
              "Práctica de impresión 3D."
            ]
          },
          {
            time: "8:00 p.m. a 10:00 p.m.",
            title: "Recorrido por Tepic",
            description: "Recorrido nocturno por “la ciudad que sonríe”."
          }
        ]
      },
      {
        dayNumber: 2,
        dateLabel: "Sábado 1 de agosto",
        events: [
          {
            time: "10:00 a.m. a 3:00 p.m.",
            title: "Práctica de diseño",
            points: [
              "Diseño dental digital.",
              "Flujo de trabajo en Exocad.",
              "Revisión de casos.",
              "Corrección y acompañamiento."
            ]
          },
          {
            time: "3:00 p.m. a 6:00 p.m.",
            title: "Provisionales en resina y terminado",
            points: [
              "Provisionales impresos en resina.",
              "Práctica con moldes 3D.",
              "Maquillaje dental.",
              "Acabado y presentación."
            ]
          }
        ]
      }
    ],
    optionalExperience: {
      title: "Experiencia opcional en La Tóbara",
      description: "Una experiencia adicional de viaje y convivencia para cerrar el fin de semana con networking entre colegas el día domingo."
    }
  },
  experience: {
    title: "Más que un curso: una experiencia completa en Tepic",
    text: "La experiencia está pensada para que aprendas, practiques, convivas y conectes con otros odontólogos interesados en integrar tecnología digital a su práctica.",
    includes: [
      "Coffee break",
      "Café",
      "Galletas",
      "Lonche",
      "Bebidas",
      "Cocas",
      "Aguas",
      "Convivencia",
      "Recorrido nocturno por Tepic",
      "Experiencia en La Tóbara el domingo",
      "Networking con colegas"
    ]
  },
  targetAudience: {
    forWhom: {
      title: "Este curso es para ti si…",
      items: [
        "Eres odontólogo y quieres entrar al flujo digital.",
        "Ya tienes interés en escáner intraoral, Exocad o impresión 3D.",
        "Quieres dejar de depender completamente de procesos tradicionales.",
        "Buscas mejorar la comunicación con tu laboratorio dental.",
        "Quieres entender cómo escanear, diseñar e imprimir en un flujo práctico.",
        "Quieres diferenciar tu clínica con procesos más modernos.",
        "Prefieres aprender practicando, no solo viendo teoría."
      ]
    },
    notForWhom: {
      title: "Este curso no es para ti si…",
      items: [
        "Buscas una capacitación solo teórica.",
        "No estás dispuesto a practicar.",
        "No tienes interés en implementar tecnología digital.",
        "Esperas dominar todo el universo de odontología digital en un solo fin de semana.",
        "No estás abierto a trabajar paso a paso el flujo completo."
      ]
    }
  },
  faqs: [
    {
      question: "¿Necesito experiencia previa en Exocad?",
      answer: "No necesariamente. El curso está diseñado para ayudarte a entender el flujo de trabajo paso a paso, con práctica guiada."
    },
    {
      question: "¿El curso es presencial?",
      answer: "Sí. Es un curso presencial intensivo en Tepic, Nayarit."
    },
    {
      question: "¿Cuántos lugares hay disponibles?",
      answer: "El cupo está limitado a 20 participantes."
    },
    {
      question: "¿Puedo apartar mi lugar?",
      answer: "Sí. Puedes apartar tu lugar con $2,000 MXN."
    },
    {
      question: "¿Qué equipos se utilizarán?",
      answer: "Se trabajará con escáneres Medit y SEED Scan, impresoras dentales SprintRay, Exocad y resinas biocompatibles."
    },
    {
      question: "¿Qué aprenderé al terminar?",
      answer: "Podrás escanear, diseñar, imprimir, maquillar provisionales y mejorar la comunicación con tu laboratorio dental."
    },
    {
      question: "¿Incluye alimentos?",
      answer: "Sí. Incluye coffee break, café, galletas, lonche, bebidas, aguas y convivencia."
    }
  ],
  ctaFinal: {
    title: "Da el siguiente paso hacia el flujo digital en tu clínica",
    text: "Escanea, diseña, imprime y entiende cómo conectar cada etapa del proceso digital dental en una experiencia práctica de 2 días en Tepic.",
    ctaLabel: "Quiero apartar mi lugar",
    microcopy: "Preventa: $9,300 MXN. Apartado: $2,000 MXN. Cupo limitado a 20 odontólogos."
  },
  visualDirection: {
    aesthetic: "Tecnológica, clínica, premium y educativa.",
    sensation: "Precisión, modernidad, confianza y avance profesional.",
    colors: {
      primaryBg: "#0A1128",
      secondary: "#00E5FF",
      accent: "#FFFFFF",
      support: "#94A3B8"
    }
  },
  assets: {
    heroBg: "/images/curso-flujo-digital/hero-curso-flujo-digital.webp",
    instructorPhoto: "/images/curso-flujo-digital/dr-alan-castillo.webp",
    scannerMedit: "/images/curso-flujo-digital/scanner-medit.webp",
    scannerSeed: "/images/curso-flujo-digital/scanner-seed.webp",
    sprintrayPrinter: "/images/curso-flujo-digital/sprintray-impresion-3d.webp",
    exocadSoftware: "/images/curso-flujo-digital/exocad-diseno-dental.webp",
    provisionalsResin: "/images/curso-flujo-digital/provisionales-resina.webp",
    makeupDental: "/images/curso-flujo-digital/maquillaje-dental.webp",
    clinicPhoto: "/images/curso-flujo-digital/clinica-odontic-curso.webp",
    tepicNight: "/images/curso-flujo-digital/tepic-noche.webp",
    tobaraTrip: "/images/curso-flujo-digital/la-tobara.webp",
    ogImage: "/images/curso-flujo-digital/og-curso-flujo-digital.webp"
  }
};