import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, AlertCircle, Star, Check, ShieldCheck, ArrowRight, Zap, Sparkles, Phone, MessageSquare, TrendingUp, Play, Pause, Smartphone, Users, Award, Clock, Bell, Trash2, ShieldAlert, UserX, FileWarning, CheckCircle2, Lock, Search } from 'lucide-react';
import { ReviewProcessIllustration } from './components/ReviewProcessIllustration';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { HeroCinematicBackground } from './components/HeroCinematicBackground';
import { GlobalCursorAura } from './components/GlobalCursorAura';
import { ScrollReveal } from './components/ScrollReveal';

interface CatalogPlan {
  id: string;
  name: string;
  reviewsCount: string;
  price: string;
  originalPrice: string;
  popular?: boolean;
  delivery: string;
  features: string[];
}

interface PlatformCatalog {
  platform: string;
  projectCode: string;
  badge: string;
  headline: string;
  description: string;
  accentColor: string;
  accentBg: string;
  image?: string;
  alt?: string;
  plans: CatalogPlan[];
}

const CATALOGS_DATA: Record<string, PlatformCatalog> = {
  'Google Reviews': {
    platform: 'Google Reviews',
    projectCode: 'Kinetic Type',
    badge: '4.9 ★ Posicionamiento Local',
    headline: 'Catálogo de Reseñas para Google Maps y Google Search',
    description: 'Aumenta tu puntuación de estrellas con perfiles geolocalizados de alto nivel y reseñas con texto personalizado que disparan tus llamadas y visitas.',
    accentColor: '#ff5a42',
    accentBg: 'bg-[#ff5a42]/10 border-[#ff5a42]/30',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    alt: 'Boutique café con terraza y clientes consultando opiniones en Google Maps',
    plans: [
      {
        id: 'google-10',
        name: 'Pack Impulso',
        reviewsCount: '10 Reseñas Reales 5★',
        price: '79 €',
        originalPrice: '110 €',
        delivery: 'Entrega en 5-8 días naturales',
        features: [
          'Perfiles locales españoles con historial activo',
          'Textos personalizados con palabras clave de tu negocio',
          'Publicación escalonada para máxima naturalidad',
          'Garantía de reposición de 6 meses',
          'Soporte por WhatsApp y correo',
        ],
      },
      {
        id: 'google-25',
        name: 'Pack Crecimiento Local',
        reviewsCount: '25 Reseñas Reales 5★',
        price: '169 €',
        originalPrice: '240 €',
        popular: true,
        delivery: 'Entrega gradual en 12-18 días',
        features: [
          'Perfiles Local Guide de nivel 4 a 7',
          'Mención de productos y servicios estratégicos',
          'Subida en el Local Pack de Google Maps',
          'Auditoría gratuita de tu ficha Google Business',
          'Garantía de permanencia de 12 meses',
          'Soporte prioritario dedicado',
        ],
      },
      {
        id: 'google-50',
        name: 'Pack Autoridad Total',
        reviewsCount: '50 Reseñas Reales 5★',
        price: '299 €',
        originalPrice: '450 €',
        delivery: 'Entrega estratégica en 25-35 días',
        features: [
          'Incluye tarjeta física NFC Google Reviews para mostrador',
          'Publicación con fotos reales de clientes si se requiere',
          'Respuestas optimizadas incluidas para cada reseña',
          'Blindaje contra reseñas falsas de la competencia',
          'Garantía de permanencia de 12 meses',
          'Gestor de cuenta individual',
        ],
      },
      {
        id: 'google-100',
        name: 'Pack Dominio de Ciudad',
        reviewsCount: '100 Reseñas Reales 5★',
        price: '549 €',
        originalPrice: '820 €',
        delivery: 'Plan mensual programado (30-60 días)',
        features: [
          'Top 1 asegurado en tu zona y sector local',
          'Pack de 3 tarjetas físicas NFC + código QR adhesivo',
          'Monitoreo continuo de reputación con alertas',
          'Filtro previo automático contra valoraciones negativas',
          'Garantía ilimitada durante todo el contrato',
        ],
      },
    ],
  },
  Trustpilot: {
    platform: 'Trustpilot',
    projectCode: 'New Matter',
    badge: 'TrustScore 4.8 · Excelente',
    headline: 'Catálogo de Opiniones Verificadas en Trustpilot',
    description: 'Transforma la confianza de tu tienda online o SaaS logrando la insignia verde "Excelente" que incrementa drásticamente la conversión de ventas.',
    accentColor: '#bcff48',
    accentBg: 'bg-[#bcff48]/10 border-[#bcff48]/30',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80',
    alt: 'Experiencia de compra segura y pago verificado en tienda online',
    plans: [
      {
        id: 'trust-10',
        name: 'Pack Inicio Seguro',
        reviewsCount: '10 Opiniones Verificadas',
        price: '89 €',
        originalPrice: '125 €',
        delivery: 'Entrega en 7-10 días',
        features: [
          'Perfiles con historial de reseñas verificado',
          'Redacción convincente orientada a resolver objeciones',
          'Garantía de aprobación de Trustpilot',
          'Garantía de permanencia de 6 meses',
          'Soporte directo',
        ],
      },
      {
        id: 'trust-25',
        name: 'Pack TrustScore Pro',
        reviewsCount: '25 Opiniones Verificadas',
        price: '199 €',
        originalPrice: '280 €',
        popular: true,
        delivery: 'Entrega progresiva en 15-20 días',
        features: [
          'Asegura calificación de 4.7 a 4.9 estrellas',
          'Perfiles de clientes verificados con ticket o pedido',
          'Distribución horaria y de IP 100% natural',
          'Auditoría y optimización del perfil de empresa',
          'Garantía de permanencia de 12 meses',
        ],
      },
      {
        id: 'trust-50',
        name: 'Pack Escala E-commerce',
        reviewsCount: '50 Opiniones Verificadas',
        price: '369 €',
        originalPrice: '520 €',
        delivery: 'Entrega controlada en 30-40 días',
        features: [
          'Insignia verde "Excelente" de 5 estrellas',
          'Redacción profunda destacando envíos rápidos y atención',
          'Filtro previo anti-quejas',
          'Estrategia de respuestas automáticas para Trustpilot',
          'Garantía de reposición de 12 meses',
        ],
      },
      {
        id: 'trust-100',
        name: 'Pack Blindaje Corporativo',
        reviewsCount: '100 Opiniones Verificadas',
        price: '680 €',
        originalPrice: '990 €',
        delivery: 'Campaña trimestral programada',
        features: [
          'Máxima reputación para marcas de gran volumen',
          'Defensa y gestión activa contra reseñas maliciosas',
          'Monitoreo semanal con informe de métricas',
          'Soporte prioritario 24/7',
          'Garantía extendida integral',
        ],
      },
    ],
  },
  TripAdvisor: {
    platform: 'TripAdvisor',
    projectCode: 'Signal House',
    badge: 'N.º 1 Ranking de Viajeros',
    headline: 'Catálogo de Opiniones para Restaurantes, Hoteles y Turismo',
    description: 'Sitúa tu establecimiento entre los más recomendados por comensales y turistas, aspirando a la codiciada insignia Travellers’ Choice.',
    accentColor: '#bcff48',
    accentBg: 'bg-[#bcff48]/10 border-[#bcff48]/30',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Restaurante de alta gastronomía con ambiente cálido galardonado en TripAdvisor',
    plans: [
      {
        id: 'trip-12',
        name: 'Pack Comensal Local',
        reviewsCount: '12 Opiniones de Viajeros',
        price: '95 €',
        originalPrice: '135 €',
        delivery: 'Entrega en 7-12 días',
        features: [
          'Perfiles de colaboradores activos en TripAdvisor',
          'Mención de especialidades de carta o instalaciones',
          'Incremento inmediato en el índice de popularidad',
          'Garantía de permanencia de 6 meses',
        ],
      },
      {
        id: 'trip-30',
        name: 'Pack Top 10 Ciudad',
        reviewsCount: '30 Opiniones + Fotos',
        price: '219 €',
        originalPrice: '310 €',
        popular: true,
        delivery: 'Entrega en 18-25 días naturales',
        features: [
          'Fotos reales de platos, cócteles o habitaciones',
          'Reseñas en español e idiomas turísticos (EN/FR opcional)',
          'Escalada hacia las primeras posiciones de tu zona',
          'Garantía de permanencia de 12 meses',
          'Soporte personalizado',
        ],
      },
      {
        id: 'trip-60',
        name: 'Pack Travellers’ Choice',
        reviewsCount: '60 Opiniones Premium + Fotos',
        price: '399 €',
        originalPrice: '580 €',
        delivery: 'Entrega progresiva en 35-45 días',
        features: [
          'Enfoque directo para obtener el premio Travellers’ Choice',
          'Auditoría completa de perfil y fotos de portada',
          'Perfiles con insignia de viajero frecuente y fotos HD',
          'Garantía total de reposición',
          'Asesor turístico dedicado',
        ],
      },
      {
        id: 'trip-120',
        name: 'Pack Destino Exclusivo',
        reviewsCount: '120 Opiniones de Alta Gama',
        price: '749 €',
        originalPrice: '1.100 €',
        delivery: 'Campaña para temporada alta (60 días)',
        features: [
          'Liderazgo absoluto en tu localidad turística',
          'Reseñas multilingües (Español, Inglés, Francés, Alemán)',
          'Optimización completa de cartas y servicios',
          'Soporte VIP y blindaje de reputación',
        ],
      },
    ],
  },
  Facebook: {
    platform: 'Facebook',
    projectCode: 'Future Field',
    badge: '98% Recomendado en Fan Page',
    headline: 'Catálogo de Recomendaciones y Prueba Social en Facebook',
    description: 'Multiplica la confianza de quienes visitan tu página de Facebook, potenciando los clics y el rendimiento de tus anuncios de Meta Ads.',
    accentColor: '#ff5a42',
    accentBg: 'bg-[#ff5a42]/10 border-[#ff5a42]/30',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    alt: 'Comunidad de clientes satisfechos compartiendo recomendaciones en Facebook',
    plans: [
      {
        id: 'fb-15',
        name: 'Pack Recomendación Básica',
        reviewsCount: '15 Recomendaciones 100% SÍ',
        price: '69 €',
        originalPrice: '99 €',
        delivery: 'Entrega en 5-7 días',
        features: [
          'Perfiles reales de Facebook con amigos e interacciones',
          'Recomendación positiva verificada en tu página',
          'Textos variados y naturales acordes a tu negocio',
          'Garantía de permanencia de 6 meses',
        ],
      },
      {
        id: 'fb-35',
        name: 'Pack Fan Page Impulso',
        reviewsCount: '35 Recomendaciones + Likes',
        price: '149 €',
        originalPrice: '210 €',
        popular: true,
        delivery: 'Entrega gradual en 10-15 días',
        features: [
          'Aumenta el alcance orgánico de tu página en Facebook',
          'Comentarios extensos y creíbles con emojis naturales',
          'Likes e interacciones en tus publicaciones clave',
          'Garantía de permanencia de 12 meses',
          'Soporte por WhatsApp',
        ],
      },
      {
        id: 'fb-75',
        name: 'Pack Social Proof Ads',
        reviewsCount: '75 Recomendaciones + Interacción',
        price: '279 €',
        originalPrice: '390 €',
        delivery: 'Entrega en 20-30 días',
        features: [
          'Ideal para reducir costos de publicidad en Meta Ads',
          'Testimonios detallados que derriban dudas de compra',
          'Distribución geográfica precisa de tu público objetivo',
          'Garantía de reposición de 12 meses',
          'Soporte dedicado',
        ],
      },
      {
        id: 'fb-150',
        name: 'Pack Marca Viral',
        reviewsCount: '150 Recomendaciones Máximas',
        price: '499 €',
        originalPrice: '720 €',
        delivery: 'Plan programado en 40-50 días',
        features: [
          'Máxima reputación comunitaria en redes sociales',
          'Blindaje contra quejas y trolls en comentarios',
          'Monitoreo semanal del Engagement de tu Fan Page',
          'Garantía total ilimitada',
        ],
      },
    ],
  },
};

interface PhoneNotification {
  id: number;
  category: 'trustpilot' | 'google' | 'tripadvisor' | 'facebook';
  platform: string;
  sender: string;
  badge: string;
  badgeBg: string;
  stars?: number;
  time: string;
  text: string;
  metricLabel: string;
  avatarLetter: string;
  avatarBg: string;
}

