import { Testimonial, FaqItem, BonusItem } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mariana R.",
    age: 34,
    text: "Creía que me estaba volviendo loca. El médico solo me daba pastillas, pero yo seguía con el corazón a mil y un calor insoportable. Esta guía me enseñó a calmar mi sistema nervioso. Por fin duermo 7 horas seguidas.",
    symptomRelief: ["Dormejor", "Menos ansiedad", "Calma mental"]
  },
  {
    id: 2,
    name: "Claudia S.",
    age: 42,
    text: "Bajé 8 kilos sin querer y estaba asustada. La guía no solo me ayudó a entender qué comer para estabilizarme, sino que las técnicas de respiración frenaron mis crisis de pánico. Recuperé mi peso y mi paz.",
    symptomRelief: ["Peso estable", "Sin pánico", "Más energía"]
  },
  {
    id: 3,
    name: "Elena G.",
    age: 29,
    text: "Nadie te explica lo que se siente vivir acelerada por dentro. Sentía que mi cuerpo vibraba. Con las rutinas de la guía, esa vibración paró. Ahora entiendo mis análisis y tengo el control.",
    symptomRelief: ["Cero temblores", "Control total", "Entendimiento"]
  },
  {
    id: 4,
    name: "Patricia M.",
    age: 51,
    text: "Después de 10 años con hipertiroidismo, es la primera vez que siento que tengo una hoja de ruta. Las palpitaciones bajaron drásticamente en la segunda semana aplicando los hábitos de calma.",
    symptomRelief: ["Menos palpitaciones", "Estabilidad", "Tranquilidad"]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Sirve si ya tomo medicación (metimazol/danantizol)?",
    answer: "Sí, absolutamente. La guía no reemplaza tu medicación, sino que complementa el tratamiento médico trabajando sobre tu sistema nervioso, alimentación y hábitos diarios para potenciar tu bienestar y reducir los síntomas que la pastilla sola a veces no cubre."
  },
  {
    question: "¿Me va a ayudar a recuperar peso saludable?",
    answer: "Sí. Tenemos un módulo específico dedicado a la recuperación de peso saludable sin la ansiedad de 'comer por comer', enfocándonos en nutrición densa y estabilizadora que tu cuerpo acelerado necesita."
  },
  {
    question: "¿Qué hacer cuando tengo palpitaciones?",
    answer: "La guía incluye una 'Hoja de Ruta de Emergencia' y técnicas de respiración específicas diseñadas para activar el nervio vago y reducir la frecuencia cardíaca de manera natural en momentos de crisis."
  },
  {
    question: "¿Cuánto tarda en sentirse una mejora?",
    answer: "Muchas alumnas reportan alivio en la sensación de 'aceleración' y mejor descanso en los primeros 7 a 10 días de aplicar la rutina de calma nocturna y los cambios nutricionales básicos."
  },
  {
    question: "¿Puedo seguirla si trabajo muchas horas?",
    answer: "Está diseñada para mujeres ocupadas. Las rutinas son breves y prácticas. No necesitas horas libres, solo pequeños momentos de consciencia y ajustes en tu día a día que te devolverán energía en lugar de quitártela."
  },
  {
    question: "¿Qué estudios tengo que pedir exactamente?",
    answer: "En el Módulo 1 te damos una lista detallada (más allá de TSH y T4L) para que puedas conversar con tu endocrinólogo y tener un panorama completo de tu salud tiroidea, hepática y nutricional."
  }
];

export const BONUSES: BonusItem[] = [
  {
    title: "Menú Calmante de 7 Días",
    description: "Un plan de comidas diseñado para bajar la inflamación y nutrir un metabolismo acelerado.",
    value: "Valor: $27 USD",
    imageUrl: "https://picsum.photos/id/493/300/400"
  },
  {
    title: "Lista de Compras Estabilizadora",
    description: "Sabe exactamente qué comprar en el supermercado para apoyar a tu tiroides y evitar disparadores.",
    value: "Valor: $15 USD",
    imageUrl: "https://picsum.photos/id/225/300/400"
  },
  {
    title: "Guía de Manejo de Crisis",
    description: "Protocolo SOS paso a paso para momentos de taquicardia, calor extremo o ansiedad súbita.",
    value: "Valor: $35 USD",
    imageUrl: "https://picsum.photos/id/364/300/400"
  }
];