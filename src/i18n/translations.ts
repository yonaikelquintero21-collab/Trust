export type Language = 'es' | 'en';

export interface PlanData {
  id: string;
  name: string;
  reviewsCount: string;
  price: string;
  originalPrice: string;
  popular?: boolean;
  delivery: string;
  features: string[];
}

export interface PlatformCatalogData {
  platform: string;
  projectCode: string;
  badge: string;
  headline: string;
  description: string;
  accentColor: string;
  accentBg: string;
  image?: string;
  alt?: string;
  sampleReview: {
    author: string;
    badge: string;
    time: string;
    text: string;
    score: string;
    count: string;
    title: string;
    subBadge: string;
  };
  plans: PlanData[];
}

export interface PhoneNotificationData {
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

export interface ProjectCardData {
  id: string;
  title: string;
  subtitle: string;
  platform: string;
  metric: string;
  tag: string;
  rating: string;
  reviewsCount: string;
  startingPrice: string;
  features: string[];
  accentColor: string;
  image: string;
  alt: string;
  description: string;
}

export interface FaqItemData {
  id: string;
  category: string;
  question: string;
  highlight?: string;
  shortSnippet: string;
  answer: string[];
  keyPoints?: string[];
  badgeColor: string;
}

export interface TestimonialData {
  quote: string;
  text: string;
  author: string;
  role: string;
  stats: {
    stat1: { value: string; label: string };
    stat2: { value: string; label: string };
    stat3: { value: string; label: string };
  };
}

export interface TranslationsSchema {
  nav: {
    services: string;
    strategy: string;
    about: string;
    differentials: string;
    process: string;
    guarantee: string;
    faq: string;
    contact: string;
    openCatalogBtn: string;
    brandTagline: string;
    ariaOpenMenu: string;
    ariaCloseMenu: string;
    quickBarHint: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ariaNextSection: string;
  };
  services: {
    badge: string;
    hint: string;
    heading: string;
    description: string;
    projects: ProjectCardData[];
    cardAction: string;
    cardOpen: string;
  };
  catalogs: Record<string, PlatformCatalogData>;
  strategy: {
    badge: string;
    heading: string;
    card1: {
      tag: string;
      title: string;
      desc: string;
      items: string[];
      statLabel: string;
      statValue: string;
    };
    card2: {
      tag: string;
      title: string;
      desc: string;
      items: string[];
      statLabel: string;
      statValue: string;
    };
    card3: {
      tag: string;
      title: string;
      desc: string;
      items: string[];
      statLabel: string;
      statValue: string;
    };
    ctaBox: {
      title: string;
      guarantee: string;
      btn: string;
    };
  };
  about: {
    badge: string;
    heading: string;
    officialBadge: string;
    title: string;
    p1: string;
    p2: string;
    stats: {
      s1Value: string;
      s1Label: string;
      s2Value: string;
      s2Label: string;
      s3Value: string;
      s3Label: string;
      s4Value: string;
      s4Label: string;
    };
    pillars: {
      p1Title: string;
      p1Desc: string;
      p2Title: string;
      p2Desc: string;
      p3Title: string;
      p3Desc: string;
    };
    phone: {
      time: string;
      realtimeFeed: string;
      shielded: string;
      trustScoreTitle: string;
      trustScoreBadge: string;
      trustScoreReviews: string;
      trustScoreLtv: string;
      pause: string;
      play: string;
      categories: {
        trustpilot: string;
        google: string;
        tripadvisor: string;
        facebook: string;
      };
      island: {
        trustpilotTitle: string;
        trustpilotBadge: string;
        googleTitle: string;
        googleBadge: string;
        tripadvisorTitle: string;
        tripadvisorBadge: string;
        facebookTitle: string;
        facebookBadge: string;
      };
      notifications: PhoneNotificationData[];
    };
    rightCol: {
      tag: string;
      title: string;
      p1: string;
      highlightBox1Title: string;
      highlightBox1Desc: string;
      highlightBox2P1: string;
      highlightBox2P2: string;
      highlightBox2Emp: string;
      ctaTitle: string;
      ctaDesc: string;
      btnSpecialist: string;
      btnCatalog: string;
      badges: {
        b1: string;
        b2: string;
        b3: string;
      };
    };
  };
  differentials: {
    badge: string;
    title: string;
    intro: string;
    introEmp: string;
    introEnd: string;
    items: {
      i1Title: string;
      i1Desc: string;
      i2Title: string;
      i2Desc: string;
      i3Title: string;
      i3Desc: string;
    };
    btnAudit: string;
    auditNote: string;
    rightCol: {
      badge: string;
      title: string;
      successRate: string;
      threatBadge: string;
      threats: {
        t1Title: string;
        t1Desc: string;
        t2Title: string;
        t2Desc: string;
        t3Title: string;
        t3Desc: string;
        t4Title: string;
        t4Desc: string;
        t5Title: string;
        t5Desc: string;
        t6Title: string;
        t6Desc: string;
      };
      footerTitle: string;
      footerDesc: string;
      footerLink: string;
    };
  };
  process: {
    metrics: {
      m1Val: string;
      m1Desc: string;
      m2Val: string;
      m2Desc: string;
      m3Val: string;
      m3Desc: string;
    };
    illustration: {
      activeProcess: string;
      activeCampaign: string;
      dailyReviews: string;
    };
    badge: string;
    title: string;
    intro: string;
    steps: {
      s1Stage: string;
      s1Title: string;
      s1Desc: string;
      s2Stage: string;
      s2Title: string;
      s2Desc: string;
      s3Stage: string;
      s3Title: string;
      s3Desc: string;
      s4Stage: string;
      s4Title: string;
      s4Desc: string;
    };
    btnStart: string;
    trackingNote: string;
  };
  guarantee: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    seals: {
      s1: string;
      s2: string;
      s3: string;
    };
    verified: string;
    starRating: string;
    testimonials: {
      villervalla: TestimonialData;
      peaches: TestimonialData;
      honestpaws: TestimonialData;
    };
    bottomBanner: {
      title: string;
      desc: string;
      btn: string;
    };
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    context: string;
    searchPlaceholder: string;
    expandAll: string;
    collapseAll: string;
    categoryAll: string;
    noResults: string;
    resetFilters: string;
    keyPointsTitle: string;
    items: FaqItemData[];
    banner: {
      title: string;
      desc: string;
      btn: string;
    };
    trustBadges: {
      b1: string;
      b2: string;
      b3: string;
    };
  };
  contact: {
    badge: string;
    title: string;
    desc: string;
    btnSpecialist: string;
    btnCatalog: string;
    copyright: string;
    backToTop: string;
    support247: string;
  };
  catalogModal: {
    title: string;
    closeAria: string;
    viewOther: string;
    popularBadge: string;
    oneTimePay: string;
    choosePlan: string;
    footerSafe: string;
    footerWritten: string;
  };
  planSuccessModal: {
    title: string;
    msg: (plan: string, platform: string, price: string) => string;
    subMsg: string;
    confirmBtn: string;
    backBtn: string;
  };
  specialistModal: {
    badge: string;
    title: string;
    closeAria: string;
    successTitle: string;
    successMsg: string;
    successBtn: string;
    labels: {
      name: string;
      namePlaceholder: string;
      business: string;
      businessPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      platform: string;
      platformOptions: {
        google: string;
        trustpilot: string;
        tripadvisor: string;
        facebook: string;
        removal: string;
      };
      notes: string;
      notesPlaceholder: string;
      submitBtn: string;
      privacyNote: string;
    };
  };
  mobileStickyBar: {
    viewPlans: string;
    specialist: string;
  };
  telegram: {
    tooltip: string;
    badgeOnline: string;
    ariaLabel: string;
  };
}