const PHONE_NOTIFICATIONS: PhoneNotification[] = [
  {
    id: 1,
    category: 'trustpilot',
    platform: 'Trustpilot · Verificado 5.0 ★',
    sender: 'David R. · Comprador Verificado',
    badge: 'TrustScore 4.9',
    badgeBg: 'bg-[#00b67a]/20 text-[#34e0a1] border-[#00b67a]/40',
    stars: 5,
    time: 'Hace 1 min',
    text: '“TrustUpReviews disparó nuestra reputación en Trustpilot a 4.9 estrellas. La conversión de la tienda online subió un 80% en 3 semanas.”',
    metricLabel: '4.9 Excelente',
    avatarLetter: 'TP',
    avatarBg: 'from-[#00b67a] to-emerald-950',
  },
  {
    id: 2,
    category: 'trustpilot',
    platform: 'Trustpilot · Empresa Verificada',
    sender: 'Sonia M. · CEO E-commerce',
    badge: 'Top Calificada',
    badgeBg: 'bg-[#00b67a]/20 text-[#34e0a1] border-[#00b67a]/40',
    stars: 5,
    time: 'Hace 6 min',
    text: '“Reemplazaron la negatividad con opiniones auténticas y entusiastas en Trustpilot. La confianza de los nuevos compradores es total.”',
    metricLabel: '+80% Ventas',
    avatarLetter: 'S',
    avatarBg: 'from-[#00b67a] to-teal-900',
  },
  {
    id: 3,
    category: 'google',
    platform: 'Google Reviews · 5 Estrellas',
    sender: 'Carlos S. · Local Guide Nivel 6',
    badge: 'Reseña Local',
    badgeBg: 'bg-[#ff5a42]/20 text-[#ff5a42] border-[#ff5a42]/40',
    stars: 5,
    time: 'Hace 2 min',
    text: '“¡Increíble! Duplicamos las llamadas y reservas en menos de 15 días. La mejor decisión para el negocio.”',
    metricLabel: 'Ventas x2',
    avatarLetter: 'G',
    avatarBg: 'from-[#ff5a42] to-amber-700',
  },
  {
    id: 4,
    category: 'google',
    platform: 'Google Maps · Perfil de Empresa',
    sender: 'Restaurante & Tienda · Verificado',
    badge: 'Ficha Top 1',
    badgeBg: 'bg-[#ff5a42]/20 text-[#ff5a42] border-[#ff5a42]/40',
    stars: 5,
    time: 'Hace 10 min',
    text: '“Nuestras valoraciones 5 estrellas atraen clientes automáticamente cada día. Calificación impecable y clientes encantados.”',
    metricLabel: '+10x LTV',
    avatarLetter: 'G',
    avatarBg: 'from-[#ff5a42] to-rose-900',
  },
  {
    id: 5,
    category: 'tripadvisor',
    platform: 'TripAdvisor · Travellers’ Choice',
    sender: 'Marco & Lucía · Guía Gastronómica',
    badge: 'Nº 1 en la Ciudad',
    badgeBg: 'bg-[#00aa6c]/20 text-[#34e0a1] border-[#00aa6c]/40',
    stars: 5,
    time: 'Hace 5 min',
    text: '“Alcanzamos el Top 1 en TripAdvisor con opiniones 5 estrellas impecables. Turistas y comensales llenan las mesas a diario.”',
    metricLabel: 'Top 1 TripAdvisor',
    avatarLetter: 'TA',
    avatarBg: 'from-[#00aa6c] to-teal-900',
  },
  {
    id: 6,
    category: 'tripadvisor',
    platform: 'TripAdvisor · Experiencia Turística',
    sender: 'Elena V. · Viajera Certificada',
    badge: 'Recomendado',
    badgeBg: 'bg-[#00aa6c]/20 text-[#34e0a1] border-[#00aa6c]/40',
    stars: 5,
    time: 'Hace 14 min',
    text: '“Buscamos el lugar con mejores valoraciones y superó las expectativas. 10 de 10 en confianza y calidad.”',
    metricLabel: '5.0 ★ Excelente',
    avatarLetter: 'E',
    avatarBg: 'from-[#00aa6c] to-emerald-800',
  },
  {
    id: 7,
    category: 'facebook',
    platform: 'Facebook · Reseñas & Recomendaciones',
    sender: 'Patricia R. · Cliente Frecuente',
    badge: '100% Recomendado',
    badgeBg: 'bg-[#1877F2]/20 text-[#60a5fa] border-[#1877F2]/40',
    stars: 5,
    time: 'Hace 8 min',
    text: '“Página de Facebook con más de 500 opiniones de 5 estrellas. La confianza de los nuevos compradores se multiplicó de inmediato.”',
    metricLabel: '100% Recomienda',
    avatarLetter: 'f',
    avatarBg: 'from-[#1877F2] to-blue-900',
  },
  {
    id: 8,
    category: 'facebook',
    platform: 'Facebook · Comunidad Activa',
    sender: 'Andrés M. · Compra Verificada',
    badge: 'Seguidor Top',
    badgeBg: 'bg-[#1877F2]/20 text-[#60a5fa] border-[#1877F2]/40',
    stars: 5,
    time: 'Hace 18 min',
    text: '“Ver tantas personas recomendando la marca en Facebook me dio la seguridad total de comprar. El mejor servicio.”',
    metricLabel: 'Confianza Total',
    avatarLetter: 'A',
    avatarBg: 'from-[#1877F2] to-sky-900',
  },
];

