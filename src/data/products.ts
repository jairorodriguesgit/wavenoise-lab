export interface ProductSpecs {
  contents: string | null;
  sampleCount: string | null;
  format: string | null;
  resolution: string | null;
  compatibility: string | null;
  fileSize: string | null;
  requirements?: string | null;
  license: string | null;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline?: string | null;
  description: string | null;
  coverImage: string | null;
  youtubeVideoId: string | null;
  price: number | null;
  originalPrice?: number | null;
  isFree: boolean;
  ctaLabel?: string | null;
  checkoutUrl?: string | null;
  featured?: boolean;
  specs: ProductSpecs;
}

export const products: Product[] = [
  {
    id: 'wnl-free-altar-worship-fx',
    slug: 'free-altar-worship-fx',
    name: 'Free Altar Worship FX Samples',
    category: 'FREE / WORSHIP / FX',
    tagline: null,
    description: 'Produto gratuito utilizado também como porta de entrada para a marca.',
    coverImage: null,
    youtubeVideoId: null,
    price: 0,
    originalPrice: null,
    isFree: true,
    ctaLabel: 'DOWNLOAD GRÁTIS',
    checkoutUrl: null,
    featured: true,
    specs: {
      contents: null,
      sampleCount: null,
      format: null,
      resolution: null,
      compatibility: null,
      fileSize: null,
      requirements: null,
      license: null,
    },
  },
  {
    id: 'wnl-altar-drum-samples',
    slug: 'altar-drum-samples',
    name: 'Altar Drum Samples',
    category: 'WORSHIP / DRUMS',
    tagline: null,
    description: 'Sample pack de bateria voltado para Worship.',
    coverImage: null,
    youtubeVideoId: null,
    price: null,
    originalPrice: null,
    isFree: false,
    ctaLabel: 'COMPRAR',
    checkoutUrl: null,
    featured: false,
    specs: {
      contents: null,
      sampleCount: null,
      format: null,
      resolution: null,
      compatibility: null,
      fileSize: null,
      requirements: null,
      license: null,
    },
  },
  {
    id: 'wnl-modern-metal',
    slug: 'modern-metal',
    name: 'Modern Metal',
    category: 'METAL / DRUMS',
    tagline: null,
    description: 'Sample pack voltado para sonoridades modernas de Metal.',
    coverImage: null,
    youtubeVideoId: null,
    price: null,
    originalPrice: null,
    isFree: false,
    ctaLabel: 'COMPRAR',
    checkoutUrl: null,
    featured: false,
    specs: {
      contents: null,
      sampleCount: null,
      format: null,
      resolution: null,
      compatibility: null,
      fileSize: null,
      requirements: null,
      license: null,
    },
  },
  {
    id: 'wnl-vintage-vibe-dead-drums',
    slug: 'vintage-vibe-dead-drums',
    name: 'Vintage Vibe Dead Drums',
    category: 'VINTAGE / DRUMS',
    tagline: null,
    description: 'Sample pack com estética de bateria seca/dead e sonoridade vintage.',
    coverImage: null,
    youtubeVideoId: null,
    price: null,
    originalPrice: null,
    isFree: false,
    ctaLabel: 'COMPRAR',
    checkoutUrl: null,
    featured: false,
    specs: {
      contents: null,
      sampleCount: null,
      format: null,
      resolution: null,
      compatibility: null,
      fileSize: null,
      requirements: null,
      license: null,
    },
  },
  {
    id: 'wnl-vibe-80-lab',
    slug: 'vibe-80-lab',
    name: 'Vibe 80 LAB',
    category: '80s / NEW WAVE / DRUMS / FX',
    tagline: null,
    description: 'Sample pack inspirado em sonoridades de bateria e produção dos anos 80.',
    coverImage: null,
    youtubeVideoId: null,
    price: null,
    originalPrice: null,
    isFree: false,
    ctaLabel: 'COMPRAR',
    checkoutUrl: null,
    featured: false,
    specs: {
      contents: null,
      sampleCount: null,
      format: null,
      resolution: null,
      compatibility: null,
      fileSize: null,
      requirements: null,
      license: null,
    },
  },
];

/**
 * Busca um produto pelo seu slug da URL.
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

/**
 * Retorna produtos relacionados, excluindo o produto atual.
 */
export function getRelatedProducts(currentId: string, limit = 4): Product[] {
  return products.filter((product) => product.id !== currentId).slice(0, limit);
}

