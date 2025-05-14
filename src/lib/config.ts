// export const config = {
//   brandName: "Loula",
//   logo: "/images/logo_white.png",
//   logo2: "/images/logo_black.png",
//   primaryColor: "#2563EB",
//   backgroundImage: "/images/image_loja.png",
//   social: {
//     facebook: "https://facebook.com",
//     instagram: "https://instagram.com",
//   },
// };
export const config = {
  // Informações básicas da marca
  brandName: "Lojas Loula",
  logo: "/images/logo_white.png",
  logo2: "/images/logo_black.png",
  backgroundImage: "/images/image_loja.png",
  favicon: "/favicon.ico",
  telWhats: "+5511959599",

  // Paleta de cores (inspirada no Refactoring UI)
  colors: {
    primary: "#4F46E5", // Cor principal (ex.: indigo)
    accent: "#A78BFA", // Cor de destaque (ex.: indigo claro)
    background: "#F9FAFB", // Fundo (ex.: cinza claro)
    text: "#111827", // Texto principal (ex.: quase preto)
    neutral: "#6B7280", // Texto secundário (ex.: cinza)
    neutralLight: "#D1D5DB", // Cinza claro para bordas/fundos
  },

  // Tipografia
  typography: {
    fontFamily: {
      heading: "Poppins", // Fonte para títulos
      body: "Inter", // Fonte para texto geral
    },
    fontSizes: {
      h1: "2.5rem", // 40px (título principal)
      h2: "1.5rem", // 24px (subtítulo)
      body: "1rem", // 16px (texto normal)
      small: "0.875rem", // 14px (texto menor)
    },
  },
  about: {
    title: "Sobre Nós",
    description:
      "Na Loula, oferecemos qualidade e dedicação para nossos clientes, trazendo as melhores roupas com estilo e conforto.",
    cards: [
      {
        title: "As melhores roupas",
        description:
          "Roupas com estilo, conforto e as últimas tendências da moda.",
        icon: "Shirt",
      },
      {
        title: "Atendimento personalizado",
        description:
          "Cuidamos de cada cliente com atenção e carinho, garantindo a melhor experiência.",
        icon: "Heart",
      },
      {
        title: "Qualidade garantida",
        description:
          "Produtos testados e aprovados, feitos para durar e encantar.",
        icon: "CheckCircle",
      },
    ],
  },
  // Ícones SVG
  icons: {
    library: "lucide-react", // Biblioteca padrão (ex.: lucide-react, heroicons)
    custom: {
      hero: "/icons/hero.svg", // Ícone personalizado (ex.: para HeroSection)
      benefit1: "/icons/benefit1.svg", // Ex.: ícone para seção de benefícios
      benefit2: "/icons/benefit2.svg",
    },
  },

  // CTA
  ctaText: "Fale agora pelo WhatsApp",

  // Estilização global
  borderRadius: "8px", // Cantos arredondados (ex.: 0.5rem)
  boxShadow: "0 4px 16px rgba(0,0,0,0.08)", // Sombra leve

  // Meta tags (SEO e OpenGraph)
  meta: {
    title: "Loula - Loja de Roupas",
    description: "Descubra as melhores roupas com estilo e qualidade.",
    ogImage: "/images/og-image.jpg",
  },

  // Redes sociais
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
};