export const translations: Record<Language, TranslationsSchema> = {
  es: {
    nav: {
      services: 'Servicios',
      strategy: 'Estrategia',
      about: 'Nosotros',
      differentials: 'Diferenciales',
      process: 'Proceso',
      guarantee: 'Garantía',
      faq: 'FAQ',
      contact: 'Contacto',
      openCatalogBtn: 'Ver Catálogos y Tarifas',
      brandTagline: 'TrustUpReviews™ · Autoridad en Reputación Online',
      ariaOpenMenu: 'Abrir menú de navegación',
      ariaCloseMenu: 'Cerrar menú',
      quickBarHint: 'Acceso rápido',
    },
    hero: {
      badge: '★ TRUST REVIEWS',
      title: 'TRUST REVIEWS',
      subtitle: 'Gestión de reputación online, publicación estratégica y eliminación de reseñas negativas.',
      ariaNextSection: 'Ir a la siguiente sección',
    },
    services: {
      badge: 'Servicios Verificados & Catálogos 2026',
      hint: 'Toca cualquier catálogo para ver planes detallados y tarifas',
      heading: 'Servicios disponibles.',
      description: 'Catálogos especializados con reseñas auténticas y geolocalizadas para blindar y catapultar la reputación de tu marca en las principales plataformas mundiales.',
      cardAction: 'Ver catálogo y tarifas',
      cardOpen: 'Abrir',
      projects: [
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
        },
      ],
    },
    catalogs: {
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
        sampleReview: {
          author: 'David Ramos',
          badge: '★ Local Guide Nivel 6',
          time: 'Hace 3 días',
          text: '"Servicio extraordinario y atención de 10. Resolvieron todo rápido con la mayor profesionalidad. ¡Súper recomendados!"',
          score: '5.0',
          count: '(1.420 reseñas)',
          title: 'Calificación 5 Estrellas en Google',
          subBadge: 'Ficha Verificada',
        },
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
        sampleReview: {
          author: 'Elena Gil',
          badge: 'Compra Verificada',
          time: 'Hace 1 día',
          text: '"Totalmente recomendable. El envío llegó en menos de 24 horas y la calidad superó mis expectativas. 100% de confianza."',
          score: '4.9',
          count: '(2.850 opiniones)',
          title: 'Insignia Oficial de Confianza',
          subBadge: 'Excelente 4.9',
        },
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
        accentColor: '#34e0a1',
        accentBg: 'bg-[#34e0a1]/10 border-[#34e0a1]/30',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
        alt: 'Restaurante de alta gastronomía con ambiente cálido galardonado en TripAdvisor',
        sampleReview: {
          author: 'Marc & Sophie',
          badge: 'Viajeros Frecuentes de París',
          time: 'Hace 5 días',
          text: '"Una experiencia inolvidable. Atención impecable, comida exquisita y vistas inigualables. Volveremos siempre que visitemos la ciudad."',
          score: '5.0',
          count: '(940 opiniones)',
          title: 'Certificado Travellers\' Choice 2026',
          subBadge: 'N.º 1 en la Ciudad',
        },
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
        accentColor: '#1877f2',
        accentBg: 'bg-[#1877f2]/10 border-[#1877f2]/30',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
        alt: 'Comunidad de clientes satisfechos compartiendo recomendaciones en Facebook',
        sampleReview: {
          author: 'Patricia Morales',
          badge: 'Recomienda este negocio',
          time: 'Hace 2 días',
          text: '"Respuesta inmediata por Messenger y una atención súper cercana. Resolvieron todas mis dudas al instante. ¡Totalmente recomendados!"',
          score: '100% 👍',
          count: '(840 votos)',
          title: '98% de Recomendación Comunitaria',
          subBadge: 'Página Oficial Verificada',
        },
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
    },
    strategy: {
      badge: 'Estrategia de Reputación Integral',
      heading: 'Control y crecimiento de tu reputación.',
      card1: {
        tag: 'Defensa Legal & Supresión',
        title: 'Eliminación de revisión',
        desc: 'Gestión experta y desindexación legal de valoraciones falsas, dañinas o difamatorias en Google Maps, Trustpilot, TripAdvisor y Facebook. Aplicamos el marco normativo de cada plataforma para remover opiniones injustas que dañan la facturación y prestigio de tu empresa.',
        items: [
          'Eliminación de ataques de 1 estrella sin compra real',
          'Apelación directa y resolución ante los equipos de soporte',
          'Blindaje continuo contra difamación de competidores',
        ],
        statLabel: 'Tasa de éxito',
        statValue: '★ 94% Resoluciones favorables',
      },
      card2: {
        tag: 'Autoridad & Prestigio 5★',
        title: 'Mejorar la credibilidad de la marca',
        desc: 'Transformamos la percepción pública de tu negocio creando un flujo constante de testimonios 5 estrellas con perfiles verificados y geolocalizados. La confianza visual inmediata impulsa la tasa de conversión y sitúa tu marca como líder indiscutible en su sector.',
        items: [
          'Insignias de excelencia y puntuaciones medias de 4.8 a 5.0★',
          'Textos estratégicos con palabras clave de alto impacto',
          'Incremento directo en clics, llamadas y pedidos',
        ],
        statLabel: 'Impacto en conversión',
        statValue: '★ +38% Cierre de ventas',
      },
      card3: {
        tag: 'Fidelización & Captación Continua',
        title: 'Captación y blindaje continuo',
        desc: 'Automatización inteligente para captar valoraciones positivas en el punto de venta mediante tarjetas NFC y códigos QR. Integra un filtro previo anti-quejas que redirige cualquier insatisfacción de forma privada a tu equipo antes de que llegue a internet.',
        items: [
          'Dispositivos NFC físicos y links inteligentes de reseña',
          'Filtro previo que neutraliza valoraciones negativas',
          'Monitorización de reputación y alertas en tiempo real',
        ],
        statLabel: 'Sistema',
        statValue: '100% Automatizado',
      },
      ctaBox: {
        title: 'Aumente la credibilidad de la marca hoy',
        guarantee: 'Garantía de devolución del dinero del 100%.',
        btn: 'Ver servicios',
      },
    },
    about: {
      badge: 'Sobre Nosotros & Liderazgo Global',
      heading: 'Liderazgo global en reputación digital.',
      officialBadge: 'TrustUpReviews™ Oficial',
      title: '¿Quién es TrustUpReviews?',
      p1: 'TrustUpReviews™ es la marca líder número uno que impulsa el servicio de reseñas para todos los propietarios de marcas de comercio electrónico y negocios locales. Con más de 8 años de experiencia en este panorama, hemos adaptado nuestras soluciones de reseñas para satisfacer el cambiante panorama del comercio electrónico y los negocios, impulsados por clientes positivos en línea.',
      p2: 'Con presencia mundial en APAC, Europa y América, brindamos soluciones personalizadas para individuos y empresas de todo el mundo, garantizando una protección integral y el máximo crecimiento de autoridad para tu marca.',
      stats: {
        s1Value: '+100K',
        s1Label: 'Empresas impulsadas',
        s2Value: '+8 Años',
        s2Label: 'Liderazgo global',
        s3Value: '99.4%',
        s3Label: 'Satisfacción cliente',
        s4Value: '24/7',
        s4Label: 'Monitorización VIP',
      },
      pillars: {
        p1Title: 'Fuerte presencia global',
        p1Desc: 'Ayudamos a más de 100.000+ empresas en todo el mundo a aumentar la confianza en su marca con resultados probados y medibles.',
        p2Title: 'Soluciones innovadoras',
        p2Desc: 'Estrategias avanzadas y tecnología propietaria que se adaptan permanentemente al cambiante panorama empresarial y algorítmico.',
        p3Title: 'Garantía por escrito',
        p3Desc: 'Entrega orgánica, perfiles 100% verificados y reposición asegurada para blindar la reputación de tu negocio sin riesgos.',
      },
      phone: {
        time: '09:41',
        realtimeFeed: 'Feed en Tiempo Real',
        shielded: '100% Blindado',
        trustScoreTitle: 'TrustScore Trustpilot',
        trustScoreBadge: 'Excelente 4.9',
        trustScoreReviews: '2.850 opiniones verificadas',
        trustScoreLtv: '+10x LTV Activo',
        pause: 'Pausar',
        play: 'Animar',
        categories: {
          trustpilot: 'Trustpilot',
          google: 'Google',
          tripadvisor: 'TripAdvisor',
          facebook: 'Facebook',
        },
        island: {
          trustpilotTitle: 'Trustpilot 4.9',
          trustpilotBadge: 'Excelente',
          googleTitle: 'Google Reviews',
          googleBadge: '5.0 ★',
          tripadvisorTitle: 'TripAdvisor',
          tripadvisorBadge: 'Nº 1 Top',
          facebookTitle: 'Facebook Reviews',
          facebookBadge: '100% Recomienda',
        },
        notifications: [
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
        ],
      },
      rightCol: {
        tag: 'Aceleración de Negocios · 10x LTV',
        title: '¡Toma el control de tu reputación online hoy mismo!',
        p1: 'Con nuestros servicios de publicación de reseñas de expertos y estrategias comprobadas para generar reseñas positivas y auténticas, puede concentrarse en lo que más importa —hacer crecer su negocio.',
        highlightBox1Title: '¡Es fácil duplicar tus ventas!',
        highlightBox1Desc: 'Cuando tienes a otras personas en línea que te ayudan a realizar la venta',
        highlightBox2P1: 'Las reseñas positivas pueden tener un impacto significativo en su negocio, aumentando la confianza del cliente y el valor de vida útil (LTV) hasta 10 veces. No dejes que los comentarios negativos te detengan.',
        highlightBox2P2: 'Le ayudamos a mostrar las fortalezas de su marca reemplazando la negatividad con críticas genuinas y entusiastas—, ',
        highlightBox2Emp: 'todo manejado a la perfección para usted.',
        ctaTitle: '¿Listo para elevar tu reputación?',
        ctaDesc: 'Comuníquese con nuestros especialistas hoy y uno de los miembros dedicados de nuestro equipo lo ayudará de inmediato.',
        btnSpecialist: 'Hablar con un especialista',
        btnCatalog: 'Ver catálogo de precios',
        badges: {
          b1: 'Respuesta en menos de 15 minutos',
          b2: 'Garantía de satisfacción 100%',
          b3: '+100.000 marcas asesoradas',
        },
      },
    },
    differentials: {
      badge: 'VENTAJA EXCLUSIVA · TRUSTUPREVIEWS™',
      title: 'En qué somos diferentes',
      intro: 'TrustUpReviews™',
      introEmp: ' es la autoridad líder en gestión de reputación. ',
      introEnd: 'Tenemos un enfoque único que combina la eliminación de reseñas negativas y la gestión de la reputación en una solución eficaz. Nuestros especialistas y software pueden ayudarle a eliminar lo siguiente:',
      items: {
        i1Title: 'Eliminación Permanente y Legal',
        i1Desc: 'Sin prácticas inseguras. Tramitamos solicitudes oficiales basadas en normativas legales y términos de cada plataforma.',
        i2Title: 'Software Propietario con Detección IA',
        i2Desc: 'Identifica en minutos patrones de ataque, bots, lenguaje inapropiado y cuentas fraudulentas.',
        i3Title: 'Garantía 100% de Devolución',
        i3Desc: 'Su inversión está totalmente protegida. Si el caso no se resuelve favorablemente, reembolsamos el 100%.',
      },
      btnAudit: 'Auditar mi caso con un especialista',
      auditNote: 'Diagnóstico inicial confidencial y respuesta en < 15 min',
      rightCol: {
        badge: 'COBERTURA DE ELIMINACIÓN Y GESTIÓN',
        title: 'Lo que eliminamos para proteger tu negocio',
        successRate: '94.8% Éxito Comprobado',
        threatBadge: 'Eliminable',
        threats: {
          t1Title: 'Reseñas falsas de competidores',
          t1Desc: 'Ataques sucios y campañas orquestadas por perfiles falsos que nunca fueron clientes de su negocio.',
          t2Title: 'Calificaciones de 1★ sin comentario',
          t2Desc: 'Puntuaciones vacías sin texto explicativo ni evidencia de servicio que hunden su calificación promedio.',
          t3Title: 'Difamación y lenguaje ofensivo',
          t3Desc: 'Reseñas que violan términos oficiales, incluyen insultos, acusaciones falsas o amenazas comerciales.',
          t4Title: 'Ataques de bots masivos y spam',
          t4Desc: 'Bombardeo coordinado de valoraciones artificiales generadas por software malicioso de terceros.',
          t5Title: 'Reseñas de ex-empleados o conflictos',
          t5Desc: 'Disputas internas o personales que no corresponden a experiencias de clientes genuinos.',
          t6Title: 'Quejas resueltas o malentendidos',
          t6Desc: 'Problemas ya resueltos con el cliente que siguen afectando injustamente la conversión de ventas.',
        },
        footerTitle: 'Eliminación sin penalización para su perfil',
        footerDesc: 'Garantizamos la seguridad total de su ficha en Google, Trustpilot, TripAdvisor y Facebook.',
        footerLink: 'Consultar mi caso',
      },
    },
    process: {
      metrics: {
        m1Val: '60%',
        m1Desc: 'Los especialistas en marketing B2B afirmaron que el SEO y el tráfico orgánico generan más leads que cualquier otra iniciativa de marketing.',
        m2Val: '85%',
        m2Desc: 'de personas que realizan algún tipo de investigación en línea antes de contactar a un negocio para realizar una compra.',
        m3Val: '76%',
        m3Desc: 'de los consumidores confían tanto en las reseñas en línea como en las recomendaciones personales.',
      },
      illustration: {
        activeProcess: 'PROCESO ACTIVO',
        activeCampaign: 'CAMPAÑA ACTIVA 24/7',
        dailyReviews: '+3 a 50 RESEÑAS / DÍA',
      },
      badge: 'Review Process Illustration',
      title: 'Nuestra publicación de reseñas y el impulso de la marca Proceso',
      intro: 'Cada campaña de gestión de revisiones ofrece sus propios desafíos y oportunidades únicos. Aunque las tácticas variarán según las necesidades específicas de cada cliente, nuestro proceso de establecimiento de objetivos, puntos de control y las expectativas nunca cambian. Al trabajar con nosotros, siempre puede esperar una transparencia total, asesoramiento experto y comunicación rápida.',
      steps: {
        s1Stage: 'ETAPA 01',
        s1Title: 'Descubrimiento',
        s1Desc: 'Examinamos su presencia en línea para determinar tus necesidades, objetivos, y el contenido que desea que eliminemos o desplacemos.',
        s2Stage: 'ETAPA 02',
        s2Title: 'Medir, analizar y priorizar',
        s2Desc: 'Nuestros estrategas determinan qué tácticas o curso de acción es el más efectivo para publicar el contenido positivo.',
        s3Stage: 'ETAPA 03',
        s3Title: 'Diseño y lanzamiento de campaña de publicación',
        s3Desc: 'Nuestro equipo de expertos toma medidas usando varias conexiones internas a negocios, opciones legales, estrategias de SEO, software o una combinación de múltiples facetas.',
        s4Stage: 'ETAPA 04',
        s4Title: 'Obtenga miles de reseñas positivas Mensual / Seguimiento del progreso',
        s4Desc: 'Generamos un flujo continuo de reseñas verificadas, enviamos informes mensuales transparentes y protegemos su calificación de por vida.',
      },
      btnStart: 'Iniciar mi campaña ahora',
      trackingNote: 'Rastreo en tiempo real · Google Sheets',
    },
    guarantee: {
      badge: '100% GARANTÍA DE SATISFACCIÓN O REEMBOLSO',
      title: 'La garantía de confianza',
      p1: 'Ofrecemos una garantía de devolución del dinero del 100% en Reseñas de TrustUp',
      p2: 'En casos excepcionales en los que no vea los resultados esperados, le ofreceremos un reembolso de su dinero. No preguntas formuladas.',
      seals: {
        s1: 'Garantía Contractual',
        s2: 'Cero Preguntas Formuladas',
        s3: 'Protección 100% Sin Riesgo',
      },
      verified: 'Verificado',
      starRating: '5 star rating',
      testimonials: {
        villervalla: {
          quote: '"Excelente servicio. ¡Lo usaré de nuevo!"',
          text: 'Al principio nos enfrentamos a críticas ilegítimas, buscamos TrustUpReviews\' ayuda, lo que resultó en la eliminación de más de 1000+ reseñas y la adición de más de 150 reseñas mensualmente. Esto permitió que nuestros propietarios de franquicias deben centrarse en los aspectos principales y al mismo tiempo ahorrarnos aproximadamente 28.000 minutos en conjunto.',
          author: 'Hanna Håkansson',
          role: 'Directora ejecutiva, Viller Valla',
          stats: {
            stat1: { value: '-1,000+', label: 'Eliminadas' },
            stat2: { value: '+150/mes', label: 'Nuevas' },
            stat3: { value: '28,000 m', label: 'Ahorrados' },
          },
        },
        peaches: {
          quote: '"Una verdadera extensión de nuestro equipo..."',
          text: '"TrustUpReviews publicó más de 391 nuevas reseñas positivas y elevó nuestra calificación de marca a 4,8 al tiempo que aumentó nuestra tasa de conversión en un 15%. Sus resultados hablan por sí solos, pero son una verdadera extensión de nuestro equipo”',
          author: 'Lindsay Eccleston',
          role: 'Directora de Comercio Electrónico, Peaches',
          stats: {
            stat1: { value: '+391', label: 'Reseñas' },
            stat2: { value: '4.8 ⭐', label: 'Calificación' },
            stat3: { value: '+15%', label: 'Conversión' },
          },
        },
        honestpaws: {
          quote: '"Lo recomendaría a cualquier otro comercio electrónico ¡propietarios!"',
          text: 'Nuestro equipo está muy contento de tener 600+ reseñas publicadas en nuestro sitios, lo cual es fantástico. Tenemos una de las calificaciones de tp más altas en Pet Niche en EE. UU. Le debemos eso para TrustUpReviews. Están muy atentos a nuestras necesidades y respaldaron el crecimiento de la satisfacción con nuestras revisiones 2022-> 2025. Simplemente los amamos. A menudo, las personas son proveedores; no queremos proveedores; queremos socios. TrustUpReviews es un socio número uno.',
          author: 'Marko Skulic',
          role: 'Director de adquisiciones remuneradas, Honest Paws',
          stats: {
            stat1: { value: '600+', label: 'Publicadas' },
            stat2: { value: 'Top #1', label: 'Pet Niche US' },
            stat3: { value: 'Partner', label: '2022-2025' },
          },
        },
      },
      bottomBanner: {
        title: 'Garantía incondicional respaldada por contrato',
        desc: 'Si no logramos la meta pactada para tu marca, te reembolsamos el 100% de tu dinero inmediatamente.',
        btn: 'Hablar con un especialista',
      },
    },
    faq: {
      badge: 'CENTRO DE CONOCIMIENTO & RESPUESTAS CLAVE',
      title: 'Preguntas frecuentes',
      subtitle: 'Importancia de las reseñas de Trustpilot',
      context: 'Descubra cómo las reseñas de Trustpilot determinan el éxito comercial de su marca, cómo protegemos su cuenta con perfiles reales y cómo funciona nuestra garantía total de resultados.',
      searchPlaceholder: 'Buscar una duda o término...',
      expandAll: 'Expandir todas',
      collapseAll: 'Colapsar todas',
      categoryAll: 'Todas',
      noResults: 'No se encontraron preguntas que coincidan con su búsqueda.',
      resetFilters: 'Restablecer filtros',
      keyPointsTitle: 'Aspectos clave garantizados:',
      items: [
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
            'Un perfil con abundantes reseñas de 5 estrellas posiciona a su marca como un referente líder en su nicho, haciendo que sus clientes potenciales lo elijan a usted por encima de competidores sin reputación visible.',
          ],
          keyPoints: [
            'Aumento comprobado del 15% al 35% en tasas de conversión web.',
            'Reducción sustancial del costo de adquisición por cliente (CAC).',
            'Validación social inmediata para nuevos lanzamientos o marcas en crecimiento.',
          ],
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
            'Este método garantiza que los algoritmos de verificación de Trustpilot registren la actividad como 100% natural y legítima, manteniendo la integridad total de su cuenta.',
          ],
          keyPoints: [
            'Sin bots, sin scripts automatizados ni cuentas masivas sospechosas.',
            'Publicación espaciada y progresiva (drip-feed) para emular tráfico orgánico.',
            'Monitoreo activo de retención y perfiles de alta longevidad.',
          ],
        },
        {
          id: 'eliminar-resenas-negativas',
          category: 'Gestión de Crisis',
          question: '¿Puedes eliminar reseñas negativas en línea?',
          highlight: 'Supresión Legal y Técnica',
          shortSnippet: 'Sí, eliminamos reseñas ilegítimas, difamatorias o de competidores, y desplazamos el impacto de comentarios dañinos.',
          badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
          answer: [
            'Sí, es una de nuestras principales especialidades. En TrustUpReviews™ contamos con un equipo legal y técnico especializado en la impugnación y eliminación de reseñas que infringen las políticas de la plataforma, difamaciones, ataques de competidores o quejas sin sustento comercial.',
            'Analizamos minuciosamente cada reseña negativa para identificar infracciones directas a los términos de servicio de Trustpilot y gestionar su despublicación formal.',
            'En situaciones donde la reseña no pueda retirarse de inmediato por vías administrativas, aplicamos un protocolo de dilución y desplazamiento orgánico mediante un flujo constante de reseñas positivas de 5 estrellas, reduciendo la visibilidad y el peso estadístico del comentario negativo a niveles insignificantes.',
          ],
          keyPoints: [
            'Auditoría y peritaje de comentarios malintencionados o de competidores.',
            'Proceso de apelación formal fundamentado en las directrices de la plataforma.',
            'Estrategia de compensación y dilución de TrustScore garantizada.',
          ],
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
            'Además, ofrecemos una garantía incondicional de devolución del dinero del 100%, gerentes de cuenta dedicados y testimonios auditados de marcas internacionales de prestigio como Villervalla, Peaches y Honest Paws.',
          ],
          keyPoints: [
            'Control total con seguimiento en vivo en Google Sheets.',
            'Atención personalizada por especialistas senior en reputación.',
            'Garantía incondicional de satisfacción y reposición por 6 meses.',
          ],
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
            'Un consumidor moderno compara entre 3 y 5 marcas antes de comprar. Si su negocio tiene 4.8 estrellas con cientos de opiniones positivas mientras el rival tiene 3.5 o no tiene reseñas, la decisión de compra se toma en segundos a su favor.',
          ],
          keyPoints: [
            'Indexación de Rich Snippets de estrellas doradas en Google.',
            'Incremento de hasta un 270% en la probabilidad de compra para productos con reseñas.',
            'Mayor confianza para transacciones de alto valor o compras con tarjeta.',
          ],
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
            'El secreto más efectivo utilizado por las grandes marcas es el modelo híbrido: alimentar continuamente su perfil con el impulso estratégico de TrustUpReviews™ para neutralizar el sesgo natural donde solo los usuarios insatisfechos suelen tomar la iniciativa de escribir sin estímulo.',
          ],
          keyPoints: [
            'Automatización de disparadores de correo electrónico tras la entrega.',
            'Filtrado inteligente de soporte antes de reseñas públicas.',
            'Refuerzo continuo para vencer el sesgo de queja espontánea.',
          ],
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
            'Además, actualizamos y optimizamos los títulos de las reseñas para que aborden los aspectos clave de confianza que sus clientes potenciales buscan: envíos rápidos, autenticidad, calidad y soporte sobresaliente.',
          ],
          keyPoints: [
            'Cálculo algorítmico exacto del volumen requerido para su meta.',
            'Optimización de palabras clave orientadas a compra dentro de las reseñas.',
            'Resultados visibles semana a semana con reporte de evolución en tiempo real.',
          ],
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
            'Usted no asume ningún riesgo al asociarse con TrustUpReviews™. Su inversión y su reputación están completamente blindadas por contrato de servicio.',
          ],
          keyPoints: [
            'Reembolso del 100% en casos excepcionales de no cumplimiento.',
            'Reposición gratuita garantizada durante 6 meses completos.',
            'Cero riesgos contractuales y máxima transparencia operativa.',
          ],
        },
      ],
      banner: {
        title: '¿Tiene alguna pregunta específica sobre su marca o sector?',
        desc: 'Nuestros estrategas senior analizan su perfil de Trustpilot de forma confidencial y diseñan una propuesta de reseñas y reputación a su medida.',
        btn: 'Hablar con un Especialista',
      },
      trustBadges: {
        b1: '100% Confidencial y Conforme a GDPR',
        b2: 'Transacciones Cifradas SSL 256-bit',
        b3: 'Garantía de Reposición por 6 Meses',
      },
    },
    contact: {
      badge: 'Contacto Directo con Especialistas',
      title: '¿Listo para transformar la reputación de tu negocio?',
      desc: 'Obtén un diagnóstico gratuito y confidencial en menos de 15 minutos. Nuestro equipo de gestión y eliminación de reseñas está disponible para asistirte.',
      btnSpecialist: 'Hablar con un Especialista',
      btnCatalog: 'Ver Catálogo de Precios',
      copyright: 'TrustUpReviews™. Todos los derechos reservados.',
      backToTop: 'Volver arriba ↑',
      support247: 'Soporte 24/7',
    },
    catalogModal: {
      title: 'Catálogo de precios',
      closeAria: 'Cerrar catálogo',
      viewOther: 'Ver otra plataforma:',
      popularBadge: 'Más Popular',
      oneTimePay: 'Pago único por campaña',
      choosePlan: 'Elegir paquete',
      footerSafe: 'Entrega gradual algorítmica: 100% segura y sin riesgo de penalización.',
      footerWritten: 'Garantía de reposición total por escrito.',
    },
    planSuccessModal: {
      title: '¡Plan Seleccionado!',
      msg: (plan, platform, price) =>
        `Has seleccionado el ${plan} para ${platform} por ${price}.`,
      subMsg: 'El equipo de gestión de reputación está listo para iniciar la entrega gradual y segura de tus reseñas.',
      confirmBtn: 'Confirmar y Cerrar',
      backBtn: 'Volver a la lista de precios',
    },
    specialistModal: {
      badge: 'Atención Inmediata',
      title: 'Habla con un especialista',
      closeAria: 'Cerrar modal',
      successTitle: '¡Solicitud Recibida!',
      successMsg: 'Uno de nuestros especialistas dedicados revisará la reputación de tu marca y te contactará en menos de 15 minutos para diseñar tu plan personalizado.',
      successBtn: 'Entendido',
      labels: {
        name: 'Tu nombre o nombre del responsable',
        namePlaceholder: 'Ej. Roberto Sánchez',
        business: 'Nombre de la empresa o marca',
        businessPlaceholder: 'Ej. Mi Negocio SL',
        phone: 'Teléfono o WhatsApp',
        phonePlaceholder: '+34 600 000 000',
        platform: 'Plataforma prioritaria',
        platformOptions: {
          google: 'Google Reviews (Google Maps & Search)',
          trustpilot: 'Trustpilot (TrustScore & Tiendas)',
          tripadvisor: 'TripAdvisor (Restaurantes y Hoteles)',
          facebook: 'Facebook (Recomendaciones Fan Page)',
          removal: 'Eliminación de Reseñas Negativas',
        },
        notes: '¿Cuál es tu objetivo o situación actual? (Opcional)',
        notesPlaceholder: 'Ej. Queremos subir a 4.9 estrellas y eliminar 2 reseñas injustas...',
        submitBtn: 'Solicitar Asesoría Inmediata',
        privacyNote: '🔒 Tus datos están protegidos. Asesoramiento 100% confidencial y sin compromiso.',
      },
    },
    mobileStickyBar: {
      viewPlans: 'Ver Planes',
      specialist: 'Especialista',
    },
    telegram: {
      tooltip: '¿Hablamos por Telegram?',
      badgeOnline: 'En línea 24/7',
      ariaLabel: 'Contactar por Telegram con @SknnyZ',
    },
  },

  en: {
    nav: {
      services: 'Services',
      strategy: 'Strategy',
      about: 'About Us',
      differentials: 'Why Us',
      process: 'Process',
      guarantee: 'Guarantee',
      faq: 'FAQ',
      contact: 'Contact',
      openCatalogBtn: 'View Catalogs & Pricing',
      brandTagline: 'TrustUpReviews™ · Online Reputation Authority',
      ariaOpenMenu: 'Open navigation menu',
      ariaCloseMenu: 'Close menu',
      quickBarHint: 'Quick access',
    },
    hero: {
      badge: '★ TRUST REVIEWS',
      title: 'TRUST REVIEWS',
      subtitle: 'Online reputation management, strategic review deployment, and negative review removal.',
      ariaNextSection: 'Go to next section',
    },
    services: {
      badge: 'Verified Services & 2026 Catalogs',
      hint: 'Tap any catalog to view detailed plans and pricing',
      heading: 'Available services.',
      description: 'Specialized catalogs with authentic, geo-targeted reviews to shield and elevate your brand reputation across the world’s premier platforms.',
      cardAction: 'View catalog & pricing',
      cardOpen: 'Open',
      projects: [
        {
          id: 'google',
          title: 'Google Business & Maps',
          subtitle: 'Local Pack SEO Ranking',
          platform: 'Google Reviews',
          metric: '4.9 ★ Average Rating',
          tag: '5-Star Optimization',
          rating: '5.0★',
          reviewsCount: '1,420+ reviews',
          startingPrice: 'From $79',
          features: ['Active local profiles with verified history', 'Drip-feed organic delivery', 'Official 6-month warranty'],
          accentColor: '#ff5a42',
          image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
          alt: 'Boutique coffee shop terrace with clients checking Google Maps reviews',
          description: 'Elevate your local search visibility and drive direct calls with genuine, geo-located reviews.',
        },
        {
          id: 'trustpilot',
          title: 'TrustScore & E-commerce',
          subtitle: 'Official Trust Badge',
          platform: 'Trustpilot',
          metric: 'Excellent · TrustScore 4.8',
          tag: 'Automated Verification',
          rating: '4.9★',
          reviewsCount: '2,850+ reviews',
          startingPrice: 'From $79',
          features: ['Official green "Excellent" badge', 'Higher checkout conversion rates', 'Domain & brand protection'],
          accentColor: '#00b67a',
          image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80',
          alt: 'Secure online store checkout and verified payment experience',
          description: 'Multiply your online store or SaaS conversion by securing the green "Excellent" Trustpilot badge.',
        },
        {
          id: 'tripadvisor',
          title: 'Travellers’ Choice & Hospitality',
          subtitle: 'Top 10 in Destination & Hotels',
          platform: 'TripAdvisor',
          metric: '#1 in Popularity Index',
          tag: 'Traveler Prestige',
          rating: '5.0★',
          reviewsCount: '940+ experiences',
          startingPrice: 'From $89',
          features: ['Top 10 ranking in your city', 'Hospitality & culinary reviews', 'Continuous influx of travelers'],
          accentColor: '#34e0a1',
          image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
          alt: 'Fine dining restaurant awarded on TripAdvisor with warm ambiance',
          description: 'Attract tourists by securing top culinary and hotel recommendations in your city.',
        },
        {
          id: 'facebook',
          title: 'Recommendations & Fan Page',
          subtitle: 'Social Proof & Meta Ads',
          platform: 'Facebook',
          metric: '98% Recommended',
          tag: 'Organic Social Proof',
          rating: '100% 👍',
          reviewsCount: '840+ votes',
          startingPrice: 'From $69',
          features: ['Recommendations from real profiles', 'Direct ROAS boost on Meta Ads', 'Active brand social validation'],
          accentColor: '#1877f2',
          image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
          alt: 'Engaged community sharing positive recommendations on Facebook',
          description: 'Skyrocket social credibility and maximize performance on your Meta Ads campaigns.',
        },
      ],
    },
    catalogs: {
      'Google Reviews': {
        platform: 'Google Reviews',
        projectCode: 'Kinetic Type',
        badge: '4.9 ★ Local SEO Boost',
        headline: 'Review Catalog for Google Maps & Google Search',
        description: 'Increase your star rating with high-tier geo-localized profiles and customized review copy that drives calls and visits.',
        accentColor: '#ff5a42',
        accentBg: 'bg-[#ff5a42]/10 border-[#ff5a42]/30',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
        alt: 'Boutique cafe terrace with customers checking Google Maps reviews',
        sampleReview: {
          author: 'David Ramos',
          badge: '★ Local Guide Level 6',
          time: '3 days ago',
          text: '"Outstanding service and 10/10 support. Everything resolved quickly with top professionalism. Highly recommended!"',
          score: '5.0',
          count: '(1,420 reviews)',
          title: '5-Star Google Rating',
          subBadge: 'Verified Profile',
        },
        plans: [
          {
            id: 'google-10',
            name: 'Starter Boost Pack',
            reviewsCount: '10 Real 5★ Reviews',
            price: '$79',
            originalPrice: '$110',
            delivery: 'Delivery in 5-8 calendar days',
            features: [
              'Local profiles with active history',
              'Custom copy with strategic business keywords',
              'Drip-feed pacing for maximum naturalness',
              '6-month replacement warranty',
              'WhatsApp and email support',
            ],
          },
          {
            id: 'google-25',
            name: 'Local Growth Pack',
            reviewsCount: '25 Real 5★ Reviews',
            price: '$169',
            originalPrice: '$240',
            popular: true,
            delivery: 'Gradual delivery in 12-18 days',
            features: [
              'Level 4 to 7 Local Guide profiles',
              'Strategic product and service mentions',
              'Ascent in Google Maps Local Pack',
              'Free Google Business Profile audit',
              '12-month retention guarantee',
              'Dedicated priority support',
            ],
          },
          {
            id: 'google-50',
            name: 'Total Authority Pack',
            reviewsCount: '50 Real 5★ Reviews',
            price: '$299',
            originalPrice: '$450',
            delivery: 'Strategic delivery in 25-35 days',
            features: [
              'Includes physical NFC Google Reviews counter card',
              'Real client photos included if desired',
              'Optimized responses provided for each review',
              'Shield against competitor fake reviews',
              '12-month retention guarantee',
              'Individual account manager',
            ],
          },
          {
            id: 'google-100',
            name: 'City Dominance Pack',
            reviewsCount: '100 Real 5★ Reviews',
            price: '$549',
            originalPrice: '$820',
            delivery: 'Scheduled monthly plan (30-60 days)',
            features: [
              'Guaranteed #1 spot in your local area and niche',
              'Pack of 3 physical NFC cards + adhesive QR code',
              'Continuous reputation monitoring with alerts',
              'Automated pre-filter against negative ratings',
              'Unlimited lifetime warranty during contract',
            ],
          },
        ],
      },
      Trustpilot: {
        platform: 'Trustpilot',
        projectCode: 'New Matter',
        badge: 'TrustScore 4.8 · Excellent',
        headline: 'Verified Review Catalog for Trustpilot',
        description: 'Transform your e-commerce or SaaS trust by unlocking the green "Excellent" badge that dramatically increases sales conversion.',
        accentColor: '#bcff48',
        accentBg: 'bg-[#bcff48]/10 border-[#bcff48]/30',
        image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80',
        alt: 'Secure online store checkout and verified payment experience',
        sampleReview: {
          author: 'Elena Gil',
          badge: 'Verified Purchase',
          time: '1 day ago',
          text: '"Completely recommended. Delivery arrived in less than 24 hours and quality exceeded my expectations. 100% trustworthy."',
          score: '4.9',
          count: '(2,850 reviews)',
          title: 'Official Trust Badge',
          subBadge: 'Excellent 4.9',
        },
        plans: [
          {
            id: 'trust-10',
            name: 'Safe Start Pack',
            reviewsCount: '10 Verified Reviews',
            price: '$89',
            originalPrice: '$125',
            delivery: 'Delivery in 7-10 days',
            features: [
              'Profiles with verified review history',
              'Compelling copy written to resolve buyer objections',
              'Trustpilot algorithm approval guarantee',
              '6-month retention guarantee',
              'Direct specialist support',
            ],
          },
          {
            id: 'trust-25',
            name: 'TrustScore Pro Pack',
            reviewsCount: '25 Verified Reviews',
            price: '$199',
            originalPrice: '$280',
            popular: true,
            delivery: 'Progressive delivery in 15-20 days',
            features: [
              'Secures 4.7 to 4.9-star rating',
              'Verified buyer profiles with order/ticket proof',
              '100% natural IP and timetable distribution',
              'Company profile audit and optimization',
              '12-month retention guarantee',
            ],
          },
          {
            id: 'trust-50',
            name: 'E-commerce Scale Pack',
            reviewsCount: '50 Verified Reviews',
            price: '$369',
            originalPrice: '$520',
            delivery: 'Controlled delivery in 30-40 days',
            features: [
              '5-star green "Excellent" badge status',
              'Deep review copy highlighting fast shipping & service',
              'Pre-complaint filtering system',
              'Automated Trustpilot response strategy',
              '12-month replacement warranty',
            ],
          },
          {
            id: 'trust-100',
            name: 'Corporate Shield Pack',
            reviewsCount: '100 Verified Reviews',
            price: '$680',
            originalPrice: '$990',
            delivery: 'Scheduled quarterly campaign',
            features: [
              'Peak reputation for high-volume enterprise brands',
              'Active defense against malicious reviews',
              'Weekly monitoring with metric reports',
              '24/7 priority VIP support',
              'Full comprehensive warranty',
            ],
          },
        ],
      },
      TripAdvisor: {
        platform: 'TripAdvisor',
        projectCode: 'Signal House',
        badge: '#1 Traveler Ranking',
        headline: 'Review Catalog for Restaurants, Hotels & Tourism',
        description: 'Position your venue among the most recommended by diners and travelers, aiming for the coveted Travellers’ Choice award.',
        accentColor: '#34e0a1',
        accentBg: 'bg-[#34e0a1]/10 border-[#34e0a1]/30',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
        alt: 'Fine dining restaurant awarded on TripAdvisor with warm ambiance',
        sampleReview: {
          author: 'Marc & Sophie',
          badge: 'Frequent Travelers from Paris',
          time: '5 days ago',
          text: '"An unforgettable experience. Impeccable service, exquisite food, and unmatched views. We will return every time we visit the city."',
          score: '5.0',
          count: '(940 reviews)',
          title: 'Travellers\' Choice Certificate 2026',
          subBadge: '#1 in the City',
        },
        plans: [
          {
            id: 'trip-12',
            name: 'Local Diner Pack',
            reviewsCount: '12 Traveler Reviews',
            price: '$95',
            originalPrice: '$135',
            delivery: 'Delivery in 7-12 days',
            features: [
              'Active contributor profiles on TripAdvisor',
              'Highlighting menu specialties or amenities',
              'Immediate boost in popularity index',
              '6-month retention guarantee',
            ],
          },
          {
            id: 'trip-30',
            name: 'City Top 10 Pack',
            reviewsCount: '30 Reviews + Photos',
            price: '$219',
            originalPrice: '$310',
            popular: true,
            delivery: 'Delivery in 18-25 calendar days',
            features: [
              'Real photos of dishes, cocktails, or rooms',
              'Multilingual reviews (EN, ES, FR optional)',
              'Climbing into the top local positions',
              '12-month retention guarantee',
              'Personalized advisory support',
            ],
          },
          {
            id: 'trip-60',
            name: 'Travellers’ Choice Pack',
            reviewsCount: '60 Premium Reviews + Photos',
            price: '$399',
            originalPrice: '$580',
            delivery: 'Progressive delivery in 35-45 days',
            features: [
              'Direct strategy to earn the Travellers’ Choice award',
              'Full profile audit and cover photo optimization',
              'Frequent traveler badge profiles with HD photos',
              'Full replacement warranty',
              'Dedicated hospitality advisor',
            ],
          },
          {
            id: 'trip-120',
            name: 'Exclusive Destination Pack',
            reviewsCount: '120 High-Tier Reviews',
            price: '$749',
            originalPrice: '$1,100',
            delivery: 'High-season campaign (60 days)',
            features: [
              'Absolute leadership in your tourism destination',
              'Multilingual reviews (English, Spanish, French, German)',
              'Complete menu and service optimization',
              'VIP support and total reputation shield',
            ],
          },
        ],
      },
      Facebook: {
        platform: 'Facebook',
        projectCode: 'Future Field',
        badge: '98% Recommended on Fan Page',
        headline: 'Recommendations & Social Proof Catalog for Facebook',
        description: 'Multiply trust among visitors to your Facebook page, boosting clicks and conversion rates on your Meta Ads campaigns.',
        accentColor: '#1877f2',
        accentBg: 'bg-[#1877f2]/10 border-[#1877f2]/30',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
        alt: 'Satisfied customer community sharing recommendations on Facebook',
        sampleReview: {
          author: 'Patricia Morales',
          badge: 'Recommends this business',
          time: '2 days ago',
          text: '"Instant response via Messenger and super warm attention. They answered all my questions right away. Totally recommended!"',
          score: '100% 👍',
          count: '(840 votes)',
          title: '98% Community Recommendation',
          subBadge: 'Official Verified Page',
        },
        plans: [
          {
            id: 'fb-15',
            name: 'Basic Recommendation Pack',
            reviewsCount: '15 Recommendations 100% YES',
            price: '$69',
            originalPrice: '$99',
            delivery: 'Delivery in 5-7 days',
            features: [
              'Real Facebook profiles with friends and activity',
              'Verified positive recommendation on your page',
              'Varied, natural copy matching your business voice',
              '6-month retention guarantee',
            ],
          },
          {
            id: 'fb-35',
            name: 'Fan Page Boost Pack',
            reviewsCount: '35 Recommendations + Likes',
            price: '$149',
            originalPrice: '$210',
            popular: true,
            delivery: 'Gradual delivery in 10-15 days',
            features: [
              'Boosts organic reach on your Facebook page',
              'In-depth, believable comments with natural emojis',
              'Likes and engagement on key posts',
              '12-month retention guarantee',
              'WhatsApp support',
            ],
          },
          {
            id: 'fb-75',
            name: 'Social Proof Ads Pack',
            reviewsCount: '75 Recommendations + Engagement',
            price: '$279',
            originalPrice: '$390',
            delivery: 'Delivery in 20-30 days',
            features: [
              'Ideal to decrease CAC on Meta Ads campaigns',
              'Detailed testimonials that overcome buying hesitation',
              'Accurate geographical distribution of your target market',
              '12-month replacement guarantee',
              'Dedicated support manager',
            ],
          },
          {
            id: 'fb-150',
            name: 'Viral Brand Pack',
            reviewsCount: '150 Maximum Recommendations',
            price: '$499',
            originalPrice: '$720',
            delivery: 'Scheduled plan across 40-50 days',
            features: [
              'Peak social reputation on social networks',
              'Shield against comment trolls and unjustified complaints',
              'Weekly engagement monitoring of your Fan Page',
              'Full unlimited guarantee',
            ],
          },
        ],
      },
    },
    strategy: {
      badge: 'Comprehensive Reputation Strategy',
      heading: 'Control and grow your online reputation.',
      card1: {
        tag: 'Legal Defense & Suppression',
        title: 'Review Removal & Defense',
        desc: 'Expert management and legal de-indexing of fake, harmful, or defamatory reviews across Google Maps, Trustpilot, TripAdvisor, and Facebook. We leverage each platform’s regulatory framework to remove unfair feedback that hurts your revenue and brand prestige.',
        items: [
          'Removal of 1-star attacks without genuine purchase proof',
          'Direct dispute appeals with platform support teams',
          'Continuous protection against competitor defamation',
        ],
        statLabel: 'Success rate',
        statValue: '★ 94% Favorable resolutions',
      },
      card2: {
        tag: 'Authority & 5★ Prestige',
        title: 'Enhance Brand Credibility',
        desc: 'We transform public perception of your business by building a continuous flow of 5-star testimonials from verified, geo-targeted profiles. Instant visual credibility elevates conversion rates and establishes your brand as an undisputed industry leader.',
        items: [
          'Excellence badges and 4.8 to 5.0★ average rating',
          'Strategic copy embedded with high-intent keywords',
          'Direct increase in calls, clicks, and incoming orders',
        ],
        statLabel: 'Conversion impact',
        statValue: '★ +38% Sales close rate',
      },
      card3: {
        tag: 'Retention & Continuous Acquisition',
        title: 'Continuous Acquisition & Shielding',
        desc: 'Smart automation to collect positive feedback right at the point of sale via NFC cards and dynamic QR codes. Includes an automated pre-filter that routes complaints privately to your customer team before they ever reach the public web.',
        items: [
          'Physical NFC devices and smart review links',
          'Pre-filter that intercepts negative ratings privately',
          'Real-time reputation monitoring and instant alerts',
        ],
        statLabel: 'System',
        statValue: '100% Automated',
      },
      ctaBox: {
        title: 'Boost Brand Credibility Today',
        guarantee: '100% Money-Back Guarantee.',
        btn: 'View services',
      },
    },
    about: {
      badge: 'About Us & Global Leadership',
      heading: 'Global leadership in digital reputation.',
      officialBadge: 'TrustUpReviews™ Official',
      title: 'Who is TrustUpReviews?',
      p1: 'TrustUpReviews™ is the #1 leading brand boosting reviews for e-commerce brand owners and local businesses worldwide. With over 8 years of experience in this landscape, we have tailored our review solutions to meet the ever-evolving dynamics of modern commerce, driven by positive online customers.',
      p2: 'With global presence across APAC, Europe, and the Americas, we deliver bespoke solutions for individuals and enterprises worldwide, ensuring total brand protection and peak authority growth.',
      stats: {
        s1Value: '+100K',
        s1Label: 'Businesses boosted',
        s2Value: '+8 Years',
        s2Label: 'Global leadership',
        s3Value: '99.4%',
        s3Label: 'Client satisfaction',
        s4Value: '24/7',
        s4Label: 'VIP Monitoring',
      },
      pillars: {
        p1Title: 'Strong Global Presence',
        p1Desc: 'We have helped over 100,000+ businesses worldwide elevate consumer trust with proven, measurable metrics.',
        p2Title: 'Innovative Solutions',
        p2Desc: 'Advanced strategies and proprietary technology continuously adapted to algorithmic updates and platform rules.',
        p3Title: 'Written Guarantee',
        p3Desc: 'Organic delivery, 100% verified profiles, and assured replacement to safeguard your business reputation with zero risk.',
      },
      phone: {
        time: '09:41',
        realtimeFeed: 'Real-Time Feed',
        shielded: '100% Shielded',
        trustScoreTitle: 'TrustScore Trustpilot',
        trustScoreBadge: 'Excellent 4.9',
        trustScoreReviews: '2,850 verified reviews',
        trustScoreLtv: '+10x Active LTV',
        pause: 'Pause',
        play: 'Play',
        categories: {
          trustpilot: 'Trustpilot',
          google: 'Google',
          tripadvisor: 'TripAdvisor',
          facebook: 'Facebook',
        },
        island: {
          trustpilotTitle: 'Trustpilot 4.9',
          trustpilotBadge: 'Excellent',
          googleTitle: 'Google Reviews',
          googleBadge: '5.0 ★',
          tripadvisorTitle: 'TripAdvisor',
          tripadvisorBadge: '#1 Top',
          facebookTitle: 'Facebook Reviews',
          facebookBadge: '100% Recommends',
        },
        notifications: [
          {
            id: 1,
            category: 'trustpilot',
            platform: 'Trustpilot · Verified 5.0 ★',
            sender: 'David R. · Verified Buyer',
            badge: 'TrustScore 4.9',
            badgeBg: 'bg-[#00b67a]/20 text-[#34e0a1] border-[#00b67a]/40',
            stars: 5,
            time: '1 min ago',
            text: '“TrustUpReviews skyrocketed our Trustpilot reputation to 4.9 stars. Online store conversion rose 80% in 3 weeks.”',
            metricLabel: '4.9 Excellent',
            avatarLetter: 'TP',
            avatarBg: 'from-[#00b67a] to-emerald-950',
          },
          {
            id: 2,
            category: 'trustpilot',
            platform: 'Trustpilot · Verified Company',
            sender: 'Sonia M. · E-commerce CEO',
            badge: 'Top Rated',
            badgeBg: 'bg-[#00b67a]/20 text-[#34e0a1] border-[#00b67a]/40',
            stars: 5,
            time: '6 mins ago',
            text: '“They replaced negativity with genuine, enthusiastic feedback on Trustpilot. Buyer confidence is at an all-time high.”',
            metricLabel: '+80% Sales',
            avatarLetter: 'S',
            avatarBg: 'from-[#00b67a] to-teal-900',
          },
          {
            id: 3,
            category: 'google',
            platform: 'Google Reviews · 5 Stars',
            sender: 'Carlos S. · Local Guide Level 6',
            badge: 'Local Review',
            badgeBg: 'bg-[#ff5a42]/20 text-[#ff5a42] border-[#ff5a42]/40',
            stars: 5,
            time: '2 mins ago',
            text: '“Incredible! We doubled calls and bookings in under 15 days. The best decision for our business.”',
            metricLabel: 'Sales 2x',
            avatarLetter: 'G',
            avatarBg: 'from-[#ff5a42] to-amber-700',
          },
          {
            id: 4,
            category: 'google',
            platform: 'Google Maps · Business Profile',
            sender: 'Restaurant & Store · Verified',
            badge: 'Top 1 Listing',
            badgeBg: 'bg-[#ff5a42]/20 text-[#ff5a42] border-[#ff5a42]/40',
            stars: 5,
            time: '10 mins ago',
            text: '“Our 5-star ratings attract new customers automatically every day. Flawless rating and thrilled clients.”',
            metricLabel: '+10x LTV',
            avatarLetter: 'G',
            avatarBg: 'from-[#ff5a42] to-rose-900',
          },
          {
            id: 5,
            category: 'tripadvisor',
            platform: 'TripAdvisor · Travellers’ Choice',
            sender: 'Marco & Lucía · Dining Guide',
            badge: '#1 in City',
            badgeBg: 'bg-[#00aa6c]/20 text-[#34e0a1] border-[#00aa6c]/40',
            stars: 5,
            time: '5 mins ago',
            text: '“We reached #1 on TripAdvisor with spotless 5-star reviews. Tourists and diners fill our tables daily.”',
            metricLabel: '#1 TripAdvisor',
            avatarLetter: 'TA',
            avatarBg: 'from-[#00aa6c] to-teal-900',
          },
          {
            id: 6,
            category: 'tripadvisor',
            platform: 'TripAdvisor · Travel Experience',
            sender: 'Elena V. · Certified Traveler',
            badge: 'Recommended',
            badgeBg: 'bg-[#00aa6c]/20 text-[#34e0a1] border-[#00aa6c]/40',
            stars: 5,
            time: '14 mins ago',
            text: '“We searched for the highest rated place and it exceeded expectations. 10/10 in quality and trust.”',
            metricLabel: '5.0 ★ Excellent',
            avatarLetter: 'E',
            avatarBg: 'from-[#00aa6c] to-emerald-800',
          },
          {
            id: 7,
            category: 'facebook',
            platform: 'Facebook · Reviews & Recommendations',
            sender: 'Patricia R. · Frequent Client',
            badge: '100% Recommended',
            badgeBg: 'bg-[#1877F2]/20 text-[#60a5fa] border-[#1877F2]/40',
            stars: 5,
            time: '8 mins ago',
            text: '“Facebook page with over 500 5-star recommendations. New buyer confidence multiplied immediately.”',
            metricLabel: '100% Recommends',
            avatarLetter: 'f',
            avatarBg: 'from-[#1877F2] to-blue-900',
          },
          {
            id: 8,
            category: 'facebook',
            platform: 'Facebook · Active Community',
            sender: 'Andrés M. · Verified Purchase',
            badge: 'Top Fan',
            badgeBg: 'bg-[#1877F2]/20 text-[#60a5fa] border-[#1877F2]/40',
            stars: 5,
            time: '18 mins ago',
            text: '“Seeing so many people vouching for the brand on Facebook gave me complete buying confidence. Best service.”',
            metricLabel: 'Total Trust',
            avatarLetter: 'A',
            avatarBg: 'from-[#1877F2] to-sky-900',
          },
        ],
      },
      rightCol: {
        tag: 'Business Acceleration · 10x LTV',
        title: 'Take control of your online reputation today!',
        p1: 'With our expert review publishing services and proven strategies for generating authentic positive feedback, you can focus on what matters most —growing your business.',
        highlightBox1Title: 'It’s easy to double your sales!',
        highlightBox1Desc: 'When you have other people online helping you close the sale',
        highlightBox2P1: 'Positive reviews can have a profound impact on your bottom line, boosting customer confidence and lifetime value (LTV) up to 10x. Don’t let negative remarks hold you back.',
        highlightBox2P2: 'We help you showcase your brand’s true strengths by replacing negativity with genuine, enthusiastic feedback—',
        highlightBox2Emp: 'all seamlessly handled for you.',
        ctaTitle: 'Ready to elevate your reputation?',
        ctaDesc: 'Reach out to our specialists today and a dedicated team member will assist you immediately.',
        btnSpecialist: 'Speak with a specialist',
        btnCatalog: 'View price catalog',
        badges: {
          b1: 'Response in under 15 minutes',
          b2: '100% satisfaction guarantee',
          b3: '+100,000 brands advised',
        },
      },
    },
    differentials: {
      badge: 'EXCLUSIVE ADVANTAGE · TRUSTUPREVIEWS™',
      title: 'How we are different',
      intro: 'TrustUpReviews™',
      introEmp: ' is the leading authority in reputation management. ',
      introEnd: 'We have a unique approach that pairs negative review removal with positive reputation management into one potent solution. Our specialists and software can help you eliminate:',
      items: {
        i1Title: 'Permanent & Legal Removal',
        i1Desc: 'Zero risky practices. We file official legal petitions compliant with platform policies and local laws.',
        i2Title: 'Proprietary AI Detection Software',
        i2Desc: 'Identifies bot patterns, malicious language, duplicate accounts, and coordinated attacks in minutes.',
        i3Title: '100% Money-Back Guarantee',
        i3Desc: 'Your investment is fully protected. If the dispute is not favorably resolved, we refund 100% of your money.',
      },
      btnAudit: 'Audit my case with a specialist',
      auditNote: 'Confidential initial diagnosis & response in < 15 mins',
      rightCol: {
        badge: 'REMOVAL & DEFENSE COVERAGE',
        title: 'What we eliminate to protect your business',
        successRate: '94.8% Proven Success',
        threatBadge: 'Removable',
        threats: {
          t1Title: 'Fake competitor reviews',
          t1Desc: 'Smear campaigns and fabricated accounts from parties who were never actual customers.',
          t2Title: '1★ ratings without comments',
          t2Desc: 'Empty ratings with no descriptive text or service evidence that drag down your average score.',
          t3Title: 'Defamation & abusive language',
          t3Desc: 'Reviews violating terms of service, featuring insults, false accusations, or commercial threats.',
          t4Title: 'Massive bot attacks and spam',
          t4Desc: 'Coordinated bombardments of artificial feedback generated by third-party malicious scripts.',
          t5Title: 'Ex-employee or internal disputes',
          t5Desc: 'Personal grievances or workplace conflicts that do not reflect genuine customer interactions.',
          t6Title: 'Resolved complaints & misunderstandings',
          t6Desc: 'Issues already remedied with the client that continue to unfairly damage your sales conversions.',
        },
        footerTitle: 'Penalty-free removal for your profile',
        footerDesc: 'We guarantee 100% safety for your listings on Google, Trustpilot, TripAdvisor, and Facebook.',
        footerLink: 'Check my case',
      },
    },
    process: {
      metrics: {
        m1Val: '60%',
        m1Desc: 'of B2B marketers stated that SEO and organic reputation generate more leads than any other marketing initiative.',
        m2Val: '85%',
        m2Desc: 'of people perform online research before reaching out to a business or completing a purchase.',
        m3Val: '76%',
        m3Desc: 'of consumers trust online reviews as much as direct recommendations from friends or family.',
      },
      illustration: {
        activeProcess: 'ACTIVE PROCESS',
        activeCampaign: '24/7 ACTIVE CAMPAIGN',
        dailyReviews: '+3 to 50 REVIEWS / DAY',
      },
      badge: 'Review Process Illustration',
      title: 'Our Review Publishing & Brand Growth Process',
      intro: 'Every reputation campaign presents its own distinct challenges and opportunities. While tactics adapt to your unique needs, our milestones, quality control, and accountability never waver. Working with us means total transparency, expert guidance, and prompt communication.',
      steps: {
        s1Stage: 'STAGE 01',
        s1Title: 'Discovery & Audit',
        s1Desc: 'We inspect your entire digital footprint to define your goals, needs, and the negative content you wish to remove or outrank.',
        s2Stage: 'STAGE 02',
        s2Title: 'Measure, Analyze & Prioritize',
        s2Desc: 'Our strategists determine the most cost-effective roadmap to deploy high-authority positive content.',
        s3Stage: 'STAGE 03',
        s3Title: 'Campaign Design & Deployment',
        s3Desc: 'Our specialist team executes using industry connections, legal dispute avenues, SEO tactics, and proprietary software.',
        s4Stage: 'STAGE 04',
        s4Title: 'Ongoing Positive Reviews & Progress Tracking',
        s4Desc: 'We supply a steady stream of verified reviews, deliver transparent monthly reports, and defend your score for life.',
      },
      btnStart: 'Start my campaign now',
      trackingNote: 'Live real-time tracking · Google Sheets',
    },
    guarantee: {
      badge: '100% SATISFACTION OR MONEY-BACK GUARANTEE',
      title: 'The Trust Guarantee',
      p1: 'We offer a 100% money-back guarantee on TrustUp Reviews',
      p2: 'In rare cases where you do not see the expected outcomes, we will issue a full refund of your money. No questions asked.',
      seals: {
        s1: 'Contractual Guarantee',
        s2: 'Zero Questions Asked',
        s3: '100% Risk-Free Protection',
      },
      verified: 'Verified',
      starRating: '5 star rating',
      testimonials: {
        villervalla: {
          quote: '"Exceptional service. Will definitely use again!"',
          text: 'Initially facing illegitimate negative reviews, we turned to TrustUpReviews for help, which resulted in the removal of 1,000+ reviews and the addition of 150+ positive reviews monthly. This allowed our franchise owners to focus on core operations while saving us roughly 28,000 minutes combined.',
          author: 'Hanna Håkansson',
          role: 'CEO, Viller Valla',
          stats: {
            stat1: { value: '-1,000+', label: 'Removed' },
            stat2: { value: '+150/mo', label: 'New Reviews' },
            stat3: { value: '28,000 m', label: 'Saved' },
          },
        },
        peaches: {
          quote: '"A true extension of our internal team..."',
          text: '"TrustUpReviews published over 391 new positive reviews, raising our brand rating to 4.8 while boosting our checkout conversion rate by 15%. Their results speak for themselves, but they truly act as an extension of our own team."',
          author: 'Lindsay Eccleston',
          role: 'Head of E-Commerce, Peaches',
          stats: {
            stat1: { value: '+391', label: 'Reviews' },
            stat2: { value: '4.8 ⭐', label: 'Rating' },
            stat3: { value: '+15%', label: 'Conversion' },
          },
        },
        honestpaws: {
          quote: '"I would recommend them to any e-commerce owner!"',
          text: 'Our team is thrilled to have 600+ verified reviews published on our sites, which is fantastic. We hold one of the highest TrustScores in the Pet Niche in the USA. We owe that to TrustUpReviews. They are attentive to our goals and supported our growth from 2022 to 2025. We love them. People are often just vendors; we wanted partners. TrustUpReviews is our #1 partner.',
          author: 'Marko Skulic',
          role: 'Paid Acquisition Director, Honest Paws',
          stats: {
            stat1: { value: '600+', label: 'Published' },
            stat2: { value: 'Top #1', label: 'Pet Niche US' },
            stat3: { value: 'Partner', label: '2022-2025' },
          },
        },
      },
      bottomBanner: {
        title: 'Unconditional guarantee backed by contract',
        desc: 'If we fail to reach the agreed milestone for your brand, we refund 100% of your payment immediately.',
        btn: 'Speak with a specialist',
      },
    },
    faq: {
      badge: 'KNOWLEDGE CENTER & KEY ANSWERS',
      title: 'Frequently asked questions',
      subtitle: 'Critical Importance of Trustpilot Reviews',
      context: 'Learn how Trustpilot reviews define your commercial success, how we protect your account with authentic profiles, and how our money-back guarantee works.',
      searchPlaceholder: 'Search a question or keyword...',
      expandAll: 'Expand all',
      collapseAll: 'Collapse all',
      categoryAll: 'All',
      noResults: 'No questions matched your search criteria.',
      resetFilters: 'Reset filters',
      keyPointsTitle: 'Guaranteed key highlights:',
      items: [
        {
          id: 'por-que-comprar-trustpilot',
          category: 'Strategy & Conversion',
          question: 'Why should I buy Trustpilot Reviews?',
          highlight: '85% research online',
          shortSnippet: 'Multiplies conversion, builds instant credibility, and dissolves customer hesitation on arrival.',
          badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
          answer: [
            'Over 85% of consumers perform in-depth online research before reaching out to a business or checking out, and 76% trust online reviews as much as direct recommendations from friends or family.',
            'Purchasing verified Trustpilot reviews enables you to construct unshakeable social proof fast, drastically reducing skepticism from first-time visitors and lifting store conversion rates immediately.',
            'A profile filled with 5-star feedback establishes your brand as a leading authority in your niche, leading prospective buyers to choose you over competitors with poor or absent ratings.',
          ],
          keyPoints: [
            'Proven 15% to 35% lift in e-commerce website conversion rates.',
            'Substantial decrease in customer acquisition costs (CAC).',
            'Immediate social validation for new product launches and expanding brands.',
          ],
        },
        {
          id: 'es-seguro-comprar',
          category: 'Security & Compliance',
          question: 'Is it safe to buy Trustpilot Reviews?',
          highlight: '100% Human Profiles',
          shortSnippet: 'Completely safe with real geo-located profiles, residential IPs, and natural anti-detection drip feed.',
          badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
          answer: [
            'Completely safe when executed using the proprietary TrustUpReviews™ methodology. Unlike cheap services that rely on bots or throwaway accounts that get penalized, we operate with a global network of real verified users with seasoned activity.',
            'Each review is posted following natural human browsing habits, utilizing residential IP addresses geo-targeted to your audience’s country with progressive drip-feed pacing (3 to 50 reviews per day depending on your package).',
            'This guarantees Trustpilot’s verification algorithms register the activity as 100% organic and legitimate, safeguarding your account integrity.',
          ],
          keyPoints: [
            'Zero bots, automated scripts, or suspicious mass accounts.',
            'Paced progressive drip-feed to faithfully emulate organic traffic.',
            'Active retention monitoring and high-longevity account histories.',
          ],
        },
        {
          id: 'eliminar-resenas-negativas',
          category: 'Crisis Management',
          question: 'Can you remove negative online reviews?',
          highlight: 'Legal & Technical Removal',
          shortSnippet: 'Yes, we remove illegitimate, defamatory, or competitor reviews, and push down harmful comments.',
          badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
          answer: [
            'Yes, this is one of our primary core specialties. At TrustUpReviews™ we feature a legal and technical team dedicated to challenging and removing reviews that breach platform terms, defamatory claims, competitor attacks, or unsubstantiated complaints.',
            'We carefully inspect every negative review to pinpoint direct policy violations of Trustpilot terms and manage formal de-publishing proceedings.',
            'When a review cannot be taken down immediately via administrative channels, we implement a dilution and displacement protocol through a consistent flow of 5-star reviews, shrinking the visibility and statistical impact of negative remarks down to negligible levels.',
          ],
          keyPoints: [
            'Expert audit of malicious remarks and competitor smear campaigns.',
            'Formal appeal process grounded strictly in platform terms of service.',
            'Guaranteed TrustScore dilution and recovery strategy.',
          ],
        },
        {
          id: 'por-que-elegir-trustupreviews',
          category: 'Competitive Advantage',
          question: 'Why should I choose TrustUpReviews to buy Trustpilot Reviews?',
          highlight: 'Reputation Management Leader',
          shortSnippet: 'Proprietary technology, real-time tracking via Google Sheets, money-back warranty, and dedicated support.',
          badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
          answer: [
            'TrustUpReviews™ is the benchmark authority in reputation management. We combine cutting-edge technology, a worldwide human network, and a philosophy of radical transparency not found anywhere else in the market.',
            'With us, you are never left in the dark: your campaign progress is tracked in real time inside a private custom Google Sheet, where you can audit every review deployed, timestamp, user profile, and impact on your aggregate score.',
            'Furthermore, we back our services with an unconditional 100% money-back guarantee, dedicated senior account managers, and verified case studies from international brands like Villervalla, Peaches, and Honest Paws.',
          ],
          keyPoints: [
            'Full visibility with live tracking via Google Sheets.',
            'One-on-one attention from senior reputation strategists.',
            'Unconditional satisfaction guarantee and 6-month free replacement.',
          ],
        },
        {
          id: 'importancia-crucial-compra',
          category: 'Commercial Impact & SEO',
          question: 'What makes buying Trustpilot reviews so crucial?',
          highlight: 'Google SEO & Rich Snippets',
          shortSnippet: 'Trustpilot is the gold standard for Google. It directly impacts your SEO, ads ROAS, and final buying decisions.',
          badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
          answer: [
            'Trustpilot is not just another review site: it is among the highest-domain-authority review platforms recognized by Google. Its scores and stars index directly into search engine results pages (SERPs) via Rich Snippets.',
            'A high TrustScore improves Quality Score on Google Ads and Meta Ads, decreasing your cost per click (CPC) and boosting your return on ad spend (ROAS).',
            'Modern shoppers compare between 3 to 5 brands before buying. If your business displays a 4.8 rating with hundreds of positive testimonials while a rival sits at 3.5 or has no reviews, the sale is closed in your favor within seconds.',
          ],
          keyPoints: [
            'Gold star Rich Snippets indexed in Google search results.',
            'Up to 270% increase in purchase likelihood for items with reviews.',
            'Higher buyer confidence for high-ticket purchases and credit card transactions.',
          ],
        },
        {
          id: 'obtener-naturalmente-mejores-criticas',
          category: 'Best Practices',
          question: 'How can I naturally generate better reviews and ratings on Trustpilot?',
          highlight: '360° Hybrid Strategy',
          shortSnippet: 'Automate post-purchase triggers, optimize contact timing, and establish a private issue resolution channel.',
          badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
          answer: [
            'To generate consistent organic reviews, sync your e-commerce platform with automated email or SMS review requests at the exact customer "moment of delight" (e.g., 24 hours post-delivery).',
            'Deploy an NPS pre-survey: if the customer is delighted, invite them directly to leave a Trustpilot review; if they encountered friction, redirect them to priority support to solve the issue before a complaint is made public.',
            'The single most effective secret used by market leaders is the hybrid framework: continuously replenishing your profile with strategic boosts from TrustUpReviews™ to neutralize the natural bias where only unhappy customers take the initiative to leave unsolicited feedback.',
          ],
          keyPoints: [
            'Automated post-delivery email and SMS triggers.',
            'Smart pre-filtering of customer service issues before public posts.',
            'Continuous positive reinforcement to overcome spontaneous negative bias.',
          ],
        },
        {
          id: 'mejorar-puntuacion-pagina-resenas',
          category: 'Profile Optimization',
          question: 'Can you improve my online review page score?',
          highlight: 'Mathematical Algorithm Recovery',
          shortSnippet: 'We calculate the precise volume of 5-star reviews needed to elevate your TrustScore to your target rating.',
          badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
          answer: [
            'Yes, mathematically and reliably. Trustpilot’s algorithm computes a time-weighted average based on quantity and recency. If your score dropped to 2.5 or 3.5 due to an unfair cluster of complaints, we calculate the exact number of 5-star ratings required to outweigh and lift your score.',
            'We execute a progressive positive infusion campaign that dilutes the numerical and visual footprint of past low ratings, bringing your score to optimum levels like 4.7 or 4.9.',
            'Additionally, we optimize review titles to target the critical trust factors prospective buyers search for: fast shipping, authenticity, build quality, and superior support.',
          ],
          keyPoints: [
            'Precise algorithmic calculation of review volume needed for your goal.',
            'High-intent keyword optimization embedded within review copy.',
            'Measurable week-over-week progress with live evolution reporting.',
          ],
        },
        {
          id: 'politica-de-garantia',
          category: 'Warranty & Trust',
          question: 'What is your warranty policy?',
          highlight: '100% Money-Back Guarantee',
          shortSnippet: 'Full refund without questions asked if you do not see the expected results, plus 6 months of free replacement.',
          badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
          answer: [
            'Our policy is straightforward and crystal clear: we offer a 100% Money-Back Guarantee. In rare instances where you do not see the agreed outcomes of your campaign, we issue a full refund with no friction and no bureaucratic hassles.',
            'Furthermore, every review published under our plans includes a 6-Month Retention Warranty: if any review experiences changes or filter removal, our team automatically replaces it free of charge.',
            'You take zero risk when partnering with TrustUpReviews™. Your investment and reputation are sealed under service contract.',
          ],
          keyPoints: [
            '100% refund in exceptional cases of non-fulfillment.',
            'Guaranteed free replacement for 6 full months.',
            'Zero contractual risk with peak operational transparency.',
          ],
        },
      ],
      banner: {
        title: 'Have a specific question about your brand or industry?',
        desc: 'Our senior strategists analyze your Trustpilot profile confidentially and prepare a customized review and reputation blueprint.',
        btn: 'Speak with a Specialist',
      },
      trustBadges: {
        b1: '100% Confidential & GDPR Compliant',
        b2: '256-bit SSL Encrypted Transactions',
        b3: '6-Month Free Replacement Warranty',
      },
    },
    contact: {
      badge: 'Direct Specialist Access',
      title: 'Ready to transform your business reputation?',
      desc: 'Claim a free, confidential diagnosis in under 15 minutes. Our reputation management and review removal team is on standby to assist you.',
      btnSpecialist: 'Speak with a Specialist',
      btnCatalog: 'View Price Catalog',
      copyright: 'TrustUpReviews™. All rights reserved.',
      backToTop: 'Back to top ↑',
      support247: '24/7 Support',
    },
    catalogModal: {
      title: 'Price Catalog',
      closeAria: 'Close catalog',
      viewOther: 'View another platform:',
      popularBadge: 'Most Popular',
      oneTimePay: 'One-time campaign payment',
      choosePlan: 'Choose package',
      footerSafe: 'Algorithmic drip delivery: 100% safe with zero penalty risk.',
      footerWritten: 'Full written replacement guarantee.',
    },
    planSuccessModal: {
      title: 'Plan Selected!',
      msg: (plan, platform, price) =>
        `You have selected ${plan} for ${platform} at ${price}.`,
      subMsg: 'Our reputation management team is ready to begin the gradual, secure deployment of your reviews.',
      confirmBtn: 'Confirm & Close',
      backBtn: 'Back to pricing list',
    },
    specialistModal: {
      badge: 'Immediate Assistance',
      title: 'Speak with a specialist',
      closeAria: 'Close modal',
      successTitle: 'Request Received!',
      successMsg: 'One of our dedicated specialists will review your brand’s reputation and contact you in under 15 minutes to craft your tailored plan.',
      successBtn: 'Got it',
      labels: {
        name: 'Your name or decision-maker name',
        namePlaceholder: 'e.g. Robert Smith',
        business: 'Company or brand name',
        businessPlaceholder: 'e.g. My Business LLC',
        phone: 'Phone or WhatsApp number',
        phonePlaceholder: '+1 (555) 000-0000',
        platform: 'Priority platform',
        platformOptions: {
          google: 'Google Reviews (Google Maps & Search)',
          trustpilot: 'Trustpilot (TrustScore & Stores)',
          tripadvisor: 'TripAdvisor (Restaurants & Hotels)',
          facebook: 'Facebook (Fan Page Recommendations)',
          removal: 'Negative Review Removal',
        },
        notes: 'What is your current objective or challenge? (Optional)',
        notesPlaceholder: 'e.g. We want to climb to 4.9 stars and remove 2 unfair reviews...',
        submitBtn: 'Request Immediate Consultation',
        privacyNote: '🔒 Your details are safeguarded. 100% confidential, obligation-free consultation.',
      },
    },
    mobileStickyBar: {
      viewPlans: 'View Plans',
      specialist: 'Specialist',
    },
    telegram: {
      tooltip: 'Chat on Telegram?',
      badgeOnline: 'Online 24/7',
      ariaLabel: 'Contact @SknnyZ on Telegram',
    },
  },
};
