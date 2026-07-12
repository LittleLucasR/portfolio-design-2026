export interface Project {
  /** slug único, usado como id no DOM (data-project) */
  slug: string;
  title: string;
  /** thumbnail 1280x720, usada no grid */
  thumbnail: string;
  /** imagem em alta resolução, usada no modal */
  imageHD: string;
  /** descrição principal do projeto */
  description: string;
  /** observação / nota adicional (ex: contexto, stack, limitação do projeto) */
  observation: string;
}

const base = import.meta.env.BASE_URL;

export const projects: Project[] = [
  {
    slug: "projeto-01",
    title: "Key Visual Publicitário",
    thumbnail: `${base}/images/works/projeto-01-thumb.jpg`,
    imageHD: `${base}/images/works/projeto-01-hd.jpg`,
    description:
      "Desenvolvido para representar a colaboração entre duas grandes marcas em um único produto. A composição reforça a ideia de alimento e brinde coexistindo na mesma experiência, valorizando a campanha por meio de uma narrativa visual impactante.",
    observation: "Pós Tratamento Fotográfico no Photoshop + IA Generativa, para criar o efeito splash dos ingredientes. Projeto de Portfólio.",
  },
  {
    slug: "projeto-02",
    title: "Direção de Arte Conceitual",
    thumbnail: `${base}/images/works/projeto-02-thumb.jpg`,
    imageHD: `${base}/images/works/projeto-02-hd.jpg`,
    description:
      "Um exercício de direção de arte que combina fotografia, iluminação e composição para transformar um produto comum em uma peça com linguagem premium e conceito marcante.",
    observation: "Projeto de Portfólio.",
  },
  {
    slug: "projeto-03",
    title: "Manipulação de Imagem",
    thumbnail: `${base}/images/works/projeto-03-thumb.jpg`,
    imageHD: `${base}/images/works/projeto-03-hd.jpg`,
    description:
      "Projeto de fotomanipulação criado a partir de um conceito original. O copo com identidade visual inspirada na Carmed foi gerado com IA para representar uma embalagem inexistente, integrado à cena com acabamento realista.",
    observation: "Pós Tratamento Fotográfico no Photoshop + IA Generativa, para criar o copo vintage personalizado. Projeto de Portfólio.",
  },
  {
    slug: "projeto-04",
    title: "Product Key Visual",
    thumbnail: `${base}/images/works/projeto-04-thumb.jpg`,
    imageHD: `${base}/images/works/projeto-04-hd.jpg`,
    description:
      "Key visual desenvolvido para destacar a linha esportiva da Adidas. A composição utiliza o tartan das pistas de atletismo como referência visual para reforçar velocidade, desempenho e competição.",
    observation: "Projeto de Portfólio.",
  },
  {
    slug: "projeto-05",
    title: "Interface & Tech Design",
    thumbnail: `${base}/images/works/projeto-05-thumb.jpg`,
    imageHD: `${base}/images/works/projeto-05-hd.jpg`,
    description:
      "Exploração visual inspirada na nova estética do design digital, impulsionada pelos avanços da IA generativa. Formas, iluminação e profundidade criam uma interface contemporânea que une tecnologia, sofisticação e identidade visual.",
    observation: "Projeto Real.",
  },
  {
    slug: "projeto-06",
    title: "Desdobramento de Campanha",
    thumbnail: `${base}/images/works/projeto-06-thumb.jpg`,
    imageHD: `${base}/images/works/projeto-06-hd.jpg`,
    description:
      "Exemplo de como um key visual pode ser adaptado para redes sociais sem perder consistência. Cada peça mantém a identidade da campanha enquanto atende diferentes objetivos de comunicação.",
    observation: "Projeto de Portfólio.",
  },
];