function PlatformSectionImage({ platform }: { platform: string }) {
  if (platform === 'Google Reviews') {
    return (
      <div className="w-full rounded-xl overflow-hidden border border-[#ff5a42]/30 bg-[#121316] p-4 sm:p-5 shadow-2xl relative">
        {/* Imagen de fondo ambiental curada con degradado cinematográfico */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
            alt="Google Reviews fondo"
            className="w-full h-full object-cover object-center opacity-25 saturate-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121316] via-[#121316]/92 to-[#121316]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-black/40" />
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl font-bold text-[#ff5a42] shrink-0 shadow-inner">
              G
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="section-copy text-xs font-bold uppercase tracking-wider text-[#ff5a42]">
                  Google Maps & Business Profile
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold border border-blue-400/30">
                  Ficha Verificada
                </span>
              </div>
              <h4 className="section-title text-base sm:text-lg font-bold text-white mt-0.5">
                Calificación 5 Estrellas en Google
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10 shrink-0">
            <span className="section-title text-2xl sm:text-3xl font-extrabold text-white">5.0</span>
            <div className="flex text-amber-400 text-lg">
              {'★★★★★'.split('').map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
            <span className="section-copy text-xs text-[#f7f7f2]/60 font-medium">(1.420 reseñas)</span>
          </div>
        </div>

        {/* Muestra gráfica de reseña real */}
        <div className="relative z-10 mt-4 pt-3.5 border-t border-white/10 flex items-start gap-3 bg-black/50 backdrop-blur-md rounded-lg p-3.5 border border-white/5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-black font-bold text-xs flex items-center justify-center shrink-0">
            D
          </div>
          <div className="section-copy text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">David Ramos</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 font-medium">
                ★ Local Guide Nivel 6
              </span>
              <span className="text-[10px] text-white/40">Hace 3 días</span>
            </div>
            <p className="text-[#f7f7f2]/85 mt-1 italic leading-relaxed">
              "Servicio extraordinario y atención de 10. Resolvieron todo rápido con la mayor profesionalidad. ¡Súper recomendados!"
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (platform === 'Trustpilot') {
    return (
      <div className="w-full rounded-xl overflow-hidden border border-[#00b67a]/40 bg-[#121316] p-4 sm:p-5 shadow-2xl relative">
        {/* Imagen de fondo ambiental curada con degradado cinematográfico */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80"
            alt="Trustpilot fondo"
            className="w-full h-full object-cover object-center opacity-25 saturate-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121316] via-[#121316]/92 to-[#121316]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-black/40" />
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#00b67a]/20 border border-[#00b67a]/40 flex items-center justify-center text-2xl font-bold text-[#00b67a] shrink-0 shadow-inner">
              ★
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="section-copy text-xs font-bold uppercase tracking-wider text-[#bcff48]">
                  Trustpilot Reviews
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#00b67a]/25 text-[#00b67a] font-semibold border border-[#00b67a]/35">
                  Excelente 4.9
                </span>
              </div>
              <h4 className="section-title text-base sm:text-lg font-bold text-white mt-0.5">
                Insignia Oficial de Confianza
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10 shrink-0">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="w-6 h-6 rounded bg-[#00b67a] flex items-center justify-center text-xs font-bold text-white shadow-sm">
                  ★
                </span>
              ))}
            </div>
            <span className="section-copy text-xs text-[#f7f7f2]/60 font-medium">(2.850 opiniones)</span>
          </div>
        </div>

        {/* Muestra gráfica de reseña real */}
        <div className="relative z-10 mt-4 pt-3.5 border-t border-white/10 flex items-start gap-3 bg-black/50 backdrop-blur-md rounded-lg p-3.5 border border-white/5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00b67a] to-emerald-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
            E
          </div>
          <div className="section-copy text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">Elena Gil</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-medium">
                Compra Verificada
              </span>
              <span className="text-[10px] text-white/40">Hace 1 día</span>
            </div>
            <p className="text-[#f7f7f2]/85 mt-1 italic leading-relaxed">
              "Totalmente recomendable. El envío llegó en menos de 24 horas y la calidad superó mis expectativas. 100% de confianza."
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (platform === 'TripAdvisor') {
    return (
      <div className="w-full rounded-xl overflow-hidden border border-[#34e0a1]/40 bg-[#121316] p-4 sm:p-5 shadow-2xl relative">
        {/* Imagen de fondo ambiental curada con degradado cinematográfico */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
            alt="TripAdvisor fondo"
            className="w-full h-full object-cover object-center opacity-25 saturate-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121316] via-[#121316]/92 to-[#121316]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-black/40" />
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#34e0a1]/20 border border-[#34e0a1]/40 flex items-center justify-center text-2xl font-bold text-[#34e0a1] shrink-0 shadow-inner">
              ◎
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="section-copy text-xs font-bold uppercase tracking-wider text-[#bcff48]">
                  TripAdvisor Travellers' Choice
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#34e0a1]/25 text-[#34e0a1] font-semibold border border-[#34e0a1]/35">
                  N.º 1 en la Ciudad
                </span>
              </div>
              <h4 className="section-title text-base sm:text-lg font-bold text-white mt-0.5">
                Certificado Travellers' Choice 2026
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10 shrink-0">
            <span className="section-title text-2xl sm:text-3xl font-extrabold text-white">5.0</span>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5].map((circle) => (
                <span key={circle} className="w-4 h-4 rounded-full bg-[#00aa6c] border border-white/30 shadow-sm" />
              ))}
            </div>
            <span className="section-copy text-xs text-[#f7f7f2]/60 font-medium">(940 opiniones)</span>
          </div>
        </div>

        {/* Muestra gráfica de reseña real */}
        <div className="relative z-10 mt-4 pt-3.5 border-t border-white/10 flex items-start gap-3 bg-black/50 backdrop-blur-md rounded-lg p-3.5 border border-white/5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00aa6c] to-teal-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
            M
          </div>
          <div className="section-copy text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">Marc & Sophie</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-teal-500/20 text-teal-300 font-medium">
                Viajeros Frecuentes de París
              </span>
              <span className="text-[10px] text-white/40">Hace 5 días</span>
            </div>
            <p className="text-[#f7f7f2]/85 mt-1 italic leading-relaxed">
              "Una experiencia inolvidable. Atención impecable, comida exquisita y vistas inigualables. Volveremos siempre que visitemos la ciudad."
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Facebook
  return (
    <div className="w-full rounded-xl overflow-hidden border border-[#1877f2]/40 bg-[#121316] p-4 sm:p-5 shadow-2xl relative">
      {/* Imagen de fondo ambiental curada con degradado cinematográfico */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
          alt="Facebook fondo"
          className="w-full h-full object-cover object-center opacity-25 saturate-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121316] via-[#121316]/92 to-[#121316]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-black/40" />
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-[#1877f2]/20 border border-[#1877f2]/40 flex items-center justify-center text-2xl font-bold text-[#1877f2] shrink-0 shadow-inner">
            f
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="section-copy text-xs font-bold uppercase tracking-wider text-[#ff5a42]">
                Facebook Recommendations
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold border border-blue-400/30">
                Página Oficial Verificada
              </span>
            </div>
            <h4 className="section-title text-base sm:text-lg font-bold text-white mt-0.5">
              98% de Recomendación Comunitaria
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10 shrink-0">
          <span className="px-2.5 py-1 rounded-full bg-blue-600/30 border border-blue-500/40 text-xs font-bold text-blue-300">
            👍 100% SÍ Recomienda
          </span>
          <span className="section-copy text-xs text-[#f7f7f2]/60 font-medium">(840 votos)</span>
        </div>
      </div>

      {/* Muestra gráfica de reseña real */}
      <div className="relative z-10 mt-4 pt-3.5 border-t border-white/10 flex items-start gap-3 bg-black/50 backdrop-blur-md rounded-lg p-3.5 border border-white/5">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1877f2] to-blue-800 text-white font-bold text-xs flex items-center justify-center shrink-0">
          P
        </div>
        <div className="section-copy text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Patricia Morales</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 font-medium">
              Recomienda este negocio
            </span>
            <span className="text-[10px] text-white/40">Hace 2 días</span>
          </div>
          <p className="text-[#f7f7f2]/85 mt-1 italic leading-relaxed">
            "Respuesta inmediata por Messenger y una atención súper cercana. Resolvieron todas mis dudas al instante. ¡Totalmente recomendados!"
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [portfolioVisible, setPortfolioVisible] = useState(false);

  // Estado para el catálogo interactivo de precios
  const [selectedCatalogPlatform, setSelectedCatalogPlatform] = useState<string | null>(null);
  const [selectedPlanSuccess, setSelectedPlanSuccess] = useState<{ planName: string; platform: string; price: string } | null>(null);

  // Estado para el modal de contacto con especialista
  const [specialistModalOpen, setSpecialistModalOpen] = useState(false);
  const [specialistSuccess, setSpecialistSuccess] = useState(false);
  const [specialistForm, setSpecialistForm] = useState({
    name: '',
    business: '',
    phone: '',
    platform: 'Google Reviews',
    notes: '',
  });

  // Animación interactiva de mensajes y calificaciones en el celular
  const [activePhoneMsgIdx, setActivePhoneMsgIdx] = useState(0);
  const [phoneCategory, setPhoneCategory] = useState<'trustpilot' | 'google' | 'tripadvisor' | 'facebook'>('trustpilot');
  const [isAutoPlayingPhone, setIsAutoPlayingPhone] = useState(true);

  // Manejador para conectar cada opción directamente con la isla dinámica y las notificaciones
  const handleSelectPhoneCategory = (cat: 'trustpilot' | 'google' | 'tripadvisor' | 'facebook') => {
    setPhoneCategory(cat);
    const targetIdx = PHONE_NOTIFICATIONS.findIndex((item) => item.category === cat);
    if (targetIdx !== -1) {
      setActivePhoneMsgIdx(targetIdx);
    }
  };

  // Configuración reactiva de la Isla Dinámica según la opción activa (Trustpilot, Google, TripAdvisor, Facebook)
  const getDynamicIslandData = () => {
    if (phoneCategory === 'trustpilot') {
      return {
        title: 'Trustpilot 4.9',
        badge: 'Excelente',
        badgeBg: 'bg-[#00b67a]/20 text-[#34e0a1]',
        dotColor: 'bg-[#00b67a]',
        borderGlow: 'border-[#00b67a]/70 shadow-[0_0_20px_rgba(0,182,122,0.45)]',
        icon: (
          <span className="w-4 h-4 rounded bg-[#00b67a] text-white font-black text-[9px] flex items-center justify-center shrink-0 shadow-sm">
            ★
          </span>
        ),
      };
    }
    if (phoneCategory === 'google') {
      return {
        title: 'Google Reviews',
        badge: '5.0 ★',
        badgeBg: 'bg-[#ff5a42]/20 text-[#ff5a42]',
        dotColor: 'bg-[#ff5a42]',
        borderGlow: 'border-[#ff5a42]/70 shadow-[0_0_20px_rgba(255,90,66,0.4)]',
        icon: (
          <span className="w-4 h-4 rounded-full bg-[#ff5a42] text-white font-black text-[9px] flex items-center justify-center shrink-0">
            G
          </span>
        ),
      };
    }
    if (phoneCategory === 'tripadvisor') {
      return {
        title: 'TripAdvisor',
        badge: 'Nº 1 Top',
        badgeBg: 'bg-[#00aa6c]/20 text-[#34e0a1]',
        dotColor: 'bg-[#00aa6c]',
        borderGlow: 'border-[#00aa6c]/70 shadow-[0_0_20px_rgba(0,170,108,0.4)]',
        icon: (
          <span className="w-4 h-4 rounded-full bg-[#00aa6c] text-white font-black text-[9px] flex items-center justify-center shrink-0">
            🦉
          </span>
        ),
      };
    }
    return {
      title: 'Facebook Reviews',
      badge: '100% Recomienda',
      badgeBg: 'bg-[#1877F2]/20 text-[#60a5fa]',
      dotColor: 'bg-[#1877F2]',
      borderGlow: 'border-[#1877F2]/70 shadow-[0_0_20px_rgba(24,119,242,0.4)]',
      icon: (
        <span className="w-4 h-4 rounded-full bg-[#1877F2] text-white font-black text-[9px] flex items-center justify-center shrink-0">
          f
        </span>
      ),
    };
  };

  const dynamicIsland = getDynamicIslandData();

  useEffect(() => {
    if (!isAutoPlayingPhone) return;
    const interval = setInterval(() => {
      // Rotar entre las opciones activas para sincronizar la Isla Dinámica y las reseñas
      const categories: ('trustpilot' | 'google' | 'tripadvisor' | 'facebook')[] = ['trustpilot', 'google', 'tripadvisor', 'facebook'];
      setPhoneCategory((prev) => {
        const nextCat = categories[(categories.indexOf(prev) + 1) % categories.length];
        const targetIdx = PHONE_NOTIFICATIONS.findIndex((item) => item.category === nextCat);
        if (targetIdx !== -1) setActivePhoneMsgIdx(targetIdx);
        return nextCat;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlayingPhone]);

  // Progreso de scroll para guía interactiva de video y zoom
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollProgressRef = useRef(0);

  // Estados de introducción cinematográfica: se ve oscuro y se va aclarando, y las letras van apareciendo
  const [introDark, setIntroDark] = useState(true);
  const [headerLettersVisible, setHeaderLettersVisible] = useState(false);
  const [titleLettersVisible, setTitleLettersVisible] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(false);

  useEffect(() => {
    // 1. Inicia oscuro. A los 200ms comienza a aclararse el fondo suavemente
    const tDark = setTimeout(() => {
      setIntroDark(false);
    }, 200);

    // 2. A los 500ms aparecen las letras de navegación y cabecera
    const tHeader = setTimeout(() => {
      setHeaderLettersVisible(true);
    }, 500);

    // 3. A los 800ms emergen las letras principales del título "TRUST REVIEWS"
    const tTitle = setTimeout(() => {
      setTitleLettersVisible(true);
    }, 800);

    // 4. A los 1200ms aparece la flecha centrada en la parte inferior
    const tArrow = setTimeout(() => {
      setArrowVisible(true);
    }, 1200);

    return () => {
      clearTimeout(tDark);
      clearTimeout(tHeader);
      clearTimeout(tTitle);
      clearTimeout(tArrow);
    };
  }, []);

  const heroRef = useRef<HTMLElement | null>(null);
  const portfolioRef = useRef<HTMLElement | null>(null);

  // Sincronización de scroll optimizada a 60fps para el fondo cinemático interactivo
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 25);

          const heroHeight = heroRef.current ? heroRef.current.offsetHeight : window.innerHeight;
          const progress = Math.min(Math.max(scrollY / (heroHeight * 1.15), 0), 1);
          setScrollProgress(progress);
          scrollProgressRef.current = progress;

          // Detectar sección activa para iluminar la navegación
          const sections = ['contacto', 'faq', 'garantia', 'proceso', 'diferenciales', 'nosotros', 'estrategia', 'portfolio', 'inicio'];
          for (const sec of sections) {
            const el = document.getElementById(sec);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 140) {
                setActiveSection(sec);
                break;
              }
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animación de entrada para la sección portfolio al entrar en pantalla
  useEffect(() => {
    const portfolioElem = portfolioRef.current;
    if (!portfolioElem) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPortfolioVisible(true);
          } else {
            setPortfolioVisible(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(portfolioElem);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Prevenir scroll cuando el menú móvil o el catálogo estén abiertos
  useEffect(() => {
    if (mobileMenuOpen || selectedCatalogPlatform !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, selectedCatalogPlatform]);

  // Manejo de tecla ESC para cerrar el catálogo
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedPlanSuccess) {
          setSelectedPlanSuccess(null);
        } else if (selectedCatalogPlatform) {
          setSelectedCatalogPlatform(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCatalogPlatform, selectedPlanSuccess]);

  const navLinks = [
    { label: 'Servicios', href: '#portfolio' },
    { label: 'Estrategia', href: '#estrategia' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Diferenciales', href: '#diferenciales' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Garantía', href: '#garantia' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const projects = [
    {
      id: 'google',
      title: 'Google Business & Maps',
      subtitle: 'Posicionamiento Local Pack',
      platform: 'Google Reviews',
      metric: '4.9 ★ Calificación media',
      tag: 'Optimización 5 Estrellas',
      rating: '5.0★',
      reviewsCount: '1.420+ reseñas',
      startingPrice: 'Desde 79 €',
      features: ['Perfiles locales españoles activos', 'Entrega escalonada y orgánica', 'Garantía oficial de 6 meses'],
      accentColor: '#ff5a42',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
      alt: 'Boutique café con terraza y clientes consultando recomendaciones en Google Maps',
      description: 'Eleva tu visibilidad en búsquedas locales y atrae llamadas directas con reseñas auténticas y geolocalizadas.',
      gradient: 'linear-gradient(145deg, #000000 0%, #1f110f 40%, #351a15 70%, #ff5a42 100%)',
    },
    {
      id: 'trustpilot',
      title: 'TrustScore & E-commerce',
      subtitle: 'Insignia Oficial de Confianza',
      platform: 'Trustpilot',
      metric: 'Excelente · TrustScore 4.8',
      tag: 'Verificación Automatizada',
      rating: '4.9★',
      reviewsCount: '2.850+ opiniones',
      startingPrice: 'Desde 79 €',
      features: ['Insignia verde "Excelente" oficial', 'Aumento de conversión de compra', 'Protección de dominio y marca'],
      accentColor: '#00b67a',
      image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80',
      alt: 'Experiencia de compra segura y pago verificado en tienda online',
      description: 'Multiplica la conversión de tu tienda online o SaaS logrando la insignia verde "Excelente" de Trustpilot.',
      gradient: 'linear-gradient(145deg, #000000 0%, #101a0c 40%, #213217 70%, #bcff48 100%)',
    },
    {
      id: 'tripadvisor',
      title: 'Travellers’ Choice & Turismo',
      subtitle: 'Top 10 en Destino y Hoteles',
      platform: 'TripAdvisor',
      metric: 'N.º 1 en Popularidad',
      tag: 'Prestigio para Viajeros',
      rating: '5.0★',
      reviewsCount: '940+ experiencias',
      startingPrice: 'Desde 89 €',
      features: ['Ranking Top 10 en tu ciudad', 'Reseñas para hoteles y restauración', 'Atracción continua de viajeros'],
      accentColor: '#34e0a1',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      alt: 'Restaurante de alta gastronomía con ambiente cálido galardonado en TripAdvisor',
      description: 'Conquista a turistas asegurando las mejores recomendaciones gastronómicas y hoteleras de tu ciudad.',
      gradient: 'linear-gradient(145deg, #000000 0%, #0f1c11 45%, #2a3a1f 75%, #bcff48 100%)',
    },
    {
      id: 'facebook',
      title: 'Recomendaciones & Fan Page',
      subtitle: 'Prueba Social y Meta Ads',
      platform: 'Facebook',
      metric: '98% Recomendado',
      tag: 'Prueba Social Orgánica',
      rating: '100% 👍',
      reviewsCount: '840+ votos',
      startingPrice: 'Desde 69 €',
      features: ['Recomendaciones de perfiles reales', 'Impulso directo al ROAS en Meta Ads', 'Respaldo social de marca activa'],
      accentColor: '#1877f2',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
      alt: 'Comunidad de clientes satisfechos compartiendo experiencias y recomendaciones',
      description: 'Dispara la credibilidad en redes sociales y maximiza el rendimiento de tus campañas en Meta Ads.',
      gradient: 'linear-gradient(145deg, #000000 0%, #1c1014 45%, #3b1b1f 75%, #ff5a42 100%)',
    },
  ];

  const activeCatalog = selectedCatalogPlatform ? CATALOGS_DATA[selectedCatalogPlatform] : null;

  return (
    <div className="relative w-full bg-black text-[#f7f7f2] min-h-screen selection:bg-white/20 selection:text-white">
      {/* TELÓN CINEMATOGRÁFICO DE ENTRADA: FONDO NEGRO QUE SE VA ACLARANDO */}
      <div
        className={`fixed inset-0 z-40 bg-black pointer-events-none transition-opacity duration-1000 ease-out ${
          introDark ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* FONDO CINEMATOGRÁFICO INTERACTIVO DE AUTORIDAD Y REPUTACIÓN */}
      <HeroCinematicBackground scrollProgress={scrollProgress} />

      {/* AURA RADIANTE Y ESTELA DE LUZ DEL CURSOR (EXPERIENCIA DE ALTA GAMA EN DESKTOP) */}
      <GlobalCursorAura />

      {/* HEADER / BARRA DE NAVEGACIÓN FIJA Y PERSISTENTE */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-out bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-[0_12px_35px_rgba(0,0,0,0.85)] px-4 sm:px-6 md:px-12 ${
          headerLettersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        } py-2.5 sm:py-3`}
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          <div className="flex items-center justify-between">
            {/* BRAND / LOGO */}
            <a
              href="#inicio"
              className="flex items-center gap-2.5 transition-opacity hover:opacity-85 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#bcff48] to-[#00E599] p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(188,255,72,0.3)] group-hover:shadow-[0_0_20px_rgba(188,255,72,0.5)] transition-shadow">
                <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                  <Star className="w-4 h-4 fill-[#bcff48] text-[#bcff48]" />
                </div>
              </div>
              <span className="section-title text-xl md:text-2xl font-bold tracking-tight text-[#f7f7f2]">
                TrustUp<span className="text-[#bcff48]">Reviews</span>
              </span>
            </a>

            {/* NAVEGACIÓN CON TODAS LAS SECCIONES PERSISTENTES EN ESCRITORIO */}
            <div className="flex items-center gap-3 lg:gap-8">
              <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 font-outfit text-[11px] xl:text-xs tracking-wider uppercase text-white/90 text-small-shadow">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => {
                        if (link.href === '#contacto') {
                          e.preventDefault();
                          setSpecialistModalOpen(true);
                        }
                      }}
                      className={`relative transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-lg px-2.5 py-1.5 ${
                        link.href === '#contacto'
                          ? 'bg-[#bcff48] text-black font-extrabold px-4 py-1.5 rounded-full hover:bg-[#a6ea34] shadow-[0_0_15px_rgba(188,255,72,0.35)] hover:text-black ml-1 active:scale-95'
                          : isActive
                          ? 'text-[#bcff48] font-bold bg-white/10'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && link.href !== '#contacto' && (
                        <span className="absolute -bottom-1 inset-x-2 h-[2px] bg-[#bcff48] shadow-[0_0_8px_#bcff48] rounded-full" />
                      )}
                    </a>
                  );
                })}
              </nav>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 min-w-[40px] min-h-[40px] flex items-center justify-center text-white hover:opacity-80 transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 active:scale-95"
                aria-label="Abrir menú de navegación"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* TIRA DE ACCESO RÁPIDO PARA MÓVILES: TODAS LAS OPCIONES FIJADAS SIEMPRE A MANO */}
          <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 -mx-1 px-1 touch-pan-x">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href === '#contacto') {
                      e.preventDefault();
                      setSpecialistModalOpen(true);
                    }
                  }}
                  className={`shrink-0 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all whitespace-nowrap active:scale-95 ${
                    link.href === '#contacto'
                      ? 'bg-[#bcff48] text-black font-extrabold shadow-[0_0_10px_rgba(188,255,72,0.35)]'
                      : isActive
                      ? 'bg-white/15 text-[#bcff48] font-bold border border-[#bcff48]/40'
                      : 'bg-white/5 text-white/80 hover:text-white border border-white/10'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </header>

      {/* SECCIÓN HERO */}
      <main
        ref={heroRef}
        id="inicio"
        className="relative z-10 w-full min-h-[100svh] flex flex-col justify-between overflow-hidden text-white pt-24 sm:pt-28"
      >
        {/* CONTENEDOR HERO */}
        <div className="relative z-10 flex flex-col justify-between min-h-[calc(100svh-6rem)] w-full">

          {/* TÍTULO EN LA PARTE INFERIOR IZQUIERDA: '★ TRUST REVIEWS' QUE APARECE CON ANIMACIÓN CONTROLADA */}
          <div
            className={`flex-1 flex flex-col justify-end items-start text-left px-4 sm:px-8 md:px-12 lg:px-16 pb-6 md:pb-10 w-full max-w-7xl mx-auto will-change-transform transition-all duration-1000 ease-out ${
              titleLettersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transform: titleLettersVisible
                ? `translate3d(0, ${scrollProgress * 30}px, 0) scale(${1 - scrollProgress * 0.03})`
                : undefined,
              opacity: titleLettersVisible ? Math.max(1 - scrollProgress * 0.75, 0.25) : 0,
              transition: 'transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.9s cubic-bezier(0.2, 0.8, 0.2, 1)',
            }}
          >
            <h1 className="section-title text-[#f7f7f2] font-bold tracking-tight text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[104px] leading-[0.95] text-left flex items-center flex-wrap sm:flex-nowrap gap-x-2">
              <Star className="w-6 h-6 sm:w-9 sm:h-9 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 fill-[#bcff48] text-[#bcff48] shrink-0 transition-transform duration-700" />
              <span className="tracking-tight">TRUST REVIEWS</span>
            </h1>
            <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-base md:text-lg text-white/80 font-normal tracking-wide max-w-xl">
              Gestión de reputación online, publicación estratégica y eliminación de reseñas negativas.
            </p>
          </div>

          {/* FLECHA CENTRADA EN EL CENTRO DE LA PARTE INFERIOR (SIN TEXTO 'DESPLAZABLE') */}
          <footer className="w-full pb-8 md:pb-12 pt-2 flex items-center justify-center max-w-7xl mx-auto">
            <a
              href="#portfolio"
              aria-label="Ir a la siguiente sección"
              className={`group flex flex-col items-center justify-center transition-all duration-1000 ease-out focus-visible:ring-2 focus-visible:ring-[#bcff48] rounded-full p-2 ${
                arrowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center group-hover:border-[#bcff48]/70 group-hover:shadow-[0_0_25px_rgba(188,255,72,0.4)] transition-all">
                <ChevronDown className="w-6 h-6 text-white group-hover:text-[#bcff48] transition-colors animate-bounce" />
              </div>
            </a>
          </footer>
        </div>

        {/* MENÚ MÓVIL CON TODAS LAS SECCIONES */}
        {mobileMenuOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Menú principal de navegación"
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-5 sm:p-6 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))] lg:hidden animate-hero-entrance"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#bcff48] to-[#00E599] p-0.5 flex items-center justify-center shadow-md">
                  <div className="w-full h-full bg-black rounded-[6px] flex items-center justify-center">
                    <Star className="w-4 h-4 fill-[#bcff48] text-[#bcff48]" />
                  </div>
                </div>
                <span className="section-title text-xl font-bold text-white tracking-wider">
                  TrustUp<span className="text-[#bcff48]">Reviews</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:opacity-80 transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 active:scale-95"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <nav className="flex flex-col items-stretch gap-2.5 my-auto font-outfit text-sm tracking-wider uppercase text-white overflow-y-auto py-5 max-w-sm mx-auto w-full no-scrollbar">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (link.href === '#contacto') {
                      e.preventDefault();
                      setSpecialistModalOpen(true);
                    }
                  }}
                  className={`transition-all min-h-[48px] flex items-center justify-center rounded-xl text-center font-semibold active:scale-98 ${
                    link.href === '#contacto'
                      ? 'bg-[#bcff48] text-black font-extrabold px-6 py-3.5 shadow-[0_0_20px_rgba(188,255,72,0.3)] mt-2'
                      : 'bg-white/5 hover:bg-white/10 text-white/90 hover:text-white py-3 px-4 border border-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2 max-w-sm mx-auto w-full">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSelectedCatalogPlatform('Google Reviews');
                }}
                className="w-full min-h-[46px] rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-98 transition-transform"
              >
                <span>Ver Catálogos y Tarifas</span>
                <ArrowRight className="w-4 h-4 text-[#bcff48]" />
              </button>
              <p className="text-[11px] text-white/50 text-center mt-1 section-copy">
                TrustUpReviews™ · Autoridad en Reputación Online
              </p>
            </div>
          </div>
        )}
      </main>

      {/* SECCIÓN PORTFOLIO CON CATÁLOGO CLICABLE */}
      <section
        id="portfolio"
        ref={portfolioRef}
        className="portfolio-section-container relative z-10 w-full text-[#f7f7f2] overflow-hidden"
      >
        <div
          className={`w-full max-w-[1380px] mx-auto flex flex-col gap-8 sm:gap-10 ${
            portfolioVisible ? 'animate-portfolio-entrance' : 'opacity-0'
          }`}
        >
          {/* CABECERA CON ANIMACIÓN DE ENTRADA AL DESLIZAR */}
          <ScrollReveal direction="up" distance={20} duration={650}>
            <div className="w-full">
              <div className="section-nav flex flex-wrap items-center justify-between text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#f7f7f2]/75 mb-3 sm:mb-4 gap-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#bcff48]/10 border border-[#bcff48]/30 text-[#bcff48] text-xs font-mono font-bold tracking-widest">
                  <Sparkles className="w-3.5 h-3.5 text-[#bcff48]" />
                  <span>Servicios Verificados & Catálogos 2026</span>
                </span>
                <span className="text-xs text-white/50 font-mono hidden sm:inline-flex items-center gap-1.5">
                  <span>Toca cualquier catálogo para ver planes detallados y tarifas</span>
                </span>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                <h2
                  className="section-title text-[#f7f7f2] font-bold leading-[0.92] tracking-normal text-balance"
                  style={{ fontSize: 'clamp(38px, 6.5vw, 96px)' }}
                >
                  Servicios disponibles.
                </h2>
                <p className="section-copy text-xs sm:text-sm md:text-base text-[#f7f7f2]/75 max-w-lg leading-relaxed pb-1">
                  Catálogos especializados con reseñas auténticas y geolocalizadas para blindar y catapultar la reputación de tu marca en las principales plataformas mundiales.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* RETÍCULA DE CUATRO PROYECTOS INTERACTIVOS CON ANIMACIÓN ESCALONADA */}
          <div className="grid grid-cols-1 min-[440px]:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full">
            {projects.map((proj, idx) => (
              <ScrollReveal
                key={proj.title}
                direction="up"
                distance={35}
                delay={idx * 110}
                duration={750}
                className="h-full"
              >
                <div
                  tabIndex={0}
                  role="button"
                  onClick={() => setSelectedCatalogPlatform(proj.platform)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedCatalogPlatform(proj.platform);
                    }
                  }}
                  className="group relative flex flex-col h-full rounded-3xl overflow-hidden bg-[#0d0e14] border border-white/10 hover:border-white/30 transition-all duration-300 shadow-xl hover:shadow-[0_22px_55px_rgba(0,0,0,0.85)] hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bcff48] focus-visible:ring-offset-2 focus-visible:ring-offset-black cursor-pointer text-left"
                >
                  {/* Resplandor perimetral de acento en hover */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
                    style={{
                      boxShadow: `inset 0 0 20px ${proj.accentColor}25, 0 0 30px ${proj.accentColor}20`,
                      borderColor: `${proj.accentColor}60`,
                      borderWidth: '1px',
                    }}
                  />

                  {/* Showcase fotográfico cinematográfico con altura ampliada */}
                  <div className="relative h-52 min-[440px]:h-60 sm:h-64 lg:h-72 w-full overflow-hidden bg-[#14161f]">
                    <img
                      src={proj.image}
                      alt={proj.alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Degradado scrim para contraste visual óptimo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e14] via-[#0d0e14]/50 to-black/40 pointer-events-none" />

                    {/* Resplandor ambiental suave en el color de la plataforma */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-45 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 30%, ${proj.accentColor} 0%, transparent 70%)`,
                      }}
                    />

                    {/* Badges superiores con efecto glassmorphism */}
                    <div className="absolute top-3.5 inset-x-3.5 z-10 flex items-center justify-between gap-2">
                      <span className="section-copy text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-white flex items-center gap-1.5 shadow-md">
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{
                            backgroundColor: proj.accentColor,
                            boxShadow: `0 0 8px ${proj.accentColor}`,
                          }}
                        />
                        {proj.platform}
                      </span>
                      <span
                        className="section-copy text-[10px] sm:text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 flex items-center gap-1 shadow-md"
                        style={{ color: proj.accentColor }}
                      >
                        <Star className="w-3 h-3 fill-current" />
                        {proj.rating}
                      </span>
                    </div>

                    {/* Badges inferiores sobre la fotografía: cantidad de opiniones y precio desde */}
                    <div className="absolute bottom-3.5 inset-x-3.5 z-10 flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-white/15 text-white shadow-sm">
                        {proj.reviewsCount}
                      </span>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-[#bcff48] text-black shadow-md">
                        {proj.startingPrice}
                      </span>
                    </div>
                  </div>

                  {/* Contenido descriptivo del catálogo (ampliado y con viñetas de beneficios) */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-4 bg-[#0d0e14]">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span
                          className="text-[11px] uppercase font-mono tracking-wider font-bold"
                          style={{ color: proj.accentColor }}
                        >
                          {proj.subtitle}
                        </span>
                        <span className="text-[10px] text-white/50 font-mono hidden min-[440px]:inline">
                          {proj.tag}
                        </span>
                      </div>

                      <h3 className="section-title text-lg sm:text-xl font-bold text-white group-hover:text-white transition-colors leading-snug">
                        {proj.title}
                      </h3>

                      <p className="section-copy text-xs text-[#f7f7f2]/75 mt-1.5 leading-relaxed line-clamp-2">
                        {proj.description}
                      </p>

                      {/* Viñetas destacadas de beneficios clave del catálogo */}
                      <ul className="space-y-1.5 mt-3 pt-3 border-t border-white/10">
                        {proj.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-white/85">
                            <CheckCircle2
                              className="w-3.5 h-3.5 shrink-0"
                              style={{ color: proj.accentColor }}
                            />
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Métrica de rendimiento / beneficio */}
                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-xs text-[#f7f7f2]/90">
                      <span className="flex items-center gap-1.5 font-medium">
                        <ShieldCheck className="w-4 h-4 text-[#bcff48] shrink-0" />
                        <span className="truncate">{proj.metric}</span>
                      </span>
                    </div>

                    {/* Botón táctil optimizado con transición de color y escala */}
                    <div className="w-full mt-1 min-h-[46px] py-2.5 px-4 rounded-xl bg-white/5 group-hover:bg-[#bcff48] border border-white/10 group-hover:border-[#bcff48] text-xs font-semibold text-[#f7f7f2] group-hover:text-black flex items-center justify-between transition-all duration-300 shadow-sm">
                      <span className="font-bold tracking-wide">Ver catálogo y tarifas</span>
                      <span className="flex items-center gap-1 text-[#bcff48] group-hover:text-black font-extrabold transition-colors">
                        <span>Abrir</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRATEGIAS Y PILARES DE REPUTACIÓN */}
      <section
        id="estrategia"
        className="portfolio-section-container relative z-10 w-full text-[#f7f7f2] overflow-hidden"
      >
        <div className="w-full max-w-[1380px] mx-auto flex flex-col gap-8 sm:gap-10">
          {/* Cabecera */}
          <ScrollReveal direction="up" distance={25}>
            <div className="w-full">
              <div className="section-nav flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#f7f7f2]/75 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#bcff48] shadow-[0_0_8px_#bcff48] animate-pulse" />
                <span>Estrategia de Reputación Integral</span>
              </div>

              <h2
                className="section-title text-[#f7f7f2] font-bold leading-[0.92] tracking-normal text-balance"
                style={{ fontSize: 'clamp(38px, 6vw, 92px)' }}
              >
                Control y crecimiento de tu reputación.
              </h2>
            </div>
          </ScrollReveal>

          {/* 3 CUADROS COLOCADOS CADA UNO AL LADO DEL OTRO (3 COLUMNAS EN ESCRITORIO CON ANIMACIÓN Y RESPLANDOR) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
            {/* CUADRO: Eliminación de revisión */}
            <ScrollReveal direction="up" distance={30} delay={0}>
              <div className="group relative flex flex-col justify-between h-full rounded-3xl bg-[#121212]/90 border border-white/10 hover:border-[#ff5a42]/60 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_45px_rgba(255,90,66,0.2)] overflow-hidden">
                {/* Línea lumínica superior animada */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#ff5a42] to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="section-copy text-xs font-bold tracking-widest uppercase text-[#ff5a42] bg-[#ff5a42]/10 border border-[#ff5a42]/25 px-3 py-1 rounded-full">
                      Defensa Legal & Supresión
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff5a42] group-hover:scale-110 group-hover:bg-[#ff5a42]/15 transition-all shadow-sm">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="section-title text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#ff5a42] transition-colors">
                    Eliminación de revisión
                  </h3>

                  <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 leading-relaxed mb-6">
                    Gestión experta y desindexación legal de valoraciones falsas, dañinas o difamatorias en Google Maps, Trustpilot, TripAdvisor y Facebook. Aplicamos el marco normativo de cada plataforma para remover opiniones injustas que dañan la facturación y prestigio de tu empresa.
                  </p>

                  <ul className="section-copy space-y-2.5 mb-6">
                    <li className="flex items-start gap-2 text-xs text-[#f7f7f2]/85">
                      <Check className="w-4 h-4 text-[#ff5a42] shrink-0 mt-0.5" />
                      <span>Eliminación de ataques de 1 estrella sin compra real</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-[#f7f7f2]/85">
                      <Check className="w-4 h-4 text-[#ff5a42] shrink-0 mt-0.5" />
                      <span>Apelación directa y resolución ante los equipos de soporte</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-[#f7f7f2]/85">
                      <Check className="w-4 h-4 text-[#ff5a42] shrink-0 mt-0.5" />
                      <span>Blindaje continuo contra difamación de competidores</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="section-copy text-xs text-[#f7f7f2]/50">Tasa de éxito</span>
                  <span className="section-copy text-xs font-bold text-[#ff5a42] bg-[#ff5a42]/10 px-2.5 py-1 rounded-full border border-[#ff5a42]/20">
                    ★ 94% Resoluciones favorables
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* CUADRO: Mejorar la credibilidad de la marca */}
            <ScrollReveal direction="up" distance={30} delay={120}>
              <div className="group relative flex flex-col justify-between h-full rounded-3xl bg-[#121212]/90 border border-white/10 hover:border-[#bcff48]/60 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_45px_rgba(188,255,72,0.2)] overflow-hidden">
                {/* Línea lumínica superior animada */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#bcff48] to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="section-copy text-xs font-bold tracking-widest uppercase text-[#bcff48] bg-[#bcff48]/10 border border-[#bcff48]/25 px-3 py-1 rounded-full">
                      Autoridad & Prestigio 5★
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#bcff48] group-hover:scale-110 group-hover:bg-[#bcff48]/15 transition-all shadow-sm">
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                  </div>

                  <h3 className="section-title text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#bcff48] transition-colors">
                    Mejorar la credibilidad de la marca
                  </h3>

                  <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 leading-relaxed mb-6">
                    Transformamos la percepción pública de tu negocio creando un flujo constante de testimonios 5 estrellas con perfiles verificados y geolocalizados. La confianza visual inmediata impulsa la tasa de conversión y sitúa tu marca como líder indiscutible en su sector.
                  </p>

                  <ul className="section-copy space-y-2.5 mb-6">
                    <li className="flex items-start gap-2 text-xs text-[#f7f7f2]/85">
                      <Check className="w-4 h-4 text-[#bcff48] shrink-0 mt-0.5" />
                      <span>Insignias de excelencia y puntuaciones medias de 4.8 a 5.0★</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-[#f7f7f2]/85">
                      <Check className="w-4 h-4 text-[#bcff48] shrink-0 mt-0.5" />
                      <span>Textos estratégicos con palabras clave de alto impacto</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-[#f7f7f2]/85">
                      <Check className="w-4 h-4 text-[#bcff48] shrink-0 mt-0.5" />
                      <span>Incremento directo en clics, llamadas y pedidos</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="section-copy text-xs text-[#f7f7f2]/50">Impacto en conversión</span>
                  <span className="section-copy text-xs font-bold text-[#bcff48] bg-[#bcff48]/10 px-2.5 py-1 rounded-full border border-[#bcff48]/20">
                    ★ +38% Cierre de ventas
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* CUADRO: Fidelización Continua (Automatización & Protección) */}
            <ScrollReveal direction="up" distance={30} delay={240}>
              <div className="group relative flex flex-col justify-between h-full rounded-3xl bg-[#121212]/90 border border-white/10 hover:border-[#00b67a]/60 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_45px_rgba(0,182,122,0.2)] overflow-hidden">
                {/* Línea lumínica superior animada */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#00b67a] to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="section-copy text-xs font-bold tracking-widest uppercase text-[#00b67a] bg-[#00b67a]/10 border border-[#00b67a]/25 px-3 py-1 rounded-full">
                      Fidelización & Captación Continua
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00b67a] group-hover:scale-110 group-hover:bg-[#00b67a]/15 transition-all shadow-sm">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="section-title text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-[#00b67a] transition-colors">
                    Captación y blindaje continuo
                  </h3>

                  <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 leading-relaxed mb-6">
                    Automatización inteligente para captar valoraciones positivas en el punto de venta mediante tarjetas NFC y códigos QR. Integra un filtro previo anti-quejas que redirige cualquier insatisfacción de forma privada a tu equipo antes de que llegue a internet.
                  </p>

                  <ul className="section-copy space-y-2.5 mb-6">
                    <li className="flex items-start gap-2 text-xs text-[#f7f7f2]/85">
                      <Check className="w-4 h-4 text-[#00b67a] shrink-0 mt-0.5" />
                      <span>Dispositivos NFC físicos y links inteligentes de reseña</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-[#f7f7f2]/85">
                      <Check className="w-4 h-4 text-[#bcff48] shrink-0 mt-0.5" />
                      <span>Filtro previo que neutraliza valoraciones negativas</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-[#f7f7f2]/85">
                      <Check className="w-4 h-4 text-[#bcff48] shrink-0 mt-0.5" />
                      <span>Monitorización de reputación y alertas en tiempo real</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="section-copy text-xs text-[#f7f7f2]/50">Sistema</span>
                  <span className="section-copy text-xs font-bold text-[#bcff48] bg-[#bcff48]/10 px-2.5 py-1 rounded">
                    100% Automatizado
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* CUADRITO DE GARANTÍA Y ACCIÓN */}
          <ScrollReveal direction="up" distance={20} delay={150}>
            <div className="mt-8 md:mt-12 w-full max-w-2xl mx-auto rounded-xl p-5 sm:p-6 bg-[#141414]/90 border border-white/15 hover:border-[#bcff48]/50 transition-all duration-300 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#bcff48]/15 border border-[#bcff48]/30 text-[#bcff48] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="section-title text-base sm:text-lg md:text-xl font-bold text-white tracking-tight flex items-center gap-1.5 justify-center sm:justify-start">
                    <span className="text-[#bcff48] font-bold">&gt;</span>
                    <span>Aumente la credibilidad de la marca hoy</span>
                  </p>
                  <p className="section-copy text-xs sm:text-sm font-semibold text-[#bcff48] mt-1">
                    Garantía de devolución del dinero del 100%.
                  </p>
                </div>
              </div>

              <a
                href="#portfolio"
                className="section-copy inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#bcff48] transition-colors shrink-0 shadow-md"
              >
                <span>Ver servicios</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECCIÓN 4: ¿QUIÉN ES TRUSTUPREVIEWS? */}
      <section
        id="nosotros"
        className="portfolio-section-container relative z-10 w-full text-[#f7f7f2] flex flex-col justify-between overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col justify-between h-full py-10 md:py-16">
          {/* Cabecera */}
          <ScrollReveal direction="up" distance={25}>
            <div className="w-full mb-8 md:mb-12">
              <div className="section-nav flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#f7f7f2]/75 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bcff48]" />
                <span>Sobre Nosotros & Liderazgo Global</span>
              </div>
              <h2
                className="section-title text-[#f7f7f2] font-bold leading-[0.92] tracking-normal text-balance"
                style={{ fontSize: 'clamp(38px, 6vw, 92px)' }}
              >
                Liderazgo global en reputación digital.
              </h2>
            </div>
          </ScrollReveal>

          {/* GRAN CUADRO DESTACADO: ¿QUIÉN ES TRUSTUPREVIEWS? */}
          <ScrollReveal direction="up" distance={30} delay={80}>
            <div className="relative rounded-3xl bg-gradient-to-b from-[#161616]/95 to-[#0d0d0d]/95 border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl overflow-hidden group hover:border-[#bcff48]/40 transition-all duration-300">
              {/* Destellos ambientales sutiles */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#bcff48]/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ff5a42]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Columna Izquierda (7 columnas): Título y descripción principal */}
                <div className="lg:col-span-7 flex flex-col">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 w-fit mb-5">
                    <Star className="w-3.5 h-3.5 fill-[#bcff48] text-[#bcff48]" />
                    <span className="section-copy text-xs font-bold tracking-[0.2em] uppercase text-[#f7f7f2]">
                      TrustUpReviews™ Oficial
                    </span>
                  </div>

                  <h3 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    ¿Quién es TrustUpReviews?
                  </h3>

                  <p className="section-copy text-sm sm:text-base md:text-[17px] text-[#f7f7f2]/90 leading-relaxed mb-5 font-normal">
                    <strong className="text-white font-semibold">TrustUpReviews™</strong> es la marca líder número uno que impulsa el servicio de reseñas para todos los propietarios de marcas de comercio electrónico y negocios locales. Con más de 8 años de experiencia en este panorama, hemos adaptado nuestras soluciones de reseñas para satisfacer el cambiante panorama del comercio electrónico y los negocios, impulsados por clientes positivos en línea.
                  </p>

                  <p className="section-copy text-sm sm:text-base text-[#f7f7f2]/75 leading-relaxed mb-8 font-normal">
                    Con presencia mundial en APAC, Europa y América, brindamos soluciones personalizadas para individuos y empresas de todo el mundo, garantizando una protección integral y el máximo crecimiento de autoridad para tu marca.
                  </p>

                  {/* Métricas destacadas en retícula */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                    <div>
                      <span className="section-title text-2xl sm:text-3xl font-bold text-[#bcff48] block">
                        +100K
                      </span>
                      <span className="section-copy text-xs text-[#f7f7f2]/70 font-medium">
                        Empresas impulsadas
                      </span>
                    </div>
                    <div>
                      <span className="section-title text-2xl sm:text-3xl font-bold text-white block">
                        +8 Años
                      </span>
                      <span className="section-copy text-xs text-[#f7f7f2]/70 font-medium">
                        Liderazgo global
                      </span>
                    </div>
                    <div>
                      <span className="section-title text-2xl sm:text-3xl font-bold text-[#bcff48] block">
                        99.4%
                      </span>
                      <span className="section-copy text-xs text-[#f7f7f2]/70 font-medium">
                        Satisfacción cliente
                      </span>
                    </div>
                    <div>
                      <span className="section-title text-2xl sm:text-3xl font-bold text-white block">
                        24/7
                      </span>
                      <span className="section-copy text-xs text-[#f7f7f2]/70 font-medium">
                        Monitorización VIP
                      </span>
                    </div>
                  </div>
                </div>

                {/* Columna Derecha (5 columnas): Tarjetas de pilares de valor añadido */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  {/* Pilar 1: Fuerte presencia */}
                  <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 sm:p-6 hover:bg-white/[0.07] transition-all">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#bcff48]/15 border border-[#bcff48]/30 text-[#bcff48] flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h4 className="section-title text-lg font-bold text-white">
                        Fuerte presencia global
                      </h4>
                    </div>
                    <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 leading-relaxed">
                      Ayudamos a más de 100.000+ empresas en todo el mundo a aumentar la confianza en su marca con resultados probados y medibles.
                    </p>
                  </div>

                  {/* Pilar 2: Soluciones innovadoras */}
                  <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 sm:p-6 hover:bg-white/[0.07] transition-all">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#ff5a42]/15 border border-[#ff5a42]/30 text-[#ff5a42] flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5" />
                      </div>
                      <h4 className="section-title text-lg font-bold text-white">
                        Soluciones innovadoras
                      </h4>
                    </div>
                    <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 leading-relaxed">
                      Estrategias avanzadas y tecnología propietaria que se adaptan permanentemente al cambiante panorama empresarial y algorítmico.
                    </p>
                  </div>

                  {/* Pilar 3: Garantía incondicional */}
                  <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 sm:p-6 hover:bg-white/[0.07] transition-all">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 text-white flex items-center justify-center shrink-0">
                        <Sparkles className="w-5 h-5 text-[#bcff48]" />
                      </div>
                      <h4 className="section-title text-lg font-bold text-white">
                        Garantía por escrito
                      </h4>
                    </div>
                    <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 leading-relaxed">
                      Entrega orgánica, perfiles 100% verificados y reposición asegurada para blindar la reputación de tu negocio sin riesgos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* SEGUNDO GRAN CUADRO DESTACADO: ¡TOMA EL CONTROL DE TU REPUTACIÓN ONLINE HOY MISMO! */}
          <ScrollReveal direction="up" distance={30} delay={120}>
            <div className="mt-10 md:mt-16 relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#181818]/95 via-[#121212]/95 to-[#0b0b0b]/95 border border-white/15 p-4 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl overflow-hidden hover:border-[#bcff48]/40 transition-all duration-300">
            {/* Destellos ambientales */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#bcff48]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ff5a42]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* LADO IZQUIERDO: Celular grande con persona y efecto tipo video mejorado */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-[310px] min-[400px]:max-w-[340px] sm:max-w-[370px]">
                  {/* Resplandor exterior del smartphone */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-[#bcff48]/25 via-white/10 to-[#ff5a42]/25 rounded-[52px] blur-2xl opacity-75 animate-pulse-glow" />

                  {/* Carcasa exterior del Celular (Acabado Titanio Oscuro) */}
                  <div className="relative rounded-[40px] sm:rounded-[46px] bg-[#1a1a1a] border-[6px] sm:border-[8px] border-[#2c2c2c] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95),0_0_30px_rgba(188,255,72,0.15)] overflow-hidden">
                    {/* Botones físicos laterales */}
                    <div className="absolute -left-2.5 top-24 w-1.5 h-10 bg-[#3d3d3d] rounded-r" />
                    <div className="absolute -left-2.5 top-38 w-1.5 h-10 bg-[#3d3d3d] rounded-r" />
                    <div className="absolute -right-2.5 top-28 w-1.5 h-14 bg-[#3d3d3d] rounded-l" />

                    {/* Pantalla del Celular */}
                    <div className="relative h-[530px] sm:h-[630px] bg-[#0c0f0d] flex flex-col justify-between overflow-hidden">
                      {/* Fondo de interfaz tecnológica oscura con sutiles resplandores */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 right-0 w-56 h-56 bg-[#bcff48]/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-10 left-0 w-48 h-48 bg-[#00b67a]/10 rounded-full blur-2xl" />
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                      </div>

                      {/* Notch / Dynamic Island */}
                      {/* Notch / Dynamic Island Conectada a las Opciones */}
                      <div className="relative z-30 pt-3 px-3 sm:px-4 flex items-center justify-between text-[11px] text-white/80 font-medium">
                        <span className="font-semibold tracking-tight text-white/70">09:41</span>

                        {/* Dynamic Island interactiva conectada a cada opción */}
                        <div
                          className={`bg-black/95 transition-all duration-300 ease-out border rounded-full px-2.5 sm:px-3 py-1 flex items-center gap-1.5 sm:gap-2 shadow-2xl backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95 ${dynamicIsland.borderGlow}`}
                          onClick={() => {
                            const categories: ('trustpilot' | 'google' | 'tripadvisor' | 'facebook')[] = [
                              'trustpilot',
                              'google',
                              'tripadvisor',
                              'facebook',
                            ];
                            const nextCat = categories[(categories.indexOf(phoneCategory) + 1) % categories.length];
                            handleSelectPhoneCategory(nextCat);
                          }}
                          title="Isla dinámica conectada en tiempo real — Clic para alternar plataforma"
                        >
                          <div className="flex items-center gap-1.5">
                            <span className={`w-2 h-2 rounded-full ${dynamicIsland.dotColor} animate-ping shrink-0`} />
                            {dynamicIsland.icon}
                          </div>
                          <span className="text-[10px] text-white font-bold tracking-wide truncate max-w-[105px] sm:max-w-[125px]">
                            {dynamicIsland.title}
                          </span>
                          <span
                            className={`text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded-full ${dynamicIsland.badgeBg} border border-white/10 shrink-0`}
                          >
                            {dynamicIsland.badge}
                          </span>
                        </div>

                        <div className="flex items-center gap-1 text-xs">
                          <span className="text-[9px] font-semibold text-white/80">5G</span>
                          <div className="w-4 h-2 border border-white/60 rounded-sm p-0.5 flex items-center">
                            <div className="w-full h-full bg-[#bcff48] rounded-[1px]" />
                          </div>
                        </div>
                      </div>

                      {/* Cabecera interior de la App del teléfono */}
                      <div className="relative z-20 px-4 pt-3 pb-2 border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#bcff48] animate-pulse" />
                          <span className="section-copy text-[11px] font-bold tracking-wider uppercase text-white">
                            Feed en Tiempo Real
                          </span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#bcff48]/15 text-[#bcff48] font-bold border border-[#bcff48]/30">
                          100% Blindado
                        </span>
                      </div>

                      {/* Contenedor de reseñas y calificaciones (SIN BARRA DE SCROLL VISIBLE) */}
                      <div
                        className="relative z-10 px-4 py-3 flex-1 overflow-y-auto no-scrollbar space-y-3"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                      >
                        {/* TARJETA DESTACADA: TRUSTSCORE 4.9 OFICIAL (CLICABLE Y CONECTADA A TRUSTPILOT) */}
                        <div
                          onClick={() => handleSelectPhoneCategory('trustpilot')}
                          className={`rounded-2xl bg-gradient-to-br from-[#132212] via-[#0d160c] to-[#0a0a0a] border p-3.5 shadow-xl relative overflow-hidden cursor-pointer transition-all ${
                            phoneCategory === 'trustpilot'
                              ? 'border-[#00b67a] shadow-[0_0_20px_rgba(0,182,122,0.35)] ring-1 ring-[#00b67a]/40'
                              : 'border-[#bcff48]/40 hover:border-[#bcff48]/70'
                          }`}
                          title="Resumen TrustScore Trustpilot — Clic para filtrar Trustpilot"
                        >
                          <div className="absolute top-0 right-0 w-24 h-24 bg-[#00b67a]/15 rounded-full blur-xl pointer-events-none" />

                          <div className="relative z-10 flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded bg-[#00b67a] text-white text-xs font-black flex items-center justify-center shadow-sm">
                                ★
                              </span>
                              <span className="text-xs font-bold text-white tracking-wide">
                                TrustScore Trustpilot
                              </span>
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#00b67a] text-white font-extrabold uppercase tracking-wider">
                              Excelente 4.9
                            </span>
                          </div>

                          <div className="flex items-baseline gap-2 mb-1.5">
                            <span className="section-title text-3xl sm:text-4xl font-black text-white tracking-tight">
                              4.9
                            </span>
                            <span className="text-xs text-[#bcff48] font-semibold">/ 5.0</span>
                            <div className="flex text-[#00b67a] text-base ml-1">
                              {'★★★★★'.split('').map((s, i) => (
                                <span key={i} className="text-[#00b67a] drop-shadow-[0_0_8px_rgba(0,182,122,0.6)]">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-white/70 pt-2 border-t border-white/10">
                            <span>2.850 opiniones verificadas</span>
                            <span className="text-[#bcff48] font-bold bg-[#bcff48]/10 px-2 py-0.5 rounded">
                              +10x LTV Activo
                            </span>
                          </div>
                        </div>

                        {/* BOTONES DE PLATAFORMAS ADAPTADOS AL CELULAR (CONECTADOS A LA ISLA DINÁMICA) */}
                        <div className="grid grid-cols-4 gap-1 w-full">
                          {(
                            [
                              {
                                id: 'trustpilot',
                                name: 'Trustpilot',
                                icon: '★',
                                activeBg:
                                  'bg-[#00b67a] text-white shadow-[0_0_12px_rgba(0,182,122,0.6)] ring-1 ring-white/30',
                              },
                              {
                                id: 'google',
                                name: 'Google',
                                icon: '🔴',
                                activeBg:
                                  'bg-[#ff5a42] text-white shadow-[0_0_12px_rgba(255,90,66,0.6)] ring-1 ring-white/30',
                              },
                              {
                                id: 'tripadvisor',
                                name: 'TripAdvisor',
                                icon: '🦉',
                                activeBg:
                                  'bg-[#00aa6c] text-white shadow-[0_0_12px_rgba(0,170,108,0.6)] ring-1 ring-white/30',
                              },
                              {
                                id: 'facebook',
                                name: 'Facebook',
                                icon: '🔵',
                                activeBg:
                                  'bg-[#1877F2] text-white shadow-[0_0_12px_rgba(24,119,242,0.6)] ring-1 ring-white/30',
                              },
                            ] as const
                          ).map((item) => {
                            const isSelected = phoneCategory === item.id;
                            return (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => handleSelectPhoneCategory(item.id)}
                                className={`py-2 px-1 rounded-xl text-center font-bold text-[9px] sm:text-[10px] transition-all duration-200 flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1 shadow-sm leading-tight ${
                                  isSelected
                                    ? item.activeBg
                                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                                }`}
                                title={`Ver reseñas de ${item.name}`}
                              >
                                <span className="shrink-0 text-[10px]">{item.icon}</span>
                                <span className="truncate max-w-full">{item.name}</span>
                              </button>
                            );
                          })}
                        </div>

                        {/* LISTA ANIMADA DE RESEÑAS DE LA PLATAFORMA SELECCIONADA */}
                        <div className="space-y-2.5">
                          {PHONE_NOTIFICATIONS.filter(
                            (item) => item.category === phoneCategory
                          ).map((item) => {
                            const isCurrentActive = activePhoneMsgIdx === (item.id - 1);
                            return (
                              <div
                                key={item.id}
                                onClick={() => setActivePhoneMsgIdx(item.id - 1)}
                                className={`rounded-xl p-3 border transition-all duration-300 cursor-pointer ${
                                  isCurrentActive
                                    ? 'bg-[#152313] border-[#bcff48] shadow-[0_0_18px_rgba(188,255,72,0.2)] scale-[1.01]'
                                    : 'bg-[#111311] border-white/10 hover:border-white/20'
                                }`}
                              >
                                {/* Cabecera del mensaje / notificación */}
                                <div className="flex items-center justify-between mb-1.5">
                                  <div className="flex items-center gap-2">
                                    <div
                                      className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.avatarBg} text-white font-bold text-[10px] flex items-center justify-center shadow`}
                                    >
                                      {item.avatarLetter}
                                    </div>
                                    <div>
                                      <p className="text-[11px] font-bold text-white leading-none">
                                        {item.platform}
                                      </p>
                                      <span className="text-[9px] text-white/50">{item.time}</span>
                                    </div>
                                  </div>
                                  <span
                                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${item.badgeBg}`}
                                  >
                                    {item.badge}
                                  </span>
                                </div>

                                {/* Estrellas si aplica */}
                                {item.stars && (
                                  <div className="flex items-center gap-1 text-amber-400 text-xs mb-1">
                                    {'★★★★★'}
                                  </div>
                                )}

                                {/* Texto del mensaje / reseña */}
                                <p className="text-[11px] text-white/90 leading-snug italic mb-1.5">
                                  {item.text}
                                </p>

                                {/* Pie del mensaje con autor y métrica */}
                                <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[10px]">
                                  <span className="text-white/60 truncate max-w-[150px]">
                                    {item.sender}
                                  </span>
                                  <span className="text-[#bcff48] font-bold bg-[#bcff48]/15 px-1.5 py-0.5 rounded text-[9px]">
                                    {item.metricLabel}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Dock inferior del celular con controles de animación */}
                      <div className="relative z-20 px-4 py-2 bg-black/90 border-t border-white/10 flex items-center justify-between">
                        {/* Indicadores de paginación de mensajes de la plataforma activa */}
                        <div className="flex items-center gap-1">
                          {PHONE_NOTIFICATIONS.filter((item) => item.category === phoneCategory).map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setActivePhoneMsgIdx(item.id - 1)}
                              aria-label={`Ver reseña ${item.id}`}
                              className="p-2 -m-1 inline-flex items-center justify-center focus-visible:outline-none"
                            >
                              <span
                                className={`h-1.5 rounded-full transition-all block ${
                                  activePhoneMsgIdx === (item.id - 1)
                                    ? 'w-5 bg-[#bcff48]'
                                    : 'w-1.5 bg-white/30 hover:bg-white/50'
                                }`}
                              />
                            </button>
                          ))}
                        </div>

                        {/* Botón para pausar o reactivar la simulación */}
                        <button
                          type="button"
                          onClick={() => setIsAutoPlayingPhone(!isAutoPlayingPhone)}
                          aria-label={isAutoPlayingPhone ? 'Pausar simulación' : 'Reanudar simulación'}
                          className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors focus-visible:outline-none min-h-[36px]"
                        >
                          {isAutoPlayingPhone ? (
                            <>
                              <Pause className="w-3 h-3 text-[#bcff48]" />
                              <span>Pausar</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-3 h-3 text-[#bcff48]" />
                              <span>Animar</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Reflejo decorativo debajo del móvil */}
                  <div className="w-3/4 mx-auto h-4 bg-gradient-to-r from-transparent via-[#bcff48]/20 to-transparent blur-md mt-2" />
                </div>
              </div>

              {/* LADO DERECHO: Texto exacto solicitado y opciones de acción */}
              <div className="lg:col-span-7 flex flex-col">
                {/* Etiqueta superior */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#bcff48]/10 border border-[#bcff48]/30 w-fit mb-5">
                  <Zap className="w-3.5 h-3.5 text-[#bcff48]" />
                  <span className="section-copy text-xs font-bold tracking-[0.18em] uppercase text-[#bcff48]">
                    Aceleración de Negocios · 10x LTV
                  </span>
                </div>

                {/* Título principal solicitado */}
                <h3 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.08] tracking-tight">
                  ¡Toma el control de tu reputación online hoy mismo!
                </h3>

                {/* Párrafo 1 solicitado */}
                <p className="section-copy text-sm sm:text-base md:text-[17px] text-[#f7f7f2]/90 leading-relaxed mb-6 font-normal">
                  Con nuestros servicios de publicación de reseñas de expertos y estrategias comprobadas para generar reseñas positivas y auténticas, puede concentrarse en lo que más importa —<strong className="text-white font-semibold">hacer crecer su negocio</strong>.
                </p>

                {/* Cuadro destacado 1: ¡Es fácil duplicar tus ventas! */}
                <div className="rounded-2xl bg-gradient-to-r from-[#bcff48]/10 via-white/[0.04] to-transparent border border-[#bcff48]/30 p-5 sm:p-6 mb-6 hover:border-[#bcff48]/60 transition-all">
                  <p className="section-title text-lg sm:text-xl font-bold text-[#bcff48] mb-1.5 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 shrink-0" />
                    ¡Es fácil duplicar tus ventas!
                  </p>
                  <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/90 leading-relaxed">
                    Cuando tienes a otras personas en línea que te ayudan a realizar la venta
                  </p>
                </div>

                {/* Cuadro destacado 2: Impacto LTV 10x y Reemplazo de negatividad */}
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 mb-6 space-y-3.5">
                  <p className="section-copy text-xs sm:text-sm md:text-[15px] text-[#f7f7f2]/85 leading-relaxed">
                    Las reseñas positivas pueden tener un impacto significativo en su negocio, <strong className="text-white font-semibold">aumentando la confianza del cliente y el valor de vida útil (LTV) hasta 10 veces</strong>. No dejes que los comentarios negativos te detengan.
                  </p>

                  <p className="section-copy text-xs sm:text-sm md:text-[15px] text-[#f7f7f2]/80 leading-relaxed pt-2 border-t border-white/10">
                    Le ayudamos a mostrar las fortalezas de su marca reemplazando la negatividad con críticas genuinas y entusiastas—, <span className="text-[#bcff48] font-semibold">todo manejado a la perfección para usted</span>.
                  </p>
                </div>

                {/* Pregunta de cierre y llamada a la acción con especialistas */}
                <div className="pt-2">
                  <p className="section-title text-lg sm:text-xl font-bold text-white mb-2">
                    ¿Listo para elevar tu reputación?
                  </p>
                  <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 leading-relaxed mb-6">
                    Comuníquese con nuestros especialistas hoy y uno de los miembros dedicados de nuestro equipo lo ayudará de inmediato.
                  </p>

                  {/* Botones de acción directa */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSpecialistModalOpen(true)}
                      className="section-copy w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#bcff48] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#a7eb35] transition-all shadow-lg hover:shadow-[0_0_25px_rgba(188,255,72,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bcff48] active:scale-98"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Hablar con un especialista</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedCatalogPlatform('Google Reviews')}
                      className="section-copy w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bcff48] active:scale-98"
                    >
                      <span>Ver catálogo de precios</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Micro-garantías */}
                  <div className="flex flex-wrap items-center gap-4 mt-5 text-[11px] text-[#f7f7f2]/60 section-copy">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#bcff48]" />
                      <span>Respuesta en menos de 15 minutos</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#bcff48]" />
                      <span>Garantía de satisfacción 100%</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#bcff48]" />
                      <span>+100.000 marcas asesoradas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
      </section>

      {/* SECCIÓN: EN QUÉ SOMOS DIFERENTES */}
      <section id="diferenciales" className="relative py-16 sm:py-24 bg-gradient-to-b from-[#08090b] via-[#0d1015] to-[#08090b] border-t border-white/10 overflow-hidden">
        {/* Luces y fondos decorativos */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#bcff48]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ff5a42]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* LADO IZQUIERDO: TÍTULO Y TEXTO SOLICITADO */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <ScrollReveal direction="up" distance={30}>
                {/* Etiqueta superior */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#bcff48]/10 border border-[#bcff48]/30 text-[#bcff48] text-[11px] font-mono font-bold tracking-widest uppercase mb-4 self-start">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>VENTAJA EXCLUSIVA · TRUSTUPREVIEWS™</span>
                </div>

                {/* Título en el lado izquierdo */}
                <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.05] mb-6">
                  En qué somos diferentes
                </h2>

                {/* Párrafo solicitado en el lado izquierdo */}
                <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 mb-6">
                  <p className="section-copy text-base sm:text-[17px] text-[#f7f7f2]/90 leading-relaxed font-normal">
                    <strong className="text-white font-semibold">TrustUpReviews™</strong> es la autoridad líder en gestión de reputación. Tenemos un enfoque único que combina la eliminación de reseñas negativas y la gestión de la reputación en una solución eficaz. Nuestra reputación Los especialistas/software pueden ayudarle a eliminar lo siguiente:
                  </p>
                </div>

                {/* Beneficios diferenciales clave de nuestro software y especialistas */}
                <div className="space-y-3.5 mb-8">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#bcff48]/30 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-[#bcff48]/10 border border-[#bcff48]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4 text-[#bcff48]" />
                    </div>
                    <div>
                      <h4 className="section-title text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                        Eliminación Permanente y Legal
                      </h4>
                      <p className="section-copy text-xs text-[#f7f7f2]/75 leading-relaxed mt-0.5">
                        Sin prácticas inseguras. Tramitamos solicitudes oficiales basadas en normativas legales y términos de cada plataforma.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#bcff48]/30 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-[#bcff48]/10 border border-[#bcff48]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Zap className="w-4 h-4 text-[#bcff48]" />
                    </div>
                    <div>
                      <h4 className="section-title text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                        Software Propietario con Detección IA
                      </h4>
                      <p className="section-copy text-xs text-[#f7f7f2]/75 leading-relaxed mt-0.5">
                        Identifica en minutos patrones de ataque, bots, lenguaje inapropiado y cuentas fraudulentas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#bcff48]/30 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-[#bcff48]/10 border border-[#bcff48]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="w-4 h-4 text-[#bcff48]" />
                    </div>
                    <div>
                      <h4 className="section-title text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                        Garantía 100% de Devolución
                      </h4>
                      <p className="section-copy text-xs text-[#f7f7f2]/75 leading-relaxed mt-0.5">
                        Su inversión está totalmente protegida. Si el caso no se resuelve favorablemente, reembolsamos el 100%.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Botón de llamada a la acción */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => setSpecialistModalOpen(true)}
                    className="section-copy inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-4 rounded-full bg-[#bcff48] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#a7eb35] transition-all shadow-lg hover:shadow-[0_0_25px_rgba(188,255,72,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bcff48]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Auditar mi caso con un especialista</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="section-copy text-[11px] text-[#f7f7f2]/60 mt-3 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#bcff48]" />
                    <span>Diagnóstico inicial confidencial y respuesta en &lt; 15 min</span>
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* LADO DERECHO: LO QUE AYUDAMOS A ELIMINAR */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="up" distance={30} delay={120}>
                <div className="rounded-2xl sm:rounded-3xl bg-[#11141a]/90 border border-white/10 p-5 sm:p-7 md:p-8 backdrop-blur-sm relative">
                  {/* Cabecera del cuadro derecho */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-white/10">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#bcff48] font-bold">
                        COBERTURA DE ELIMINACIÓN Y GESTIÓN
                      </span>
                      <h3 className="section-title text-xl sm:text-2xl font-bold text-white mt-1">
                        Lo que eliminamos para proteger tu negocio
                      </h3>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-[#ff5a42]/10 border border-[#ff5a42]/30 text-[#ff5a42] text-[11px] font-mono font-bold">
                      94.8% Éxito Comprobado
                    </div>
                  </div>

                  {/* Grid con las 6 amenazas principales que eliminan los especialistas y software */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Tarjeta 1 */}
                    <div className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff5a42]/50 p-4 sm:p-5 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,90,66,0.15)]">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#ff5a42]/15 border border-[#ff5a42]/30 flex items-center justify-center text-[#ff5a42]">
                          <UserX className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#ff5a42]/15 text-[#ff5a42] border border-[#ff5a42]/20">
                          Eliminable
                        </span>
                      </div>
                      <h4 className="section-title text-sm sm:text-base font-bold text-white group-hover:text-[#bcff48] transition-colors">
                        Reseñas falsas de competidores
                      </h4>
                      <p className="section-copy text-xs text-[#f7f7f2]/75 leading-relaxed mt-1.5">
                        Ataques sucios y campañas orquestadas por perfiles falsos que nunca fueron clientes de su negocio.
                      </p>
                    </div>

                    {/* Tarjeta 2 */}
                    <div className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff5a42]/50 p-4 sm:p-5 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,90,66,0.15)]">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#ff5a42]/15 border border-[#ff5a42]/30 flex items-center justify-center text-[#ff5a42]">
                          <Star className="w-4 h-4 fill-[#ff5a42]" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#ff5a42]/15 text-[#ff5a42] border border-[#ff5a42]/20">
                          Eliminable
                        </span>
                      </div>
                      <h4 className="section-title text-sm sm:text-base font-bold text-white group-hover:text-[#bcff48] transition-colors">
                        Calificaciones de 1★ sin comentario
                      </h4>
                      <p className="section-copy text-xs text-[#f7f7f2]/75 leading-relaxed mt-1.5">
                        Puntuaciones vacías sin texto explicativo ni evidencia de servicio que hunden su calificación promedio.
                      </p>
                    </div>

                    {/* Tarjeta 3 */}
                    <div className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff5a42]/50 p-4 sm:p-5 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,90,66,0.15)]">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#ff5a42]/15 border border-[#ff5a42]/30 flex items-center justify-center text-[#ff5a42]">
                          <ShieldAlert className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#ff5a42]/15 text-[#ff5a42] border border-[#ff5a42]/20">
                          Eliminable
                        </span>
                      </div>
                      <h4 className="section-title text-sm sm:text-base font-bold text-white group-hover:text-[#bcff48] transition-colors">
                        Difamación y lenguaje ofensivo
                      </h4>
                      <p className="section-copy text-xs text-[#f7f7f2]/75 leading-relaxed mt-1.5">
                        Reseñas que violan términos oficiales, incluyen insultos, acusaciones falsas o amenazas comerciales.
                      </p>
                    </div>

                    {/* Tarjeta 4 */}
                    <div className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff5a42]/50 p-4 sm:p-5 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,90,66,0.15)]">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#ff5a42]/15 border border-[#ff5a42]/30 flex items-center justify-center text-[#ff5a42]">
                          <Trash2 className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#ff5a42]/15 text-[#ff5a42] border border-[#ff5a42]/20">
                          Eliminable
                        </span>
                      </div>
                      <h4 className="section-title text-sm sm:text-base font-bold text-white group-hover:text-[#bcff48] transition-colors">
                        Ataques de bots masivos y spam
                      </h4>
                      <p className="section-copy text-xs text-[#f7f7f2]/75 leading-relaxed mt-1.5">
                        Bombardeo coordinado de valoraciones artificiales generadas por software malicioso de terceros.
                      </p>
                    </div>

                    {/* Tarjeta 5 */}
                    <div className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff5a42]/50 p-4 sm:p-5 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,90,66,0.15)]">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#ff5a42]/15 border border-[#ff5a42]/30 flex items-center justify-center text-[#ff5a42]">
                          <FileWarning className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#ff5a42]/15 text-[#ff5a42] border border-[#ff5a42]/20">
                          Eliminable
                        </span>
                      </div>
                      <h4 className="section-title text-sm sm:text-base font-bold text-white group-hover:text-[#bcff48] transition-colors">
                        Reseñas de ex-empleados o conflictos
                      </h4>
                      <p className="section-copy text-xs text-[#f7f7f2]/75 leading-relaxed mt-1.5">
                        Disputas internas o personales que no corresponden a experiencias de clientes genuinos.
                      </p>
                    </div>

                    {/* Tarjeta 6 */}
                    <div className="rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ff5a42]/50 p-4 sm:p-5 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,90,66,0.15)]">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#ff5a42]/15 border border-[#ff5a42]/30 flex items-center justify-center text-[#ff5a42]">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#ff5a42]/15 text-[#ff5a42] border border-[#ff5a42]/20">
                          Eliminable
                        </span>
                      </div>
                      <h4 className="section-title text-sm sm:text-base font-bold text-white group-hover:text-[#bcff48] transition-colors">
                        Quejas resueltas o malentendidos
                      </h4>
                      <p className="section-copy text-xs text-[#f7f7f2]/75 leading-relaxed mt-1.5">
                        Problemas ya resueltos con el cliente que siguen afectando injustamente la conversión de ventas.
                      </p>
                    </div>
                  </div>

                  {/* Barra de impacto / Garantía */}
                  <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-[#bcff48]/10 via-transparent to-[#ff5a42]/10 p-4 rounded-xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#bcff48]/20 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5 text-[#bcff48]" />
                      </div>
                      <div>
                        <p className="section-title text-xs sm:text-sm font-bold text-white">
                          Eliminación sin penalización para su perfil
                        </p>
                        <p className="section-copy text-[11px] text-[#f7f7f2]/70">
                          Garantizamos la seguridad total de su ficha en Google, Trustpilot, TripAdvisor y Facebook.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSpecialistModalOpen(true)}
                      className="section-copy text-xs font-bold text-[#bcff48] hover:text-white uppercase tracking-wider flex items-center gap-1.5 transition-colors focus-visible:outline-none"
                    >
                      <span>Consultar mi caso</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: MÉTRICAS Y PROCESO DE PUBLICACIÓN DE RESEÑAS */}
      <section id="proceso" className="relative py-16 sm:py-24 bg-black border-t border-white/10 overflow-hidden">
        {/* Luces sutiles de fondo */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#00E599]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#bcff48]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* CUADRO HORIZONTAL LARGO DE IZQUIERDA A DERECHA CON LAS 3 MÉTRICAS */}
          <ScrollReveal direction="up" distance={25}>
            <div className="w-full rounded-2xl bg-white/[0.03] border border-white/10 p-3.5 sm:p-5 mb-12 sm:mb-16 backdrop-blur-md shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {/* Métrica 1: 60% */}
                <div className="flex items-center gap-4 p-3.5 sm:p-4">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#bcff48] tracking-tight shrink-0 font-mono">
                    60%
                  </span>
                  <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/90 leading-snug">
                    Los especialistas en marketing B2B afirmaron que el SEO y el tráfico orgánico generan más leads que cualquier otra iniciativa de marketing.
                  </p>
                </div>

                {/* Métrica 2: 85% */}
                <div className="flex items-center gap-4 p-3.5 sm:p-4">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#bcff48] tracking-tight shrink-0 font-mono">
                    85%
                  </span>
                  <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/90 leading-snug">
                    de personas que realizan algún tipo de investigación en línea antes de contactar a un negocio para realizar una compra.
                  </p>
                </div>

                {/* Métrica 3: 76% */}
                <div className="flex items-center gap-4 p-3.5 sm:p-4">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#bcff48] tracking-tight shrink-0 font-mono">
                    76%
                  </span>
                  <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/90 leading-snug">
                    de los consumidores confían tanto en las reseñas en línea como en las recomendaciones personales.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ESTRUCTURA PRINCIPAL: IZQUIERDA (ILUSTRACIÓN PC) + DERECHA (PROCESO) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* LADO IZQUIERDO: ILUSTRACIÓN VECTORIAL MEJORADA DE COMPUTADOR, PERSONAJE, ESTRELLAS Y FLECHA ASCENDENTE */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <ScrollReveal direction="up" distance={30} delay={60}>
                <ReviewProcessIllustration />
              </ScrollReveal>
            </div>

            {/* LADO DERECHO: CUADRO CON PROCESO DE PUBLICACIÓN Y SUS 4 ETAPAS */}
            <div className="lg:col-span-7">
              <ScrollReveal direction="up" distance={30} delay={140}>
                <div className="rounded-2xl sm:rounded-3xl bg-[#11141a]/90 border border-white/10 p-6 sm:p-8 md:p-9 backdrop-blur-sm relative">
                  {/* Badge de proceso */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#bcff48]/10 border border-[#bcff48]/30 text-[#bcff48] text-[11px] font-mono font-bold tracking-widest uppercase mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Review Process Illustration</span>
                  </div>

                  {/* Título principal */}
                  <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-tight mb-4">
                    Nuestra publicación de reseñas y el impulso de la marca Proceso
                  </h2>

                  {/* Párrafo introductorio */}
                  <p className="section-copy text-sm sm:text-base text-[#f7f7f2]/85 leading-relaxed mb-7 font-normal">
                    Cada campaña de gestión de revisiones ofrece sus propios desafíos y oportunidades únicos. Aunque las tácticas variarán según las necesidades específicas de cada cliente, nuestro proceso de establecimiento de objetivos, puntos de control y las expectativas nunca cambian. Al trabajar con nosotros, siempre puede esperar una transparencia total, asesoramiento experto y comunicación rápida.
                  </p>

                  {/* 4 Pasos del Proceso con números de secuencia y animaciones interactivas */}
                  <div className="space-y-4">
                    {/* Paso 01: Descubrimiento */}
                    <div className="group p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#bcff48]/50 hover:bg-white/[0.04] hover:translate-x-1 transition-all duration-300">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-[#bcff48]/15 text-[#bcff48] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <Search className="w-4 h-4 text-[#bcff48]" />
                          </span>
                          <h3 className="section-title text-base sm:text-lg font-bold text-white group-hover:text-[#bcff48] transition-colors">
                            Descubrimiento
                          </h3>
                        </div>
                        <span className="text-[11px] font-mono font-bold text-white/40 group-hover:text-[#bcff48] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                          ETAPA 01
                        </span>
                      </div>
                      <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/75 leading-relaxed pl-11">
                        Examinamos su presencia en línea para determinar tus necesidades, objetivos, y el contenido que desea que eliminemos o desplacemos.
                      </p>
                    </div>

                    {/* Paso 02: Medir, analizar y priorizar */}
                    <div className="group p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#bcff48]/50 hover:bg-white/[0.04] hover:translate-x-1 transition-all duration-300">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-[#bcff48]/15 text-[#bcff48] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <TrendingUp className="w-4 h-4 text-[#bcff48]" />
                          </span>
                          <h3 className="section-title text-base sm:text-lg font-bold text-white group-hover:text-[#bcff48] transition-colors">
                            Medir, analizar y priorizar
                          </h3>
                        </div>
                        <span className="text-[11px] font-mono font-bold text-white/40 group-hover:text-[#bcff48] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                          ETAPA 02
                        </span>
                      </div>
                      <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/75 leading-relaxed pl-11">
                        Nuestros estrategas determinan qué tácticas o curso de acción es el más efectivo para publicar el contenido positivo.
                      </p>
                    </div>

                    {/* Paso 03: Diseño y lanzamiento de campaña de publicación */}
                    <div className="group p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#bcff48]/50 hover:bg-white/[0.04] hover:translate-x-1 transition-all duration-300">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-[#bcff48]/15 text-[#bcff48] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <Zap className="w-4 h-4 text-[#bcff48]" />
                          </span>
                          <h3 className="section-title text-base sm:text-lg font-bold text-white group-hover:text-[#bcff48] transition-colors">
                            Diseño y lanzamiento de campaña de publicación
                          </h3>
                        </div>
                        <span className="text-[11px] font-mono font-bold text-white/40 group-hover:text-[#bcff48] px-2 py-0.5 rounded bg-white/5 border border-white/10">
                          ETAPA 03
                        </span>
                      </div>
                      <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/75 leading-relaxed pl-11">
                        Nuestro equipo de expertos toma medidas usando varias conexiones internas a negocios, opciones legales, estrategias de SEO, software o una combinación de múltiples facetas.
                      </p>
                    </div>

                    {/* Paso 04: Obtenga miles de reseñas positivas Mensual / Seguimiento del progreso */}
                    <div className="group p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#bcff48]/15 via-white/[0.03] to-transparent border border-[#bcff48]/40 hover:border-[#bcff48]/70 hover:translate-x-1 transition-all duration-300 shadow-[0_4px_25px_rgba(188,255,72,0.1)]">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-[#bcff48] text-black flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <Sparkles className="w-4 h-4 text-black" />
                          </span>
                          <h3 className="section-title text-base sm:text-lg font-bold text-[#bcff48]">
                            Obtenga miles de reseñas positivas Mensual / Seguimiento del progreso
                          </h3>
                        </div>
                        <span className="text-[11px] font-mono font-bold text-black px-2 py-0.5 rounded bg-[#bcff48]">
                          ETAPA 04
                        </span>
                      </div>
                      <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/90 leading-relaxed pl-11">
                        Generamos un flujo continuo de reseñas verificadas, enviamos informes mensuales transparentes y protegemos su calificación de por vida.
                      </p>
                    </div>
                  </div>

                  {/* Acciones de cierre del cuadro */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setSpecialistModalOpen(true)}
                      className="section-copy inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#bcff48] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#a7eb35] transition-all shadow-lg hover:shadow-[0_0_25px_rgba(188,255,72,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bcff48]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Iniciar mi campaña ahora</span>
                    </button>
                    <span className="section-copy text-xs text-[#f7f7f2]/60 font-mono">
                      Rastreo en tiempo real · Google Sheets
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: LA GARANTÍA DE CONFIANZA Y TESTIMONIOS */}
      <GuaranteeSection onOpenSpecialist={() => setSpecialistModalOpen(true)} />

      {/* SECCIÓN 8: PREGUNTAS FRECUENTES - IMPORTANCIA DE LAS RESEÑAS DE TRUSTPILOT */}
      <FaqSection onOpenSpecialist={() => setSpecialistModalOpen(true)} />

      {/* SECCIÓN 9: CONTACTO Y ASESORÍA PERSONALIZADA */}
      <section id="contacto" className="relative py-20 sm:py-24 pb-28 lg:pb-24 bg-gradient-to-b from-[#040507] via-black to-black border-t border-white/10 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" distance={30}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#bcff48]/10 border border-[#bcff48]/30 text-[#bcff48] text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Contacto Directo con Especialistas</span>
            </div>

            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              ¿Listo para transformar la reputación de tu negocio?
            </h2>

            <p className="section-copy text-sm sm:text-base text-[#f7f7f2]/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Obtén un diagnóstico gratuito y confidencial en menos de 15 minutos. Nuestro equipo de gestión y eliminación de reseñas está disponible para asistirte.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setSpecialistModalOpen(true)}
                className="section-copy inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#bcff48] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#a6ea34] transition-all shadow-[0_0_30px_rgba(188,255,72,0.4)]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Hablar con un Especialista</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCatalogPlatform('Google Reviews')}
                className="section-copy inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Ver Catálogo de Precios</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-[#f7f7f2]/50">
            <p>© {new Date().getFullYear()} TrustUpReviews™. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
              <a href="#inicio" className="hover:text-white transition-colors">Volver arriba ↑</a>
              <span>·</span>
              <button type="button" onClick={() => setSpecialistModalOpen(true)} className="hover:text-[#bcff48] transition-colors">Soporte 24/7</button>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL CATÁLOGO DE PRECIOS (ADAPTADO A MÓVILES COMO BOTTOM-SHEET) */}
      {selectedCatalogPlatform && activeCatalog && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Catálogo de precios para ${activeCatalog.platform}`}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-5 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-hero-entrance"
        >
          {/* Fondo para cerrar al hacer clic afuera */}
          <div
            className="fixed inset-0"
            onClick={() => setSelectedCatalogPlatform(null)}
          />

          {/* Contenedor principal del catálogo */}
          <div className="relative z-10 w-full max-w-5xl bg-[#141414] border-t sm:border border-white/15 rounded-t-3xl sm:rounded-2xl shadow-2xl p-4 sm:p-7 md:p-9 max-sm:max-h-[92vh] my-0 sm:my-auto max-h-[92vh] overflow-y-auto overscroll-contain pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            {/* Cabecera del modal */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className="section-copy text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${activeCatalog.accentColor}20`,
                      color: activeCatalog.accentColor,
                      border: `1px solid ${activeCatalog.accentColor}40`,
                    }}
                  >
                    {activeCatalog.badge}
                  </span>
                  <span className="section-copy text-xs text-[#f7f7f2]/50 font-medium">
                    {activeCatalog.projectCode}
                  </span>
                </div>
                <h3 className="section-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#f7f7f2] leading-tight">
                  {activeCatalog.headline}
                </h3>
                <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/70 max-w-2xl mt-2 leading-relaxed">
                  {activeCatalog.description}
                </p>
              </div>

              {/* Botón de cierre ergonómico */}
              <button
                type="button"
                onClick={() => setSelectedCatalogPlatform(null)}
                className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-[#f7f7f2] hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bcff48] shrink-0 active:scale-95"
                aria-label="Cerrar catálogo"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Selector de plataforma para alternar rápido entre catálogos */}
            <div className="flex items-center gap-2 overflow-x-auto py-4 border-b border-white/10 no-scrollbar touch-pan-x -mx-4 px-4 sm:mx-0 sm:px-0">
              <span className="section-copy text-xs text-[#f7f7f2]/50 uppercase tracking-wider font-semibold whitespace-nowrap mr-1">
                Ver otra plataforma:
              </span>
              {Object.keys(CATALOGS_DATA).map((plat) => (
                <button
                  key={plat}
                  type="button"
                  onClick={() => setSelectedCatalogPlatform(plat)}
                  className={`section-copy text-xs font-semibold px-4 py-2 min-h-[38px] flex items-center justify-center rounded-full transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bcff48] active:scale-95 ${
                    selectedCatalogPlatform === plat
                      ? 'bg-white text-black shadow-md'
                      : 'bg-white/5 text-[#f7f7f2]/70 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {plat}
                </button>
              ))}
            </div>

            {/* Imagen gráfica visual representativa de la sección */}
            <div className="pt-5 pb-1">
              <PlatformSectionImage platform={activeCatalog.platform} />
            </div>

            {/* Cuadrícula de planes y precios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">
              {activeCatalog.plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative flex flex-col justify-between rounded-lg p-5 border transition-all ${
                    plan.popular
                      ? 'bg-[#1b1b1b] border-[#bcff48]/70 shadow-[0_0_25px_rgba(188,255,72,0.15)] ring-1 ring-[#bcff48]/50'
                      : 'bg-[#161616] border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Badge de más popular */}
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 section-copy text-[10px] font-bold tracking-widest uppercase bg-[#bcff48] text-black px-3 py-0.5 rounded-full shadow-md">
                      Más Popular
                    </div>
                  )}

                  <div>
                    {/* Título del paquete y cantidad de reseñas */}
                    <p className="section-copy text-xs uppercase tracking-wider text-[#f7f7f2]/60 font-semibold mb-1">
                      {plan.name}
                    </p>
                    <h4 className="section-title text-base sm:text-lg font-bold text-[#f7f7f2] mb-3 leading-snug">
                      {plan.reviewsCount}
                    </h4>

                    {/* Precio y entrega */}
                    <div className="mb-4 pb-4 border-b border-white/10">
                      <div className="flex items-baseline gap-2">
                        <span className="section-title text-3xl font-bold text-white tracking-tight">
                          {plan.price}
                        </span>
                        <span className="section-copy text-xs text-[#f7f7f2]/40 line-through">
                          {plan.originalPrice}
                        </span>
                      </div>
                      <span className="section-copy text-[11px] text-[#f7f7f2]/50 font-medium">
                        Pago único por campaña
                      </span>

                      <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#f7f7f2]/80 bg-white/5 px-2.5 py-1 rounded">
                        <Zap className="w-3 h-3 text-[#bcff48]" />
                        <span>{plan.delivery}</span>
                      </div>
                    </div>

                    {/* Lista de características incluidas */}
                    <ul className="section-copy space-y-2 mb-6">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#f7f7f2]/80 leading-tight">
                          <Check className="w-3.5 h-3.5 text-[#bcff48] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Botón para solicitar paquete con tamaño táctil de 46px */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedPlanSuccess({
                        planName: plan.name,
                        platform: activeCatalog.platform,
                        price: plan.price,
                      })
                    }
                    className={`section-copy w-full min-h-[46px] py-3 px-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bcff48] active:scale-98 ${
                      plan.popular
                        ? 'bg-[#bcff48] text-black hover:bg-[#a9eb38] shadow-md hover:shadow-lg'
                        : 'bg-white text-black hover:bg-stone-200'
                    }`}
                  >
                    <span>Elegir paquete</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Garantías y notas de seguridad al pie del catálogo */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#f7f7f2]/60 section-copy">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#bcff48]" />
                <span>Entrega gradual algorítmica: 100% segura y sin riesgo de penalización.</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#ff5a42]" />
                <span>Garantía de reposición total por escrito.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONFIRMACIÓN DE PLAN SELECCIONADO */}
      {selectedPlanSuccess && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-hero-entrance"
        >
          <div className="relative w-full max-w-md bg-[#161616] border border-[#bcff48]/40 rounded-2xl p-6 sm:p-7 shadow-2xl text-center pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <div className="w-12 h-12 rounded-full bg-[#bcff48]/15 text-[#bcff48] flex items-center justify-center mx-auto mb-4 border border-[#bcff48]/30">
              <Check className="w-6 h-6" />
            </div>

            <h4 className="section-title text-xl sm:text-2xl font-bold text-white mb-2">
              ¡Plan Seleccionado!
            </h4>
            <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 mb-4">
              Has seleccionado el <strong className="text-white">{selectedPlanSuccess.planName}</strong> para{' '}
              <strong className="text-[#bcff48]">{selectedPlanSuccess.platform}</strong> por{' '}
              <strong className="text-white">{selectedPlanSuccess.price}</strong>.
            </p>
            <p className="section-copy text-xs text-[#f7f7f2]/60 mb-6">
              El equipo de gestión de reputación está listo para iniciar la entrega gradual y segura de tus reseñas.
            </p>

            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setSelectedPlanSuccess(null);
                  setSelectedCatalogPlatform(null);
                }}
                className="section-copy w-full min-h-[46px] py-3 rounded-xl bg-[#bcff48] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#a8eb37] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bcff48] active:scale-98"
              >
                Confirmar y Cerrar
              </button>
              <button
                type="button"
                onClick={() => setSelectedPlanSuccess(null)}
                className="section-copy w-full min-h-[40px] py-2 text-xs text-[#f7f7f2]/70 hover:text-white transition-colors"
              >
                Volver a la lista de precios
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE CONTACTO CON ESPECIALISTAS (ADAPTADO A MÓVILES COMO BOTTOM-SHEET) */}
      {specialistModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Contactar con un especialista en reputación"
          className="fixed inset-0 z-60 flex items-end sm:items-center justify-center p-0 sm:p-5 bg-black/85 backdrop-blur-md animate-hero-entrance overflow-y-auto"
        >
          <div
            className="fixed inset-0"
            onClick={() => setSpecialistModalOpen(false)}
          />

          <div className="relative z-10 w-full max-w-lg bg-[#141414] border-t sm:border border-[#bcff48]/40 rounded-t-3xl sm:rounded-2xl p-5 sm:p-8 shadow-2xl max-sm:max-h-[92vh] my-0 sm:my-auto max-h-[92vh] overflow-y-auto overscroll-contain pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-5">
              <div>
                <span className="section-copy text-[11px] font-bold text-[#bcff48] uppercase tracking-wider">
                  Atención Inmediata
                </span>
                <h3 className="section-title text-2xl font-bold text-white mt-0.5">
                  Habla con un especialista
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSpecialistModalOpen(false)}
                className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all active:scale-95 shrink-0"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {specialistSuccess ? (
              <div className="py-6 text-center">
                <div className="w-14 h-14 rounded-full bg-[#bcff48]/15 text-[#bcff48] border border-[#bcff48]/30 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="section-title text-xl font-bold text-white mb-2">
                  ¡Solicitud Recibida!
                </h4>
                <p className="section-copy text-xs sm:text-sm text-[#f7f7f2]/80 mb-6 leading-relaxed">
                  Uno de nuestros especialistas dedicados revisará la reputación de tu marca y te contactará en menos de 15 minutos para diseñar tu plan personalizado.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSpecialistSuccess(false);
                    setSpecialistModalOpen(false);
                  }}
                  className="section-copy w-full min-h-[48px] py-3 rounded-full bg-[#bcff48] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#a9eb38] transition-all active:scale-98"
                >
                  Entendido
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSpecialistSuccess(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="specialist-name" className="block section-copy text-xs font-semibold text-[#f7f7f2]/80 mb-1.5">
                    Tu nombre o nombre del responsable <span className="text-[#bcff48]">*</span>
                  </label>
                  <input
                    id="specialist-name"
                    name="name"
                    type="text"
                    required
                    aria-required="true"
                    autoComplete="name"
                    value={specialistForm.name}
                    onChange={(e) => setSpecialistForm({ ...specialistForm, name: e.target.value })}
                    placeholder="Ej. Roberto Sánchez"
                    className="w-full min-h-[46px] px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/15 text-white text-base sm:text-xs placeholder:text-white/30 focus:border-[#bcff48] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="specialist-business" className="block section-copy text-xs font-semibold text-[#f7f7f2]/80 mb-1.5">
                      Nombre de la empresa o marca <span className="text-[#bcff48]">*</span>
                    </label>
                    <input
                      id="specialist-business"
                      name="organization"
                      type="text"
                      required
                      aria-required="true"
                      autoComplete="organization"
                      value={specialistForm.business}
                      onChange={(e) => setSpecialistForm({ ...specialistForm, business: e.target.value })}
                      placeholder="Ej. Mi Negocio SL"
                      className="w-full min-h-[46px] px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/15 text-white text-base sm:text-xs placeholder:text-white/30 focus:border-[#bcff48] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="specialist-phone" className="block section-copy text-xs font-semibold text-[#f7f7f2]/80 mb-1.5">
                      Teléfono o WhatsApp <span className="text-[#bcff48]">*</span>
                    </label>
                    <input
                      id="specialist-phone"
                      name="tel"
                      type="tel"
                      required
                      aria-required="true"
                      autoComplete="tel"
                      value={specialistForm.phone}
                      onChange={(e) => setSpecialistForm({ ...specialistForm, phone: e.target.value })}
                      placeholder="+34 600 000 000"
                      className="w-full min-h-[46px] px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/15 text-white text-base sm:text-xs placeholder:text-white/30 focus:border-[#bcff48] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="specialist-platform" className="block section-copy text-xs font-semibold text-[#f7f7f2]/80 mb-1.5">
                    Plataforma prioritaria
                  </label>
                  <select
                    id="specialist-platform"
                    name="platform"
                    value={specialistForm.platform}
                    onChange={(e) => setSpecialistForm({ ...specialistForm, platform: e.target.value })}
                    className="w-full min-h-[46px] px-3.5 py-2.5 rounded-lg bg-[#1a1a1a] border border-white/15 text-white text-base sm:text-xs focus:border-[#bcff48] focus:outline-none"
                  >
                    <option value="Google Reviews">Google Reviews (Google Maps & Search)</option>
                    <option value="Trustpilot">Trustpilot (TrustScore & Tiendas)</option>
                    <option value="TripAdvisor">TripAdvisor (Restaurantes y Hoteles)</option>
                    <option value="Facebook">Facebook (Recomendaciones Fan Page)</option>
                    <option value="Eliminación">Eliminación de Reseñas Negativas</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="specialist-notes" className="block section-copy text-xs font-semibold text-[#f7f7f2]/80 mb-1.5">
                    ¿Cuál es tu objetivo o situación actual? (Opcional)
                  </label>
                  <textarea
                    id="specialist-notes"
                    name="notes"
                    rows={2}
                    value={specialistForm.notes}
                    onChange={(e) => setSpecialistForm({ ...specialistForm, notes: e.target.value })}
                    placeholder="Ej. Queremos subir a 4.9 estrellas y eliminar 2 reseñas injustas..."
                    className="w-full px-3.5 py-2 rounded-lg bg-black/50 border border-white/15 text-white text-base sm:text-xs placeholder:text-white/30 focus:border-[#bcff48] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="section-copy w-full min-h-[48px] py-3.5 rounded-full bg-[#bcff48] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#a9eb38] transition-all flex items-center justify-center gap-2 shadow-lg active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Solicitar Asesoría Inmediata</span>
                </button>

                <p className="section-copy text-[10px] text-center text-[#f7f7f2]/50">
                  🔒 Tus datos están protegidos. Asesoramiento 100% confidencial y sin compromiso.
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* BARRA DE ACCIÓN FLOTANTE PARA MÓVILES (THUMB-FIRST CON SOPORTE DE SAFE AREAS) */}
      {scrollProgress > 0.15 && !mobileMenuOpen && !selectedCatalogPlatform && !specialistModalOpen && (
        <div className="fixed bottom-0 inset-x-0 z-40 p-3 pb-[max(0.85rem,env(safe-area-inset-bottom))] bg-black/90 backdrop-blur-xl border-t border-white/15 lg:hidden flex items-center gap-3 animate-hero-entrance shadow-[0_-10px_25px_rgba(0,0,0,0.8)]">
          <button
            type="button"
            onClick={() => setSelectedCatalogPlatform('Google Reviews')}
            className="section-copy flex-1 min-h-[46px] py-3 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 text-center active:scale-95 transition-transform flex items-center justify-center gap-1.5"
          >
            <span>Ver Planes</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#bcff48]" />
          </button>
          <button
            type="button"
            onClick={() => setSpecialistModalOpen(true)}
            className="section-copy flex-1 min-h-[46px] py-3 px-3 rounded-xl bg-[#bcff48] text-black font-extrabold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(188,255,72,0.35)] text-center flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Especialista</span>
          </button>
        </div>
      )}
    </div>
  );
}
