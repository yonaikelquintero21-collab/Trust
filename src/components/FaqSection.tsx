import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Award,
  Sparkles,
  MessageCircle,
  FileQuestion,
  Search,
  ExternalLink,
  Lock,
  RefreshCw,
  Star,
  Users
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FaqSectionProps {
  onOpenSpecialist?: () => void;
}

interface FaqItem {
  id: string;
  category: string;
  question: string;
  highlight?: string;
  shortSnippet: string;
  answer: string[];
  keyPoints?: string[];
  badgeColor: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'por-que-comprar-trustpilot',
    category: 'Estrategia y Conversión',
    question: '¿Por qué debería comprar Trustpilot Reviews?',
    highlight: '85% investiga en línea',
    shortSnippet: 'Multiplica la conversión, genera confianza instantánea y vence la fricción de compra desde el primer contacto.',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    answer: [
      'El 85% de los consumidores realiza una investigación exhaustiva en internet antes de contactar a un negocio o efectuar una compra, y un 76% confía tanto en las reseñas en línea como en recomendaciones directas de amigos o familiares.',
      'Comprar reseñas verificadas en Trustpilot le permite construir una prueba social inquebrantable de forma rápida, reduciendo drásticamente el escepticismo de nuevos visitantes y aumentando de inmediato la tasa de conversión en su tienda o sitio web.',
      'Un perfil con abundantes reseñas de 5 estrellas posiciona a su marca como un referente líder en su nicho, haciendo que sus clientes potenciales lo elijan a usted por encima de competidores sin reputación visible.'
    ],
    keyPoints: [
      'Aumento comprobado del 15% al 35% en tasas de conversión web.',
      'Reducción sustancial del costo de adquisición por cliente (CAC).',
      'Validación social inmediata para nuevos lanzamientos o marcas en crecimiento.'
    ]
  },
  {
    id: 'es-seguro-comprar',
    category: 'Seguridad y Cumplimiento',
    question: '¿Es seguro comprar Trustpilot Reviews?',
    highlight: '100% Perfiles Humanos',
    shortSnippet: 'Totalmente seguro con perfiles reales geolocalizados, IPs residenciales y ritmo de goteo natural anti-detección.',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    answer: [
      'Totalmente seguro cuando se realiza a través de la metodología exclusiva de TrustUpReviews™. A diferencia de servicios de baja calidad que usan bots automatizados o cuentas recién creadas que son sancionadas, nosotros operamos con una red de usuarios verificados y perfiles con historial activo.',
      'Cada reseña se publica respetando los patrones de navegación humana, con direcciones IP residenciales geolocalizadas según el país objetivo de su público y un ritmo progresivo escalonado (drip-feed de 3 a 50 reseñas por día, según su plan).',
      'Este método garantiza que los algoritmos de verificación de Trustpilot registren la actividad como 100% natural y legítima, manteniendo la integridad total de su cuenta.'
    ],
    keyPoints: [
      'Sin bots, sin scripts automatizados ni cuentas masivas sospechosas.',
      'Publicación espaciada y progresiva (drip-feed) para emular tráfico orgánico.',
      'Monitoreo activo de retención y perfiles de alta longevidad.'
    ]
  },
  {
    id: 'eliminar-resenas-negativas',
    category: 'Gestión de Crisis',
    question: '¿puedes eliminar reseñas negativas en línea?',
    highlight: 'Supresión Legal y Técnica',
    shortSnippet: 'Sí, eliminamos reseñas ilegítimas, difamatorias o de competidores, y desplazamos el impacto de comentarios dañinos.',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    answer: [
      'Sí, es una de nuestras principales especialidades. En TrustUpReviews™ contamos con un equipo legal y técnico especializado en la impugnación y eliminación de reseñas que infringen las políticas de la plataforma, difamaciones, ataques de competidores o quejas sin sustento comercial.',
      'Analizamos minuciosamente cada reseña negativa para identificar infracciones directas a los términos de servicio de Trustpilot y gestionar su despublicación formal.',
      'En situaciones donde la reseña no pueda retirarse de inmediato por vías administrativas, aplicamos un protocolo de dilución y desplazamiento orgánico mediante un flujo constante de reseñas positivas de 5 estrellas, reduciendo la visibilidad y el peso estadístico del comentario negativo a niveles insignificantes.'
    ],
    keyPoints: [
      'Auditoría y peritaje de comentarios malintencionados o de competidores.',
      'Proceso de apelación formal fundamentado en las directrices de la plataforma.',
      'Estrategia de compensación y dilución de TrustScore garantizada.'
    ]
  },
  {
    id: 'por-que-elegir-trustupreviews',
    category: 'Ventaja Competitiva',
    question: '¿Por qué debería elegir TrustUpReviews para comprar Trustpilot Reviews?',
    highlight: 'Líder en Gestión de Reputación',
    shortSnippet: 'Tecnología propia, seguimiento en tiempo real vía Google Sheets, garantía de devolución y soporte dedicado.',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    answer: [
      'TrustUpReviews™ es la autoridad líder en gestión de reputación online. Combinamos tecnología avanzada, red humana global y una filosofía de total transparencia que no encontrará en ningún otro proveedor del mercado.',
      'Con nosotros, nunca se queda a oscuras: su progreso se rastrea en tiempo real en una hoja de Google Sheets privada y personalizada, donde puede auditar cada reseña generada, la fecha, el perfil y el impacto en su calificación general.',
      'Además, ofrecemos una garantía incondicional de devolución del dinero del 100%, gerentes de cuenta dedicados y testimonios auditados de marcas internacionales de prestigio como Villervalla, Peaches y Honest Paws.'
    ],
    keyPoints: [
      'Control total con seguimiento en vivo en Google Sheets.',
      'Atención personalizada por especialistas senior en reputación.',
      'Garantía incondicional de satisfacción y reposición por 6 meses.'
    ]
  },
  {
    id: 'importancia-crucial-compra',
    category: 'Impacto Comercial y SEO',
    question: '¿Qué hace que la compra de reseñas de Trustpilot sea tan crucial?',
    highlight: 'Posicionamiento Google & Rich Snippets',
    shortSnippet: 'Trustpilot es la autoridad máxima para Google. Afecta directamente su SEO, sus anuncios y la decisión final de compra.',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    answer: [
      'Trustpilot no es un sitio de reseñas cualquiera: es una de las plataformas de evaluación de mayor autoridad de dominio ante los ojos de Google. Sus puntuaciones y estrellas se indexan directamente en los resultados de búsqueda (SERP) a través de Rich Snippets.',
      'Tener un TrustScore alto mejora la calidad de sus anuncios en Google Ads y Meta Ads, bajando el costo por clic (CPC) y aumentando radicalmente el retorno de inversión publicitaria (ROAS).',
      'Un consumidor moderno compara entre 3 y 5 marcas antes de comprar. Si su negocio tiene 4.8 estrellas con cientos de opiniones positivas mientras el rival tiene 3.5 o no tiene reseñas, la decisión de compra se toma en segundos a su favor.'
    ],
    keyPoints: [
      'Indexación de Rich Snippets de estrellas doradas en Google.',
      'Incremento de hasta un 270% en la probabilidad de compra para productos con reseñas.',
      'Mayor confianza para transacciones de alto valor o compras con tarjeta.'
    ]
  },
  {
    id: 'obtener-naturalmente-mejores-criticas',
    category: 'Buenas Prácticas',
    question: '¿Cómo puedo obtener naturalmente mejores críticas y calificaciones en Trustpilot?',
    highlight: 'Estrategia Híbrida 360°',
    shortSnippet: 'Automatice solicitudes posventa, optimice el tiempo de contacto y cree un canal de resolución de fricciones.',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    answer: [
      'Para generar reseñas orgánicas constantes, es imprescindible sincronizar sus sistemas de e-commerce con invitaciones automatizadas por correo o SMS justo cuando el cliente experimenta el "momento de felicidad" (por ejemplo, 24 horas después de recibir el paquete).',
      'Implemente encuestas previas de satisfacción NPS: si el cliente está contento, invítelo amablemente con un enlace directo a Trustpilot; si experimentó un problema, diríjalo a un canal de soporte prioritario para resolver la situación antes de que publique una queja.',
      'El secreto más efectivo utilizado por las grandes marcas es el modelo híbrido: alimentar continuamente su perfil con el impulso estratégico de TrustUpReviews™ para neutralizar el sesgo natural donde solo los usuarios insatisfechos suelen tomar la iniciativa de escribir sin estímulo.'
    ],
    keyPoints: [
      'Automatización de disparadores de correo electrónico tras la entrega.',
      'Filtrado inteligente de soporte antes de reseñas públicas.',
      'Refuerzo continuo para vencer el sesgo de queja espontánea.'
    ]
  },
  {
    id: 'mejorar-puntuacion-pagina-resenas',
    category: 'Optimización de Perfil',
    question: '¿Puedes mejorar la puntuación de mi página de reseñas en línea?',
    highlight: 'Algoritmo Matemático de Recuperación',
    shortSnippet: 'Calculamos el volumen exacto de opiniones de 5 estrellas necesarias para elevar su TrustScore al nivel que elija.',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    answer: [
      'Sí, de manera matemática y comprobada. El algoritmo de Trustpilot calcula una media ponderada en función del tiempo y la cantidad de reseñas. Si su puntuación cayó a 2.5 o 3.5 debido a un puñado de quejas, calculamos la cantidad exacta de opiniones de 5 estrellas requeridas para compensar y superar ese promedio.',
      'Implementamos una campaña progresiva de inyección positiva que diluye el impacto visual y numérico de las bajas calificaciones pasadas, llevando su calificación a rangos óptimos como 4.7 o 4.9.',
      'Además, actualizamos y optimizamos los títulos de las reseñas para que aborden los aspectos clave de confianza que sus clientes potenciales buscan: envíos rápidos, autenticidad, calidad y soporte sobresaliente.'
    ],
    keyPoints: [
      'Cálculo algorítmico exacto del volumen requerido para su meta.',
      'Optimización de palabras clave orientadas a compra dentro de las reseñas.',
      'Resultados visibles semana a semana con reporte de evolución en tiempo real.'
    ]
  },
  {
    id: 'politica-de-garantia',
    category: 'Garantía y Confianza',
    question: '¿Cuál es su política de garantía?',
    highlight: '100% Devolución del Dinero',
    shortSnippet: 'Reembolso íntegro sin preguntas formuladas si no ve los resultados esperados, más 6 meses de reposición sin costo.',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    answer: [
      'Nuestra política es simple y transparente: ofrecemos una Garantía de Devolución del Dinero del 100%. Si en casos excepcionales usted no ve los resultados acordados en su campaña personalizada, le devolveremos íntegramente su inversión, sin preguntas incómodas ni trámites burocráticos.',
      'Adicionalmente, todas las publicaciones realizadas bajo nuestros planes cuentan con un Período de Garantía de Retención de 6 meses: si alguna reseña llega a sufrir cualquier variación o eliminación por filtros de la plataforma, nuestro equipo la sustituye de manera automática y gratuita.',
      'Usted no asume ningún riesgo al asociarse con TrustUpReviews™. Su inversión y su reputación están completamente blindadas por contrato de servicio.'
    ],
    keyPoints: [
      'Reembolso del 100% en casos excepcionales de no cumplimiento.',
      'Reposición gratuita garantizada durante 6 meses completos.',
      'Cero riesgos contractuales y máxima transparencia operativa.'
    ]
  }
];

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenSpecialist }) => {
  // First item open by default
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'por-que-comprar-trustpilot': true,
    'es-seguro-comprar': false
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    FAQ_DATA.forEach((item) => {
      allOpen[item.id] = true;
    });
    setOpenItems(allOpen);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  const categories = ['Todas', ...Array.from(new Set(FAQ_DATA.map((i) => i.category)))];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'Todas' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortSnippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.keyPoints && item.keyPoints.some((kp) => kp.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-gradient-to-b from-[#050607] via-[#090c10] to-[#040507] text-white overflow-hidden border-t border-white/10">
      {/* Luces y texturas de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#00b67a]/15 via-[#bcff48]/5 to-transparent blur-[130px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#00b67a]/5 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-[#bcff48]/5 blur-[130px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ENCABEZADO CENTRADO: PREGUNTAS FRECUENTES + IMPORTANCIA DE LAS RESEÑAS DE TRUSTPILOT */}
        <ScrollReveal direction="up" distance={25}>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00b67a]/10 border border-[#00b67a]/30 text-[#00b67a] text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm mb-5 backdrop-blur-md">
              <HelpCircle className="w-4 h-4 text-[#00b67a] animate-pulse" />
              <span>CENTRO DE CONOCIMIENTO & RESPUESTAS CLAVE</span>
            </div>

            {/* TÍTULO EN TODO EL CENTRO */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Preguntas frecuentes
            </h2>

            {/* PARTE DE ARRIBA COMO TÍTULO: IMPORTANCIA DE LAS RESEÑAS DE TRUSTPILOT */}
            <div className="inline-block relative">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#bcff48] pb-2">
                Importancia de las reseñas de Trustpilot
              </h3>
              <div className="h-1 w-24 sm:w-36 mx-auto bg-gradient-to-r from-[#00b67a] to-[#bcff48] rounded-full mb-4" />
            </div>

            {/* Párrafo contextual centrado */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Descubra cómo las reseñas de Trustpilot determinan el éxito comercial de su marca, cómo protegemos su cuenta con perfiles reales y cómo funciona nuestra garantía total de resultados.
            </p>

            {/* Filtros rápidos y buscador */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/60 p-2 sm:p-2.5 rounded-2xl border border-slate-800/80 backdrop-blur-md shadow-xl">
              <div className="relative w-full sm:w-72 md:w-80">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar una duda o término..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 min-h-[44px] bg-slate-800/70 border border-slate-700/60 rounded-xl text-base sm:text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Limpiar búsqueda"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center text-xs text-slate-400 hover:text-white"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={expandAll}
                  className="px-3.5 py-2 min-h-[40px] text-xs text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-700 flex items-center justify-center"
                >
                  Expandir todas
                </button>
                <span className="text-slate-700">|</span>
                <button
                  type="button"
                  onClick={collapseAll}
                  className="px-3.5 py-2 min-h-[40px] text-xs text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-700 flex items-center justify-center"
                >
                  Colapsar todas
                </button>
              </div>
            </div>

            {/* Píldoras de Categorías */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 min-h-[38px] text-xs font-semibold rounded-full transition-all border flex items-center justify-center active:scale-95 ${
                    selectedCategory === cat
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm'
                      : 'bg-slate-900/40 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* LISTA DE PREGUNTAS Y RESPUESTAS (ACORDEÓN ROBUSTO) */}
        <ScrollReveal direction="up" distance={30} delay={80}>
          <div className="space-y-4 sm:space-y-5">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 px-4 rounded-2xl bg-slate-900/40 border border-slate-800">
              <FileQuestion className="w-10 h-10 text-slate-500 mx-auto mb-3" />
              <p className="text-slate-300 font-medium">No se encontraron preguntas que coincidan con su búsqueda.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Todas');
                }}
                className="mt-3 text-xs text-emerald-400 hover:underline"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = !!openItems[faq.id];
              return (
                <div
                  key={faq.id}
                  className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-gradient-to-b from-slate-900/90 to-slate-900/60 border-emerald-500/40 shadow-[0_8px_30px_rgba(16,185,129,0.08)]'
                      : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/60'
                  }`}
                >
                  {/* ENCABEZADO DE LA PREGUNTA (CLICKABLE) */}
                  <button
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
                      {/* Número de pregunta */}
                      <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-slate-800/90 text-emerald-400 text-xs sm:text-sm font-bold border border-slate-700/80 group-hover:border-emerald-500/40 group-hover:text-emerald-300 transition-colors">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] sm:text-xs font-semibold border ${faq.badgeColor}`}>
                            {faq.category}
                          </span>
                          {faq.highlight && (
                            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                              <Sparkles className="w-3 h-3 text-emerald-400" />
                              {faq.highlight}
                            </span>
                          )}
                        </div>
                        <h4 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {faq.question}
                        </h4>
                        {!isOpen && (
                          <p className="mt-1 text-xs sm:text-sm text-slate-400 line-clamp-1">
                            {faq.shortSnippet}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Botón Chevron interactivo */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                          : 'rotate-0 bg-slate-800 text-slate-400 border-slate-700 group-hover:text-white group-hover:border-slate-600'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* CONTENIDO DESPLEGABLE (RESPUESTA DETALLADA) */}
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 border-t border-slate-800/60 animate-hero-entrance">
                      {/* Párrafos principales */}
                      <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                        {faq.answer.map((para, pIdx) => (
                          <p key={pIdx} className="text-slate-300">
                            {para}
                          </p>
                        ))}
                      </div>

                      {/* Puntos clave / Highlights */}
                      {faq.keyPoints && faq.keyPoints.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-slate-800/60">
                          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2.5 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            Aspectos clave garantizados:
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                            {faq.keyPoints.map((point, kpIdx) => (
                              <div
                                key={kpIdx}
                                className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/60 text-xs sm:text-sm text-slate-200"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
          </div>
        </ScrollReveal>

        {/* BANNER INFERIOR DE ACCIÓN Y CONTACTO */}
        <ScrollReveal direction="up" distance={20} delay={150}>
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-cyan-950/50 border border-emerald-500/30 relative overflow-hidden shadow-2xl">
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4 text-center md:text-left">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                  <MessageCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                    ¿Tiene alguna pregunta específica sobre su marca o sector?
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                    Nuestros estrategas senior analizan su perfil de Trustpilot de forma confidencial y diseñan una propuesta de reseñas y reputación a su medida.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <button
                  onClick={onOpenSpecialist}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-bold text-sm shadow-[0_4px_20px_rgba(16,185,129,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Hablar con un Especialista</span>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Insignia de Confianza Adicional */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Confidencial y Conforme a GDPR</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-cyan-400" />
            <span>Transacciones Cifradas SSL 256-bit</span>
          </div>
          <div className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-teal-400" />
            <span>Garantía de Reposición por 6 Meses</span>
          </div>
        </div>
      </div>
    </section>
  );
};
