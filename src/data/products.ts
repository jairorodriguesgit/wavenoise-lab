const base = import.meta.env.BASE_URL;

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
  youtubeAspectRatio?: '16:9' | '9:16' | null;
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
    id: 'wnl-free-altar-vibes-worship-fx',
    slug: 'free-altar-vibes-worship-fx',
    name: 'Free Altar Vibes Worship FX Samples',
    category: 'FREE / WORSHIP / FX',
    tagline: 'O KIT DE FX QUE TODO BATERISTA DE WORSHIP DEVERIA TER. DE GRAÇA!',
    description: 'São efeitos e elementos percussivos pensados para serem usados de verdade no PAD. Sons que entram no momento certo e ajudam a música a crescer.',
    coverImage: `${base}/products/worship-fx.webp`,
    youtubeVideoId: null,
    price: 0,
    originalPrice: null,
    isFree: true,
    ctaLabel: 'DOWNLOAD GRÁTIS',
    checkoutUrl: 'https://drive.google.com/file/d/15Pj7TK3hQdwu7inYvFAhoPquSwCx80K8/view?usp=sharing',
    featured: true,
    specs: {
      contents: '1 Clap Verb, 1 Low Kick, 1 E-Snare, 1 Hi Hat, 1 Pandeirola Verb, 1 Impact, 1 Epic Tom Verb, 1 Clave Verb.', 
      sampleCount: '8 Samples',
      format: 'WAV' ,
      resolution: '44.1kHz - 24bit + versão compatível 16bit',
      compatibility: 'Sampling Pads, Percussion Pads - SPD SX / SPSX PRO / NUX DP2000 e outros.',
      fileSize: '12 MB',
      requirements: 'Nenhum requisito específico. Compatível com qualquer DAW ou sampler que aceite arquivos WAV.',
      license: 'Uso pessoal e comercial permitido. Não é permitido redistribuir, revender ou compartilhar os arquivos de áudio em qualquer forma ou plataforma sem permissão expressa da WaveNoise Lab.',
    },
  },
  {
    id: 'wnl-altar-worship-PRO-fx',
    slug: 'altar-worship-PRO-fx',
    name: 'Altar Worship PRO FX Samples',
    category: 'WORSHIP PRO FX',
    tagline: 'EFEITOS E ELEMENTOS QUE FAZEM SEU PAD GANHAR VIDA!',
    description: 'Uma seleção de efeitos e elementos percussivos inspirados em sonoridades características do estilo, desenvolvidos para não ficarem parados na sua biblioteca e sim para você carregar no Pad e fazer a diferença no seu Play.',
    coverImage: `${base}/products/worship-pro-fx.webp`,
    youtubeVideoId: null,
    price: 30,
    originalPrice: 70,
    isFree: false,
    ctaLabel: 'COMPRAR',
    checkoutUrl: null,
    featured: true,
    specs: {
      contents: 'Claps, Low Kicks, Pandeirola Reverb, Risers, Hits, Snares, Toms, Kicks e mais elementos percussivos processados e prontos para tocar.', 
      sampleCount: '28 Samples',
      format: 'WAV' ,
      resolution: '44.1kHz - 24bit + versão compatível 16bit',
      compatibility: 'Sampling Pads, Percussion Pads - SPD SX / SPSX PRO / NUX DP2000 e outros.',
      fileSize: '50 MB',
      requirements: 'Nenhum requisito específico. Compatível com qualquer DAW ou sampler que aceite arquivos WAV.',
      license: 'Uso pessoal e comercial permitido. Não é permitido redistribuir, revender ou compartilhar os arquivos de áudio em qualquer forma ou plataforma sem permissão expressa da WaveNoise Lab.',
    },
  },
  {
    id: 'wnl-altar-drum-samples',
    slug: 'altar-drum-samples',
    name: 'Altar Drum Samples',
    category: 'WORSHIP / DRUMS',
    tagline: 'O SOM GRANDE DO WORSHIP MODERNO NO SEU PAD.',
    description: 'Caixas e tons inspirados nas grandes produções de Worship moderno, com duas camadas de dinâmica para uma resposta mais realista ao tocar. É possível montar um Kit completo com os sons do pack, ou apenas usar as caixas e tons para complementar o seu kit de bateria, além dos efeitos de impacto, transição e percussões processadas para criar momentos gigantescos que farão total diferença no arranjo da sua música.',
    coverImage: `${base}/products/worship-samples.webp`,
    youtubeVideoId: null,
    price: 40,
    originalPrice: 60,
    isFree: false,
    ctaLabel: 'COMPRAR',
    checkoutUrl: null,
    featured: false,
    specs: {
      contents: "Kicks, Snares, Cymbals, Hi Hats, Toms, Percussões, Efeitos, Transições, Risers, Hits",
      sampleCount: '75 Samples',
      format: 'WAV' ,
      resolution: '44.1kHz - 24bit + versão compatível 16bit',
      compatibility: 'Sampling Pads, Percussion Pads - SPD SX / SPSX PRO / NUX DP2000 e outros.',
      fileSize: null,
      requirements: 'Nenhum requisito específico. Compatível com qualquer DAW ou sampler que aceite arquivos WAV.',
      license: 'Uso pessoal e comercial permitido. Não é permitido redistribuir, revender ou compartilhar os arquivos de áudio em qualquer forma ou plataforma sem permissão expressa da WaveNoise Lab.',
    },
  },
  {
    id: 'wnl-modern-metal',
    slug: 'modern-metal',
    name: 'Modern Metal',
    category: 'METAL / DRUMS',
    tagline: 'METAL MODERNO, AGRESSIVO, PESADO, PROCESSADO E SEM DÓ DE P**** NENHUMA!',
    description: 'Samples de bateria feitos para Metal moderno com duas camadas de dinâmica para uma resposta mais realista ao tocar. O pack possui caixas agressivas, kicks definidos, pratos cortantes e timbres pesados, processados e prontos para destruir a mix.',
    coverImage: `${base}/products/modern-metal.webp`,
    youtubeVideoId: 'qhGB5ckBtgU',
    youtubeAspectRatio: '9:16',
    price: 30,
    originalPrice: 50,
    isFree: false,
    ctaLabel: 'COMPRAR',
    checkoutUrl: null,
    featured: false,
    specs: {
      contents: '3 Kicks, 3 Caixas, Tons, Surdos e Pratos',
      sampleCount: '50 Samples',
      format: 'WAV' ,
      resolution: '44.1kHz - 24bit + versão compatível 16bit',
      compatibility: 'Sampling Pads, Percussion Pads - SPD SX / SPSX PRO / NUX DP2000 e outros.',
      fileSize: '60 MB',
      requirements: 'Nenhum requisito específico. Compatível com qualquer DAW ou sampler que aceite arquivos WAV.',
      license: 'Uso pessoal e comercial permitido. Não é permitido redistribuir, revender ou compartilhar os arquivos de áudio em qualquer forma ou plataforma sem permissão expressa da WaveNoise Lab.',
    },
  },
  {
    id: 'wnl-vintage-vibe-dead-drums',
    slug: 'vintage-vibe-dead-drums',
    name: 'Vintage Vibe Dead Drums',
    category: 'VINTAGE / DRUMS',
    tagline: 'SOM VINTAGEM E SECO. MORTO SÓ NO NOME, POIS É CHEIO DE PERSONALIDADE.',
    description: 'Uma bateria com aquela sonoridade abafada, seca e encorpada dos anos 70. Pouca ambiência, muito caráter e aquele timbre “dead” que simplesmente não soa como uma bateria moderna comum. Caixa e Tons com duas camadas de dinâmica para uma resposta mais natural ao tocar, mantendo a personalidade vintagem até quando você toca mais forte. Velha escola no timbre, modernidade na forma de tocar.',
    coverImage: `${base}/products/vintage-vibe.webp`,
    youtubeVideoId: null,
    price: 20,
    originalPrice: 35,
    isFree: false,
    ctaLabel: 'COMPRAR',
    checkoutUrl: null,
    featured: false,
    specs: {
      contents: 'Bumbo, Caixa, Pratos e Percussões',
      sampleCount: '20 Samples',
      format: 'WAV' ,
      resolution: '44.1kHz - 24bit + versão compatível 16bit',
      compatibility: 'Sampling Pads, Percussion Pads - SPD SX / SPSX PRO / NUX DP2000 e outros.',
      fileSize: '20 MB',
      requirements: 'Nenhum requisito específico. Compatível com qualquer DAW ou sampler que aceite arquivos WAV.',
      license: 'Uso pessoal e comercial permitido. Não é permitido redistribuir, revender ou compartilhar os arquivos de áudio em qualquer forma ou plataforma sem permissão expressa da WaveNoise Lab.',
    },
  },
  {
    id: 'wnl-vibe-80-lab',
    slug: 'vibe-80-lab',
    name: 'Vibe 80 LAB',
    category: '80s / NEW WAVE / DRUMS / FX',
    tagline: "LITERALMENTE, UMA VIAGEM NO TEMPO DIRETO PARA OS ANOS 80!",
    description: 'O som que marcou uma geração, agora no seu PAD. Uma coleção de caixas, bumbos e tons característicos dos anos 80, com gated reverbs, timbres secos, Simmons, claps e percussões eletrônicas que definiram a sonoridade da época. Perfeito para quem toca repertório dos anos 80 e 90 e quer reproduzir aquela estética inconfundível.',
    coverImage: `${base}/products/vibe-80.webp`,
    youtubeVideoId: null,
    price: 30,
    originalPrice: 50,
    isFree: false,
    ctaLabel: 'COMPRAR',
    checkoutUrl: null,
    featured: false,
    specs: {
      contents: 'Kicks, Snares, Toms, Percussões, Efeitos, Claps, Cymbals, Hi Hats, Pratos e Sons Eletrônicos',
      sampleCount: '77 Samples',
      format: 'WAV' ,
      resolution: '44.1kHz - 24bit + versão compatível 16bit',
      compatibility: 'Sampling Pads, Percussion Pads - SPD SX / SPSX PRO / NUX DP2000 e outros.',
      fileSize: '40 MB',
      requirements: 'Nenhum requisito específico. Compatível com qualquer DAW ou sampler que aceite arquivos WAV.',
      license: 'Uso pessoal e comercial permitido. Não é permitido redistribuir, revender ou compartilhar os arquivos de áudio em qualquer forma ou plataforma sem permissão expressa da WaveNoise Lab.',
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

