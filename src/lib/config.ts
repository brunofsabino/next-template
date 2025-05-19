// export const config = {
//   // Informações básicas da marca
//   brandName: "Lojas Loula",
//   logo: "/images/logo_white.png",
//   logo2: "/images/logo_black.png",
//   backgroundImage: "/images/image_loja.png",
//   favicon: "/favicon.ico",
//   telWhats: "+5511959599",

//   // Paleta de cores (inspirada no Refactoring UI)
//   colors: {
//     primary: "#4F46E5", // Cor principal (ex.: indigo)
//     accent: "#A78BFA", // Cor de destaque (ex.: indigo claro)
//     background: "#F9FAFB", // Fundo (ex.: cinza claro)
//     text: "#111827", // Texto principal (ex.: quase preto)
//     neutral: "#6B7280", // Texto secundário (ex.: cinza)
//     neutralLight: "#D1D5DB", // Cinza claro para bordas/fundos
//     beige: "#FAF5EA", // Bege claro, fundo do site
//   },

//   // Tipografia
//   typography: {
//     fontFamily: {
//       heading: "Poppins", // Fonte para títulos
//       body: "Inter", // Fonte para texto geral
//     },
//     fontSizes: {
//       h1: "2.5rem", // 40px (título principal)
//       h2: "1.5rem", // 24px (subtítulo)
//       body: "1rem", // 16px (texto normal)
//       small: "0.875rem", // 14px (texto menor)
//     },
//   },
//   about: {
//     title: "Sobre Nós",
//     description:
//       // "Na Loula, oferecemos qualidade e dedicação para nossos clientes, trazendo as melhores roupas com estilo e conforto.",
//       //"Fundada em 2017, a Lojas Loula é uma marca brasileira que celebra a moda feminina com estilo, conforto e sensualidade. Com sede em São Paulo, a Loula oferece uma variedade de peças que vão desde lingeries sofisticadas até vestidos clubwear, destacando-se por designs ousados e materiais de alta qualidade. A marca também valoriza a sustentabilidade, promovendo o respeito e amor pela natureza em suas coleções.",
//       "Fundada em 2017 e com sede em São Paulo, a Lojas Loula é uma marca brasileira de moda feminina que une estilo, conforto e sensualidade. Com peças que vão do casual ao ousado, aposta em design autêntico, qualidade e respeito à natureza.",
//     cards: [
//       {
//         title: "As melhores roupas",
//         description:
//           "Roupas com estilo, conforto e as últimas tendências da moda.",
//         icon: "Shirt",
//       },
//       {
//         title: "Atendimento personalizado",
//         description:
//           "Cuidamos de cada cliente com atenção e carinho, garantindo a melhor experiência.",
//         icon: "Heart",
//       },
//       {
//         title: "Qualidade garantida",
//         description:
//           "Produtos testados e aprovados, feitos para durar e encantar.",
//         icon: "CheckCircle",
//       },
//     ],
//   },
//   // Ícones SVG
//   icons: {
//     library: "lucide-react", // Biblioteca padrão (ex.: lucide-react, heroicons)
//     custom: {
//       hero: "/icons/hero.svg", // Ícone personalizado (ex.: para HeroSection)
//       benefit1: "/icons/benefit1.svg", // Ex.: ícone para seção de benefícios
//       benefit2: "/icons/benefit2.svg",
//     },
//   },

//   // CTA
//   ctaText: "Fale agora pelo WhatsApp",

//   // Estilização global
//   borderRadius: "8px", // Cantos arredondados (ex.: 0.5rem)
//   boxShadow: "0 4px 16px rgba(0,0,0,0.08)", // Sombra leve

//   // Meta tags (SEO e OpenGraph)
//   meta: {
//     title: "Loula - Loja de Roupas",
//     description: "Descubra as melhores roupas com estilo e qualidade.",
//     ogImage: "/images/og-image.jpg",
//   },

