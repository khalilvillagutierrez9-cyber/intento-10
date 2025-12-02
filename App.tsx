import React from 'react';
import { 
  HeartPulse, 
  Wind, 
  Brain, 
  Thermometer, 
  Battery, 
  Activity,
  CheckCircle2,
  XCircle,
  BookOpen,
  Coffee,
  Moon,
  ShieldCheck,
  Stethoscope,
  Utensils,
  ArrowRight,
  Sun,
  ListChecks,
  AlertOctagon,
  Quote
} from 'lucide-react';
import Button from './components/Button';
import { Accordion } from './components/Accordion';
import { TESTIMONIALS, FAQS, BONUSES } from './constants';

const App: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const MODULES = [
    { 
      title: "Interpretación Real de Estudios", 
      desc: "Aprende qué pedir más allá de la TSH y cómo entender tus resultados sin miedo.", 
      icon: Stethoscope 
    },
    { 
      title: "Nutrición Estabilizadora", 
      desc: "Alimentos que calman tu tiroides y estrategias para frenar la pérdida de peso.", 
      icon: Utensils 
    },
    { 
      title: "Disparadores Ocultos", 
      desc: "Lista de factores cotidianos que están activando tus palpitaciones y calor.", 
      icon: AlertOctagon 
    },
    { 
      title: "Respiración SOS", 
      desc: "Técnicas específicas para bajar la taquicardia y la ansiedad en minutos.", 
      icon: Wind 
    },
    { 
      title: "Rutinas de Calma", 
      desc: "Protocolos de mañana, tarde y noche para enseñar a tu cuerpo a frenar.", 
      icon: Sun 
    },
    { 
      title: "Recuperación de Energía", 
      desc: "Cómo salir del agotamiento crónico aunque tu mente siga acelerada.", 
      icon: Battery 
    },
    { 
      title: "Gestión Emocional", 
      desc: "Herramientas para que el nerviosismo no controle tus decisiones diarias.", 
      icon: Brain 
    },
    { 
      title: "Checklist de Progreso", 
      desc: "Tu mapa diario para medir avances reales en sueño, pulso y temperatura.", 
      icon: ListChecks 
    }
  ];

  return (
    <div className="min-h-screen font-sans text-slate-700 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <header className="relative bg-gradient-to-br from-brand-50 via-white to-calm-50 pt-16 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-calm-200 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-800 text-sm font-bold tracking-wide mb-6">
              ESPECIALIZADO EN HIPERTIROIDISMO
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Recupera el control de un cuerpo que va <span className="text-brand-700 italic">más rápido que tú</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Una guía clara, humana y práctica para bajar la aceleración interna, reducir las palpitaciones y recuperar tu peso y energía. Deja de sobrevivir a tus síntomas y empieza a vivir de nuevo.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
              <Button onClick={scrollToPricing} className="shadow-brand-300/50">
                Quiero estabilizar mi cuerpo
              </Button>
              <p className="text-sm text-slate-500 md:hidden mt-2">Acceso inmediato · Compra segura</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-3xl mx-auto">
              {[
                "Calmar palpitaciones",
                "Dormir profundo",
                "Estabilizar peso",
                "Bajar ansiedad"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/60 p-2 rounded-lg backdrop-blur-sm shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0" />
                  <span className="font-medium text-sm md:text-base text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* --- PAIN POINTS SECTION --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ¿Sientes que tu cuerpo corre un maratón mientras tú intentas descansar?
            </h2>
            <p className="text-lg text-slate-600">No estás sola. Y no, no es "solo estrés".</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: HeartPulse, text: "Tengo palpitaciones y taquicardia estando sentada en el sofá." },
              { icon: Thermometer, text: "Siento un fuego interno y calor constante cuando los demás tienen frío." },
              { icon: Brain, text: "Mi mente no para, me cuesta dormir y me levanto agotada." },
              { icon: Battery, text: "Estoy cansada físicamente, pero por dentro siento una electricidad que no frena." },
              { icon: Wind, text: "Pierdo peso sin querer o tengo hambre constante y me asusta." },
              { icon: Activity, text: "Los médicos dicen que 'los valores mejoraron', pero yo me sigo sintiendo mal." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-brand-200 transition-colors shadow-sm hover:shadow-md group">
                <item.icon className="w-10 h-10 text-brand-500 mb-4 group-hover:scale-110 transition-transform" />
                <p className="font-medium text-slate-800 leading-snug">"{item.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COMPARISON SECTION --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-center font-serif text-3xl md:text-4xl font-bold mb-16">
            Por qué lo que has intentado hasta ahora no es suficiente
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Traditional Way */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 opacity-80">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-slate-400" />
                <h3 className="text-xl font-bold text-slate-500">Lo Tradicional</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-500">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  Solo revisan TSH y T4L, ignorando el cuadro completo.
                </li>
                <li className="flex gap-3 text-slate-500">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  Te dicen "es normal sentirse así" y que tengas paciencia.
                </li>
                <li className="flex gap-3 text-slate-500">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  Información en internet confusa, generalista o peligrosa.
                </li>
                <li className="flex gap-3 text-slate-500">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-1" />
                  Solo se enfocan en la pastilla, olvidando tu bienestar diario.
                </li>
              </ul>
            </div>

            {/* Our Guide Way */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-brand-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                RECOMENDADO
              </div>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-8 h-8 text-brand-600" />
                <h3 className="text-xl font-bold text-brand-800">Nuestra Guía de Calma</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-1" />
                  Técnicas concretas para regular el sistema nervioso.
                </li>
                <li className="flex gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-1" />
                  Rutina diaria para bajar la aceleración interna y el calor.
                </li>
                <li className="flex gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-1" />
                  Estudios completos para entender tu caso a fondo.
                </li>
                <li className="flex gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0 mt-1" />
                  Estrategias de nutrición para recuperar peso saludable.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRANSFORMATION SECTION --- */}
      <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <h2 className="text-center font-serif text-3xl md:text-5xl font-bold mb-16 text-white">
            Tu transformación es posible
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="w-full md:w-5/12 bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-brand-200">ANTES</h3>
              <ul className="space-y-4 text-brand-100">
                <li className="flex items-center gap-3"><Wind className="w-5 h-5" /> Ansiedad constante</li>
                <li className="flex items-center gap-3"><HeartPulse className="w-5 h-5" /> Palpitaciones y taquicardia</li>
                <li className="flex items-center gap-3"><Thermometer className="w-5 h-5" /> Calor interno incontrolable</li>
                <li className="flex items-center gap-3"><Moon className="w-5 h-5" /> Insomnio por mente acelerada</li>
                <li className="flex items-center gap-3"><Activity className="w-5 h-5" /> Pérdida de peso involuntaria</li>
              </ul>
            </div>

            <div className="hidden md:block">
              <ArrowRight className="w-12 h-12 text-brand-300" />
            </div>

            <div className="w-full md:w-5/12 bg-white text-brand-900 p-8 rounded-2xl shadow-2xl transform md:scale-105 border-4 border-brand-400">
              <h3 className="text-2xl font-bold mb-6 text-brand-700">DESPUÉS</h3>
              <ul className="space-y-4 font-medium">
                <li className="flex items-center gap-3"><Brain className="w-5 h-5 text-brand-600" /> Calma física y mental</li>
                <li className="flex items-center gap-3"><HeartPulse className="w-5 h-5 text-brand-600" /> Latidos tranquilos y estables</li>
                <li className="flex items-center gap-3"><Thermometer className="w-5 h-5 text-brand-600" /> Temperatura equilibrada</li>
                <li className="flex items-center gap-3"><Moon className="w-5 h-5 text-brand-600" /> Sueño reparador y profundo</li>
                <li className="flex items-center gap-3"><Activity className="w-5 h-5 text-brand-600" /> Peso saludable recuperado</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button onClick={scrollToPricing} variant="secondary" className="text-brand-900 font-bold">
              Quiero esta transformación
            </Button>
          </div>
        </div>
      </section>

      {/* --- MODULES SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ¿Qué encontrarás dentro de la guía?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Un paso a paso lógico y ordenado para que dejes de buscar información suelta y empieces a aplicar soluciones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MODULES.map((module, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                  <module.icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">{module.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BONUSES SECTION --- */}
      <section className="py-24 bg-brand-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-center font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            Regalos exclusivos para acelerar tu recuperación
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {BONUSES.map((bonus, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <div className="h-48 bg-slate-200 relative overflow-hidden group">
                  <img 
                    src={bonus.imageUrl} 
                    alt={bonus.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-bold px-3 py-1 m-4 rounded-full">
                    BONUS #{i + 1}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-xl text-slate-800 mb-2">{bonus.title}</h3>
                  <p className="text-slate-600 mb-4 flex-1">{bonus.description}</p>
                  <div className="pt-4 border-t border-slate-100 text-brand-600 font-semibold text-sm">
                    {bonus.value} (GRATIS HOY)
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-center font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-16">
            Mujeres que recuperaron su calma
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-8 rounded-2xl relative">
                <Quote className="w-10 h-10 text-brand-200 absolute top-6 left-6" />
                <div className="relative z-10 pl-4">
                  <p className="text-lg text-slate-700 italic mb-6 leading-relaxed">
                    "{t.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-900">{t.name}, {t.age} años</p>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {t.symptomRelief.map((symptom, i) => (
                      <span key={i} className="text-xs bg-white border border-brand-100 text-brand-700 px-2 py-1 rounded-full">
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-20 bg-brand-50/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-center font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-12">
            Preguntas Frecuentes
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-brand-100 p-6 md:p-8">
            {FAQS.map((faq, index) => (
              <Accordion key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA (PRICING) --- */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-brand-900 via-brand-800 to-purple-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Es hora de darle paz a tu cuerpo
          </h2>
          <p className="text-xl text-brand-100 mb-12 max-w-2xl mx-auto">
            Deja de pelear contra tu propio cuerpo y empieza a darle las herramientas que necesita para sanar y estabilizarse.
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 mb-12 inline-block w-full max-w-3xl">
            <div className="flex flex-col md:flex-row items-center justify-around gap-8 mb-10">
              <div className="text-left space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-500 rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                  <span className="text-lg font-medium">Guía Completa en PDF</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-brand-500 rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                  <span className="text-lg font-medium">3 Bonus Exclusivos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-brand-500 rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                  <span className="text-lg font-medium">Acceso de por vida</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-brand-500 rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                  <span className="text-lg font-medium">Garantía de satisfacción</span>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-slate-300 line-through text-lg">Precio Regular: $97 USD</p>
                <p className="text-5xl font-bold text-white mb-2">$37 <span className="text-xl text-brand-200 font-normal">USD</span></p>
                <p className="text-brand-200 text-sm">Oferta por tiempo limitado</p>
              </div>
            </div>

            <Button fullWidth className="text-xl py-6 bg-white text-brand-900 hover:bg-brand-50 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Quiero empezar mi proceso de calma
            </Button>
            <p className="mt-4 text-sm text-brand-200 opacity-80">
              Pago 100% seguro · Entrega inmediata por email
            </p>
          </div>

          <p className="text-brand-200/60 text-sm">
            Descargo de responsabilidad: Esta guía es un recurso educativo y de bienestar. No sustituye el consejo médico profesional, diagnóstico o tratamiento de tu endocrinólogo.
          </p>
        </div>
      </section>

    </div>
  );
};

export default App;