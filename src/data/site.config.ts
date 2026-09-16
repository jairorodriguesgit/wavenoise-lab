/**
 * Configurações centrais do site WaveNoise Lab.
 * Altere aqui para refletir em todo o site.
 */
export const siteConfig = {
  /** Número de WhatsApp no formato internacional, somente dígitos */
  whatsappNumber: '556185182333',
  instagram: 'wavenoiselab',
  youtube: 'https://youtube.com/@wavenoiselabtube',
  email: 'wavenoiselab@gmail.com',
};

/** Gera um link wa.me com texto pré-preenchido */
export function buildWhatsAppUrl(text: string): string {
  const n = siteConfig.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${n}?text=${encodeURIComponent(text)}`;
}

/** Link geral — para header, footer e banners */
export function whatsAppGeneral(): string {
  return buildWhatsAppUrl(
    'Olá! Vim pelo site do Wavenoise Lab e quero saber mais sobre os sample packs.'
  );
}

/**
 * Link pré-preenchido com o nome e preço do produto.
 * Usado no BuyButton quando não há checkoutUrl configurado.
 */
export function whatsAppForProduct(productName: string, price?: number | null): string {
  if (price && price > 0) {
    const priceStr = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
    return buildWhatsAppUrl(
      `Olá! Quero comprar o ${productName} (${priceStr}). Como faço?`
    );
  }
  return buildWhatsAppUrl(
    `Olá! Tenho interesse no ${productName}. Pode me dar mais informações?`
  );
}

/** Formata o número do WhatsApp para exibição visual */
export function formatPhone(): string {
  const n = siteConfig.whatsappNumber.replace(/\D/g, '');
  const m = n.match(/^55(\d{2})(\d{4,5})(\d{4})$/);
  return m ? `+55 (${m[1]}) ${m[2]}-${m[3]}` : `+${n}`;
}
