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
  Quote,
  Leaf,
  Droplets,
  Scale,
  Sparkles,
  Star
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
      title: "Entendiendo tu Tiroides", 
      desc: "Descubre por qué tu cuerpo ataca a tu tiroides y cómo detener el ataque.", 
      icon: Stethoscope 
    },
    { 
      title: "Nutrición Antiinflamatoria", 
      desc: "Alimentos que sanan tu intestino y reducen la hinchazón abdominal.", 
      icon: Utensils 
    },
    { 
      title: "El Origen Invisible", 
      desc: "Estrés, tóxicos y emociones: los disparadores ocultos de tus síntomas.", 
      icon: AlertOctagon 
    },
    { 
      title: "Suplementación Inteligente", 
      desc: "Guía de vitaminas y minerales para complementar tu medicación.", 
      icon: Droplets 
    },
    { 
      title: "Rutinas Tiroide-Friendly", 
      desc: "Hábitos de mañana y noche para resetear tu reloj biológico.", 
      icon: Sun 
    },
    { 
      title: "Gestión Emocional", 
      desc: "Cómo el chakra de la garganta y las emociones reprimidas influyen.", 
      icon: Brain 
    },
    { 
      title: "Detox Físico y Ambiental", 
      desc: "Reduce la carga tóxica en tu hogar para dejar descansar a tu sistema.", 
      icon: Leaf 
    },
    { 
      title: "Tu Cuerpo Puede Sanar", 
      desc: "Mentalidad y constancia: el camino hacia la remisión de síntomas.", 
      icon: HeartPulse 
    }
  ];

  return (
    <div className="min-h-screen font-sans text-slate-700 overflow-x-hidden bg-cream-50">
      
      {/* --- HERO SECTION (2-Column Layout / JTBD Focused) --- */}
      <header className="relative bg-gradient-to-br from-cream-50 to-cream-100 overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-50/50 rounded-bl-[10rem] -z-0 hidden lg:block"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-navy-100 rounded-full blur-3xl opacity-40 -z-0"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Copy & CTA */}
            <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-50 border border-navy-100 rounded-full text-navy-800 text-sm font-bold tracking-wide mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
                MÉTODO HASHIMOTO NUNCA MÁS
              </div>

              <h1 className="font-serif text-4xl lg:text-6xl font-bold leading-[1.1] text-navy-900 mb-6">
                Vuelve a sentirte <span className="text-gold-600 relative inline-block">
                  tú misma
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-gold-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
                </span>: Apaga la fatiga y enciende tu metabolismo.
              </h1>

              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8">
                El protocolo paso a paso para desinflamar tu cuerpo, eliminar la niebla mental y recuperar tu peso, <strong>sin dietas de hambre ni depender exclusivamente de la medicación.</strong>
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
                <Button onClick={scrollToPricing} variant="primary" className="text-lg px-8 py-5 shadow-navy-900/20 w-full sm:w-auto">
                  Quiero recuperar mi energía
                </Button>
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <span>+1,200 mujeres lo han logrado</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center lg:justify-start border-t border-navy-100 pt-6">
                <div className="flex items-center gap-2 text-navy-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <span>Sin gluten ni lácteos inflamatorios</span>
                </div>
                <div className="flex items-center gap-2 text-navy-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <span>Rutinas de 15 minutos</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual/Image */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=800" 
                  alt="Mujer vital y saludable sonriendo" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Card: Symptom Relief */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-cream-200 max-w-[200px] hidden md:block animate-bounce-slow">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-100 p-1.5 rounded-full">
                      <Battery className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-xs font-bold text-slate-500 uppercase">Nivel de Energía</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-500 w-[90%] h-full rounded-full"></div>
                  </div>
                </div>

                {/* Floating Card: Expert Badge */}
                <div className="absolute top-6 right-6 bg-navy-900 text-white p-3 rounded-lg shadow-xl text-center">
                  <span className="block text-2xl font-bold font-serif text-gold-400">100%</span>
                  <span className="text-xs uppercase tracking-wider font-medium">Holístico</span>
                </div>
              </div>
              
              {/* Abstract decorative shape behind image */}
              <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-gold-400/30 rounded-3xl -z-10 translate-x-4 translate-y-4"></div>
            </div>

          </div>
        </div>
      </header>

      {/* --- PAIN POINTS SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              ¿Te suena familiar esta historia?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              1 de cada 8 mujeres vive esto en silencio. Los exámenes dicen "todo bien", pero tú sabes que no es así.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Battery, text: "Te levantas cansada aunque hayas dormido 8 horas, y la fatiga te acompaña todo el día." },
              { icon: Scale, text: "Subes de peso inexplicablemente o no logras bajar ni un gramo haciendo dieta." },
              { icon: Brain, text: "Sientes 'niebla mental', olvidas cosas simples y te cuesta concentrarte." },
              { icon: Thermometer, text: "Tienes frío constante (manos y pies helados) cuando los demás están bien." },
              { icon: Wind, text: "Tu cabello se cae, tus uñas se quiebran y tu piel está seca sin importar qué uses." },
              { icon: Activity, text: "Sientes apatía, ansiedad o cambios de humor que no te pertenecen." },
            ].map((item, i) => (
              <div key={i} className="bg-cream-50 p-8 rounded-2xl border border-cream-200 hover:border-navy-200 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 group">
                <item.icon className="w-10 h-10 text-navy-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <p className="font-medium text-slate-700 leading-snug">"{item.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COMPARISON SECTION --- */}
      <section className="py-24 bg-cream-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-center font-serif text-3xl md:text-4xl font-bold mb-16 text-navy-900">
            Un enfoque diferente para resultados reales
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Traditional Way */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 opacity-90">
              <div className="flex items-center gap-3 mb-8">
                <XCircle className="w-8 h-8 text-slate-400" />
                <h3 className="text-2xl font-bold text-slate-500">Lo Convencional</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex gap-4 text-slate-500 items-start">
                  <XCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>"Toma esta pastilla y acostúmbrate a vivir cansada por el resto de tu vida."</span>
                </li>
                <li className="flex gap-4 text-slate-500 items-start">
                  <XCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Solo miran la TSH en analíticas, ignorando anticuerpos, T3 libre y nutrientes clave.</span>
                </li>
                <li className="flex gap-4 text-slate-500 items-start">
                  <XCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Te recomiendan dietas de "pasar hambre" que solo estresan más a tu metabolismo.</span>
                </li>
                <li className="flex gap-4 text-slate-500 items-start">
                  <XCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Ignoran completamente el impacto del estrés, el sueño y las emociones en tu tiroides.</span>
                </li>
              </ul>
            </div>

            {/* Our Guide Way */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gold-400 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold-400 text-navy-900 text-xs font-bold px-4 py-2 rounded-bl-xl tracking-wider">
                MÉTODO HASHIMOTO NUNCA MÁS
              </div>
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="w-8 h-8 text-gold-500" />
                <h3 className="text-2xl font-bold text-navy-900">Nuestro Método</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex gap-4 text-slate-800 font-medium items-start">
                  <CheckCircle2 className="w-6 h-6 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>Atacamos la causa raíz reduciendo la inflamación y regulando la autoinmunidad.</span>
                </li>
                <li className="flex gap-4 text-slate-800 font-medium items-start">
                  <CheckCircle2 className="w-6 h-6 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>Nutrición densa que activa tu metabolismo y te da saciedad (sin contar calorías).</span>
                </li>
                <li className="flex gap-4 text-slate-800 font-medium items-start">
                  <CheckCircle2 className="w-6 h-6 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>Suplementación estratégica para que tu cuerpo realmente absorba y use la hormona.</span>
                </li>
                <li className="flex gap-4 text-slate-800 font-medium items-start">
                  <CheckCircle2 className="w-6 h-6 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>Gestión del estrés y detox para bajar el cortisol y permitir que tu cuerpo sane.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRANSFORMATION SECTION (BENEFITS) --- */}
      <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h2 className="text-center font-serif text-3xl md:text-5xl font-bold mb-16 text-white">
            Tu vida después de aplicar el método
          </h2>
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            {/* ANTES */}
            <div className="w-full lg:w-5/12 bg-white/5 p-8 rounded-3xl backdrop-blur-md border border-white/10">
              <h3 className="text-2xl font-bold mb-8 text-slate-400 border-b border-white/10 pb-4">ANTES</h3>
              <ul className="space-y-6 text-slate-300">
                <li className="flex items-start gap-4">
                   <div className="bg-white/10 p-2 rounded-lg"><Battery className="w-5 h-5 text-slate-400" /></div>
                   <span className="mt-1">Agotamiento crónico que no se va durmiendo.</span>
                </li>
                <li className="flex items-start gap-4">
                   <div className="bg-white/10 p-2 rounded-lg"><Scale className="w-5 h-5 text-slate-400" /></div>
                   <span className="mt-1">Peso estancado y sensación de hinchazón constante.</span>
                </li>
                <li className="flex items-start gap-4">
                   <div className="bg-white/10 p-2 rounded-lg"><Brain className="w-5 h-5 text-slate-400" /></div>
                   <span className="mt-1">Olvidos, confusión y dificultad para concentrarte.</span>
                </li>
                <li className="flex items-start gap-4">
                   <div className="bg-white/10 p-2 rounded-lg"><Wind className="w-5 h-5 text-slate-400" /></div>
                   <span className="mt-1">Pelo frágil que se cae y piel extremadamente seca.</span>
                </li>
              </ul>
            </div>

            <div className="hidden lg:block">
              <ArrowRight className="w-12 h-12 text-gold-400 animate-pulse" />
            </div>

            {/* DESPUÉS (BENEFITS) */}
            <div className="w-full lg:w-5/12 bg-cream-50 text-navy-900 p-8 rounded-3xl shadow-2xl transform lg:scale-105 border-4 border-gold-400 relative">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-gold-500 text-white font-bold px-4 py-2 rounded-full shadow-lg text-sm">
                RESULTADOS REALES
              </div>
              <h3 className="text-2xl font-bold mb-8 text-navy-800 border-b border-navy-200 pb-4">DESPUÉS</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-navy-100 p-2 rounded-lg"><Brain className="w-5 h-5 text-navy-600" /></div>
                  <span className="font-medium text-slate-700 mt-0.5">
                    <strong>Claridad Mental:</strong> Disipa la "niebla mental" y recupera tu agudeza cognitiva para volver a confiar en tu memoria.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-navy-100 p-2 rounded-lg"><Scale className="w-5 h-5 text-navy-600" /></div>
                  <span className="font-medium text-slate-700 mt-0.5">
                    <strong>Peso Saludable:</strong> Reactiva tu metabolismo comiendo delicioso para soltar el peso estancado y sentirte ligera.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-navy-100 p-2 rounded-lg"><Sun className="w-5 h-5 text-navy-600" /></div>
                  <span className="font-medium text-slate-700 mt-0.5">
                    <strong>Energía Renovable:</strong> Despierta descansada y mantén tu vitalidad estable hasta la noche sin depender del café.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-navy-100 p-2 rounded-lg"><Thermometer className="w-5 h-5 text-navy-600" /></div>
                  <span className="font-medium text-slate-700 mt-0.5">
                    <strong>Temperatura Real:</strong> Enciende tu termostato interno para dejar de vivir con frío y sentir calidez en manos y pies.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-navy-100 p-2 rounded-lg"><HeartPulse className="w-5 h-5 text-navy-600" /></div>
                  <span className="font-medium text-slate-700 mt-0.5">
                    <strong>Calma Interior:</strong> Estabiliza tus emociones sanando tu intestino para cambiar la ansiedad por serenidad profunda.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button onClick={scrollToPricing} variant="secondary" className="font-bold text-lg py-4 px-12 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
              Sí, quiero sanar mi cuerpo
            </Button>
          </div>
        </div>
      </section>

      {/* --- MODULES SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              ¿Qué aprenderás en el manual?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              8 Capítulos diseñados para llevarte de la confusión a la claridad absoluta sobre tu salud.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MODULES.map((module, i) => (
              <div key={i} className="p-6 rounded-xl border border-cream-200 bg-cream-50 hover:bg-white hover:shadow-lg hover:border-gold-300 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                  <module.icon className="w-6 h-6 text-navy-700" />
                </div>
                <h3 className="font-bold text-lg text-navy-900 mb-2">{module.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BONUSES SECTION --- */}
      <section className="py-24 bg-cream-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-center font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-12">
            Regalos exclusivos para acelerar tu recuperación
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {BONUSES.map((bonus, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col border border-cream-200 group">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img 
                    src={bonus.imageUrl} 
                    alt={bonus.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 hover:opacity-100"
                  />
                  <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-3 py-1 m-4 rounded-full shadow-sm">
                    BONUS #{i + 1}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-xl text-navy-900 mb-3">{bonus.title}</h3>
                  <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">{bonus.description}</p>
                  <div className="pt-4 border-t border-cream-100 text-gold-600 font-bold text-sm tracking-wide">
                    {bonus.value} (GRATIS HOY)
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- RECIPE BOOK SPECIAL FEATURE --- */}
      <section className="py-24 bg-navy-800 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <span className="inline-block py-1 px-3 rounded bg-navy-700 text-gold-400 font-bold tracking-wider text-xs uppercase border border-navy-600">
                ¡Recetario Incluido!
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
                Come delicioso y <br/>sana tu tiroides
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Olvídate de comer pollo hervido y lechuga. Te regalamos un recetario antiinflamatorio completo con más de 100 opciones diseñadas para Hashimoto:
              </p>
              <ul className="grid grid-cols-1 gap-4">
                <li className="flex items-center gap-3 p-3 bg-navy-900/50 rounded-lg border border-navy-700">
                  <div className="bg-gold-500/20 p-1.5 rounded-full"><Utensils className="w-4 h-4 text-gold-400"/></div>
                  <span className="font-medium">20 Desayunos energizantes (sin gluten)</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-navy-900/50 rounded-lg border border-navy-700">
                   <div className="bg-gold-500/20 p-1.5 rounded-full"><Utensils className="w-4 h-4 text-gold-400"/></div>
                   <span className="font-medium">40 Platos principales sabrosos</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-navy-900/50 rounded-lg border border-navy-700">
                   <div className="bg-gold-500/20 p-1.5 rounded-full"><Utensils className="w-4 h-4 text-gold-400"/></div>
                   <span className="font-medium">20 Sopas reconfortantes y 21 Ensaladas</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gold-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=800" 
                alt="Comida saludable" 
                className="relative rounded-2xl shadow-2xl border-4 border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-center font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-16">
            Mujeres reales, resultados reales
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-cream-50 p-8 rounded-2xl relative border border-cream-200">
                <Quote className="w-10 h-10 text-gold-200 absolute top-6 left-6" />
                <div className="relative z-10 pl-4">
                  <p className="text-lg text-slate-700 italic mb-6 leading-relaxed">
                    "{t.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-navy-900">{t.name}, {t.age} años</p>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-gold-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {t.symptomRelief.map((symptom, i) => (
                      <span key={i} className="text-xs bg-white border border-gold-200 text-navy-700 px-2 py-1 rounded-full font-medium">
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
      <section className="py-24 bg-cream-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-center font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-12">
            Preguntas Frecuentes
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-navy-100 p-6 md:p-8">
            {FAQS.map((faq, index) => (
              <Accordion key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA (PRICING) --- */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Es hora de priorizarte a ti misma
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Tienes dos opciones: seguir intentando sobrevivir a tus síntomas sola, o seguir un mapa claro hacia tu bienestar.
          </p>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-white/20 mb-12 inline-block w-full max-w-3xl text-navy-900 shadow-2xl relative">
            {/* Best value badge */}
             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-white px-6 py-2 rounded-full font-bold shadow-lg tracking-wide text-sm">
                OFERTA ESPECIAL
             </div>

            <div className="flex flex-col md:flex-row items-center justify-around gap-8 mb-10 mt-4">
              <div className="text-left space-y-5">
                <div className="flex items-center gap-3">
                  <div className="bg-gold-500 rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                  <span className="text-lg font-medium text-navy-800">Manual "Hashimoto Nunca Más"</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gold-500 rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                  <span className="text-lg font-medium text-navy-800">3 Bonus Exclusivos (Checklist, Diario, Suplementos)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gold-500 rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                  <span className="text-lg font-medium text-navy-800">Recetario Antiinflamatorio (+100 recetas)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gold-500 rounded-full p-1"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                  <span className="text-lg font-medium text-navy-800">Acceso de por vida</span>
                </div>
              </div>
              
              <div className="text-center md:text-right p-6 bg-cream-50 rounded-2xl border border-cream-200 min-w-[200px]">
                <p className="text-slate-400 line-through text-lg font-medium">Regular: $97 USD</p>
                <div className="flex items-baseline justify-center md:justify-end gap-1 mb-2">
                  <span className="text-5xl font-bold text-navy-900">$37</span>
                  <span className="text-xl text-slate-500 font-normal">USD</span>
                </div>
                <p className="text-gold-700 font-bold text-xs bg-gold-100 px-3 py-1 rounded-full inline-block uppercase tracking-wide">Ahorras 60%</p>
              </div>
            </div>

            <Button fullWidth className="text-xl py-6 bg-navy-900 text-white hover:bg-navy-800 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Descargar todo ahora
            </Button>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4"/> Pago 100% seguro</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span>Entrega inmediata por email</span>
            </div>
          </div>

          <p className="text-slate-400 text-sm opacity-70 max-w-2xl mx-auto leading-relaxed">
            Descargo de responsabilidad: Esta guía es un recurso educativo y de bienestar basado en medicina funcional y nutrición. No sustituye el consejo médico profesional, diagnóstico o tratamiento de tu endocrinólogo.
          </p>
        </div>
      </section>

    </div>
  );
};

export default App;