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
