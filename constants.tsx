import { Testimonial, FaqItem, BonusItem } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Carolina M.",
    age: 38,
    text: "Llevaba 3 años subiendo de peso aunque casi no comía. Los médicos decían que mis niveles estaban 'normales'. Con la guía entendí qué alimentos me inflamaban. En 3 semanas la niebla mental desapareció y ya bajé 4 kilos.",
    symptomRelief: ["Claridad mental", "Pérdida de peso", "Más energía"]
  },
  {
    id: 2,
    name: "Valeria T.",
    age: 45,
    text: "El cansancio era tan fuerte que no podía jugar con mis hijos. Pensé que era depresión, pero era mi tiroides pidiendo ayuda. Los suplementos recomendados y la rutina de noche cambiaron mi vida.",
    symptomRelief: ["Adiós fatiga", "Buen humor", "Piel hidratada"]
  },
  {
    id: 3,
    name: "Sofía L.",
    age: 31,
    text: "Se me caía el pelo a mechones y vivía con frío. Nadie me explicó que el estrés bloqueaba mi medicación. Aplicar las técnicas de gestión emocional y detox hizo que mis anticuerpos bajaran por primera vez.",
    symptomRelief: ["Pelo fuerte", "Menos frío", "Anticuerpos bajos"]
  },
  {
    id: 4,
    name: "Ana P.",
    age: 52,
    text: "Creí que a mi edad ya no había solución. Este manual no es solo dieta, es entender tu cuerpo. Me siento mejor ahora que hace 10 años. ¡Y las recetas son deliciosas!",
    symptomRelief: ["Vitalidad", "Sueño profundo", "Digestión feliz"]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Sirve si ya tomo Levotiroxina (Eutirox/T4)?",
    answer: "Sí, es el complemento ideal. La medicación repara la falta de hormona, pero no trata la causa autoinmune ni la inflamación. Este manual te ayuda a que tu cuerpo convierta y absorba mejor esa medicación."
  },
  {
    question: "¿Tengo que dejar de comer todo lo que me gusta?",
    answer: "No. Se trata de sustituir, no de prohibir. Aprenderás a identificar qué alimentos (como gluten o lácteos procesados) pueden estar atacando tu tiroides y encontrarás alternativas deliciosas en nuestro recetario."
  },
  {
    question: "¿Es complicado de seguir si trabajo todo el día?",
    answer: "Está diseñado para la mujer moderna. Las rutinas de la mañana y noche toman menos de 10 minutos. No necesitas cocinar por horas ni vivir en el gimnasio; se trata de pequeños cambios estratégicos."
  },
  {
    question: "¿En cuánto tiempo veré resultados?",
    answer: "Muchas mujeres reportan mayor energía y menos hinchazón en los primeros 7-10 días al aplicar el protocolo antiinflamatorio. La recuperación del cabello y peso es progresiva, notando grandes cambios a los 3 meses."
  },
  {
    question: "¿Qué pasa si tengo hipotiroidismo pero no Hashimoto?",
    answer: "El 90% de los casos de hipotiroidismo son causados por Hashimoto (aunque no te lo hayan diagnosticado). Aún si no fuera autoinmune, las estrategias de nutrición y metabolismo de esta guía son totalmente aplicables para reactivar tu tiroides."
  }
];

export const BONUSES: BonusItem[] = [
  {
    title: "Bonus #1: Checklist de Alimentos",
    description: "Guía visual para identificar qué activa tu tiroides y qué la bloquea. Aprende a comer de forma antiinflamatoria.",
    value: "Valor: $27 USD",
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Bonus #2: Tabla de Suplementos",
    description: "Descubre qué minerales (Selenio, Zinc, Magnesio) realmente necesitas, dosis y cómo tomarlos para potenciar tu medicación.",
    value: "Valor: $15 USD",
    imageUrl: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd0?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Bonus #3: Diario de Energía",
    description: "Un plan de 7 días para reconectar con tu cuerpo, identificar patrones emocionales y escuchar lo que tu tiroides dice.",
    value: "Valor: $35 USD",
    imageUrl: "https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=800"
  }
];