//   // Redes sociais
//   social: {
//     facebook: "https://facebook.com",
//     instagram: "https://instagram.com",
//   },
// };
export const config = {
  brandName: "Lojas Loula",
  logo: "/images/logo_white.png",
  logo2: "/images/logo_black.png",
  favicon: "/images/favicon.ico",
  backgroundImage: "/images/image_loja.png",
  telWhats: "11959599",
  colors: {
    primary: "#4F46E5",
    accent: "#A78BFA",
    background: "#F9FAFB",
    text: "#111827",
    neutral: "#6B7280",
    neutralLight: "#D1D5DB",
    primaryForeground: "#FFFFFF",
    beige: "#FAF5EA", // Bege claro, fundo do site
  },
  typography: {
    fontFamily: {
      heading: "Poppins",
      body: "Inter",
    },
    fontSizes: {
      h1: "2.5rem",
      h2: "1.5rem",
      body: "1rem",
      small: "0.875rem",
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
  products: {
    title: "Nossos Produtos",
    description:
      "Moda feminina e masculina com estilo, conforto e personalidade — do casual ao sofisticado.",
    items: [
      {
        title: "Moda Feminina",
        description:
          "Peças que combinam elegância, atitude e versatilidade para o dia a dia ou ocasiões especiais.",
        image: "/images/moda-feminina.jpg",
      },
      {
        title: "Moda Masculina",
        description:
          "Roupas modernas e confortáveis para homens que valorizam estilo e praticidade. Venha conferir!",
        image: "/images/moda-masculina.jpg",
      },
      {
        title: "Estilo para Todos os Momentos",
        description:
          "Coleções pensadas para acompanhar você em qualquer ocasião, com autenticidade e qualidade.",
        image: "/images/estilo-todos.jpg",
      },
    ],
  },

  testimonials: {
    title: "O que nossos clientes dizem",
    description:
      "Veja as avaliações de nossos clientes satisfeitos com os produtos e serviços da Lojas Loula.",
    googleReviewsImage:
      "https://cdn.trustindex.io/assets/platform/Google/logo.svg",
    items: [
      {
        name: "Ana Silva",
        image: "https://via.placeholder.com/80", // Placeholder image
        rating: 5,
        text: "Ótima experiência de compra! Produtos de qualidade e atendimento excepcional. Recomendo a todos!",
      },
      {
        name: "João Pereira",
        image: "https://via.placeholder.com/80", // Placeholder image
        rating: 5,
        text: "Gostei muito da variedade de produtos. A entrega foi rápida, mas a embalagem poderia ser mais caprichada.",
      },
      {
        name: "Maria Oliveira",
        image: "https://via.placeholder.com/80", // Placeholder image
        rating: 5,
        text: "Loja incrível! Sempre encontro o que preciso, e o suporte ao cliente é impecável. Parabéns!",
      },
    ],
  },
  team: {
    title: "Nossa Equipe",
    description: "Conheça as pessoas que fazem a Loula acontecer.",
    members: [
      {
        name: "Clara Mendes",
        role: "Gerente",
        description: "Lidera a equipe com paixão e visão estratégica.",
        image: "/images/clara.jpg",
      },
      {
        name: "Sofia Almeida",
        role: "Vendedora",
        description: "Atendimento caloroso e dedicado aos clientes.",
        image: "/images/sofia.jpg",
      },
      {
        name: "Paulo Silva",
        role: "Vendedor",
        description: "Garante a qualidade impecável de cada peça.",
        image: "/images/paulo.jpg",
      },
      {
        name: "Equipe Vendas",
        role: "Equipe",
        description: "Cria coleções modernas e estilosas.",
        image: "/images/equipe.jpg",
      },
    ],
  },
  contact: {
    title: "Entre em Contato",
    description: "Envie sua mensagem ou fale diretamente pelo WhatsApp.",
  },
  location: {
    title: "Entre em Contato", //Onde Estamos
    description: "Envie sua mensagem ou fale diretamente pelo WhatsApp.", //Visite nossa loja e conheça nossas coleções!",
    description2: "Preencha os dados e clique em Enviar Mensagem", //Visite nossa loja e conheça nossas coleções!",
    address:
      "Av. Waldemar Carlos Pereira, 477 - Vila Matilde, São Paulo - SP, 03533-001",
    mapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.699056109385!2d-46.5208593!3d-23.5433241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5fb9048d39c9%3A0x151aa800660d39e!2sLoja%20Loula!5e0!3m2!1spt-BR!2sbr!4v1747584043772!5m2!1spt-BR!2sbr",
  },
  navbar: {
    links: [
      { label: "Home", href: "/" },
      { label: "Sobre", href: "/#sobre" },
      { label: "Produtos", href: "/#produtos" },
      { label: "Depoimentos", href: "/#depoimentos" },
      { label: "Equipe", href: "/#equipe" },
      { label: "Contato", href: "/#contato" },
    ],
  },
  footer: {
    links: [
      { label: "Home", href: "/" },
      { label: "Sobre", href: "/#sobre" },
      { label: "Produtos", href: "/#produtos" },
      { label: "Depoimentos", href: "/#depoimentos" },
      { label: "Equipe", href: "/#equipe" },
      { label: "Contato", href: "/#contato" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
      { label: "Termos de Uso", href: "/termos-de-uso" },
    ],
  },
  ctaText: "Fale agora pelo WhatsApp",
  borderRadius: "8px",
  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
  meta: {
    title: "Lojas Loula - Moda Feminina, Masculina e Acessórios",
    description:
      "Tudo em moda feminina, masculina e acessórios em um só lugar na Loja Loula.",
    ogImage: "/images/logo_white.png",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
};
