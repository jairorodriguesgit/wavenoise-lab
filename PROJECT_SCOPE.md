# WaveNoise Lab — Website MVP

## 1. Objetivo

Criar um website moderno, minimalista e visualmente profissional para a **WaveNoise Lab**, uma marca de samples e recursos sonoros voltados principalmente para bateristas, produtores musicais e músicos.

O site será inicialmente uma **vitrine de produtos digitais**, com possibilidade de compra e entrega automática dos arquivos.

O objetivo do MVP é validar a venda dos primeiros sample packs com o menor custo e complexidade possíveis.

O site NÃO deve parecer um template genérico de IA, uma landing page corporativa ou uma loja virtual genérica.

A identidade deve transmitir:

* áudio;
* bateria;
* produção musical;
* samples;
* equipamento;
* laboratório/criação sonora;
* estética profissional;
* simplicidade;
* personalidade.

---

# 2. Escopo inicial

O MVP terá inicialmente 5 produtos:

1. Free Altar Worship FX Samples
2. Altar Drum Samples
3. Modern Metal
4. Vintage Vibe Dead Drums
5. Vibe 80 LAB

Novos produtos deverão poder ser adicionados posteriormente sem necessidade de alterar a estrutura principal do site.

---

# 3. Público

Principalmente:

* bateristas;
* produtores musicais;
* músicos;
* usuários de módulos e pads eletrônicos;
* usuários de sample packs;
* produtores de Worship;
* produtores de Rock/Metal;
* produtores interessados em sonoridades Vintage/80s.

O visitante provavelmente chegará ao site através de um vídeo no YouTube.

Portanto, o site precisa funcionar muito bem quando o usuário chega **diretamente na página de um produto específico**.

---

# 4. Fluxo principal do usuário

O fluxo esperado é:

YouTube
→ link na descrição
→ página específica do produto
→ visualização das informações
→ vídeo de demonstração
→ botão de compra
→ pagamento
→ confirmação
→ entrega do produto digital

O usuário não deve precisar entrar na página inicial para encontrar o produto apresentado no vídeo.

Cada produto deverá possuir uma URL própria.

Exemplo:

`/products/modern-metal`

ou estrutura equivalente.

---

# 5. Estrutura do site

## Home

A página inicial deve apresentar a WaveNoise Lab e seus produtos.

Estrutura aproximada:

### Header

Logo:

WAVENOISE LAB

Navegação simples:

* Samples
* Free
* Sobre

Não utilizar menus complexos.

---

### Hero

Uma apresentação curta da marca.

Não utilizar textos genéricos de marketing gerados por IA.

A comunicação deve ser curta, direta e relacionada a samples, bateria e produção musical.

O design deve priorizar a identidade visual e os produtos.

---

### Produtos

Grid visual contendo os packs.

Cada produto deve apresentar:

* capa;
* nome;
* categoria;
* indicação de preço ou FREE;
* possibilidade de clicar para abrir a página do produto.

As capas devem ser visualmente importantes.

---

### Free Pack

Destacar o produto gratuito:

Free Altar Worship FX Samples

O objetivo é permitir que visitantes experimentem um produto da WaveNoise Lab sem precisar comprar.

---

### Footer

Informações simples:

* WaveNoise Lab
* YouTube
* Instagram, caso seja utilizado
* contato
* termos
* privacidade

Não criar excesso de links.

---

# 6. Página de produto

Cada produto terá uma página própria.

Exemplo:

`/products/modern-metal`

Estrutura:

## Capa

Imagem grande do produto.

## Nome

MODERN METAL

## Categoria

DRUM SAMPLE PACK

## Descrição

Descrição curta e objetiva do produto.

Evitar textos longos e marketing exagerado.

---

## Vídeo de demonstração

O vídeo será hospedado no YouTube.

A página deverá incorporar o vídeo do YouTube.

O vídeo deve demonstrar os samples **dentro de um contexto musical**, e não como samples isolados.

Não criar player próprio de áudio neste MVP.

Não disponibilizar samples individuais para audição/download.

---

## Informações do produto

Mostrar de forma clara:

* conteúdo;
* quantidade de samples;
* formato;
* resolução;
* compatibilidade;
* tamanho aproximado do download;
* eventuais requisitos;
* licença de uso.

Essas informações devem ser facilmente editáveis.

---

## Preço

Exemplo:

R$ XX,XX

Para produtos gratuitos:

FREE

---

## Botão de compra

Botão principal e visualmente destacado:

COMPRAR

Para produto gratuito:

DOWNLOAD GRÁTIS

O sistema de pagamento/entrega deverá ser desacoplado do frontend sempre que possível.

---

# 7. Produtos iniciais

## Free Altar Worship FX Samples

Categoria:

FREE / WORSHIP / FX

Produto gratuito utilizado também como porta de entrada para a marca.

---

## Altar Drum Samples

Categoria:

WORSHIP / DRUMS

Sample pack de bateria voltado para Worship.

---

## Modern Metal

Categoria:

METAL / DRUMS

Sample pack voltado para sonoridades modernas de Metal.

---

## Vintage Vibe Dead Drums

Categoria:

VINTAGE / DRUMS

Sample pack com estética de bateria seca/dead e sonoridade vintage.

---

## Vibe 80 LAB

Categoria:

80s / NEW WAVE / DRUMS / FX

Sample pack inspirado em sonoridades de bateria e produção dos anos 80.

---

# 8. Produtos relacionados

Na página de cada produto, apresentar outros produtos da WaveNoise Lab.

Exemplo:

"Mais da WaveNoise Lab"

Mostrar 3 ou 4 produtos.

Isso é importante porque o visitante pode chegar diretamente pelo link de um vídeo do YouTube.

O produto apresentado no vídeo deve ser o foco da página, mas os demais produtos devem estar claramente visíveis.

---

# 9. Design

## Direção visual

O site deve parecer uma marca real de áudio, e não um site criado automaticamente por IA.

Prioridades:

1. Tipografia
2. Capas dos produtos
3. Espaçamento
4. Hierarquia visual
5. Contraste
6. Navegação simples
7. Responsividade

Evitar:

* excesso de gradientes;
* excesso de sombras;
* efeitos neon genéricos;
* animações exageradas;
* cards arredondados em excesso;
* ícones aleatórios;
* textos corporativos genéricos;
* estética "AI startup";
* excesso de elementos na tela.

A estética deve ser contemporânea, musical e profissional.

Pode utilizar referências visuais de:

* equipamentos de áudio;
* estúdios;
* sample libraries;
* drum machines;
* sintetizadores;
* capas de discos;
* interfaces musicais.

Não copiar visualmente nenhuma marca existente.

---

# 10. Responsividade

O site deve ser desenvolvido pensando primeiro em desktop e celular.

O celular é especialmente importante porque muitos usuários chegarão através do YouTube no smartphone.

Garantir:

* capas legíveis;
* botões grandes;
* vídeo responsivo;
* textos legíveis;
* navegação simples;
* checkout acessível;
* carregamento rápido.

---

# 11. Arquitetura técnica

A tecnologia deve ser escolhida priorizando:

* baixo custo;
* facilidade de manutenção;
* facilidade de edição com auxílio de IA;
* possibilidade de hospedagem barata;
* bom desempenho;
* possibilidade de expansão futura.

Evitar criar infraestrutura desnecessária.

Não criar backend complexo caso uma solução externa consiga resolver pagamentos e entrega digital.

O frontend deve ser organizado de forma que produtos possam ser adicionados/editados facilmente.

---

# 12. Estrutura de dados dos produtos

Os produtos devem ser tratados como dados, e não como páginas totalmente codificadas manualmente.

Cada produto deverá possuir pelo menos:

```text
id
slug
name
category
description
coverImage
youtubeVideoId
price
isFree
contents
format
compatibility
fileSize
license
downloadUrl
featured
```

Exemplo:

```text
name: Modern Metal
slug: modern-metal
category: Metal / Drums
price: 39.90
isFree: false
youtubeVideoId: XXXXX
featured: true
```

A estrutura deve permitir adicionar um novo produto alterando apenas os dados necessários.

---

# 13. Imagens

As capas dos produtos devem ser arquivos independentes.

Não embutir imagens diretamente no código.

Utilizar uma estrutura semelhante a:

```text
/assets
    /products
        altar-worship-fx.webp
        altar-drums.webp
        modern-metal.webp
        vintage-vibe.webp
        vibe-80-lab.webp
```

Utilizar WebP ou outro formato moderno quando apropriado.

O site deve utilizar imagens otimizadas para carregamento rápido.

---

# 14. Vídeos

Os vídeos serão hospedados no YouTube.

O site deve receber apenas o ID do vídeo.

Exemplo:

```text
youtubeVideoId: XXXXX
```

Não hospedar os vídeos diretamente no servidor do site.

---

# 15. Pagamento e entrega

O MVP deve priorizar uma solução de baixo custo.

Não desenvolver um sistema próprio de pagamento.

Utilizar uma plataforma externa para:

* pagamento;
* confirmação;
* envio do produto;
* eventualmente emissão do link de download;
* e-mail automático.

O site deverá ser preparado para integrar essa solução sem necessidade de reescrever toda a interface.

---

# 16. Segurança dos arquivos

Os arquivos ZIP dos produtos pagos NÃO devem ficar expostos publicamente em uma pasta acessível diretamente pelo frontend.

Não colocar links permanentes dos arquivos pagos no código-fonte.

O processo de entrega deverá utilizar uma solução que permita controlar o acesso aos arquivos.

Para o MVP, pode ser utilizada uma plataforma externa especializada em produtos digitais.

---

# 17. Produto gratuito

O produto gratuito poderá utilizar um fluxo simplificado.

Possibilidades:

* download direto;
* formulário simples;
* checkout gratuito;
* entrega por e-mail.

A solução escolhida deve priorizar simplicidade e baixo custo.

---

# 18. SEO básico

Cada produto deverá possuir:

* title;
* meta description;
* URL amigável;
* Open Graph image;
* nome do produto;
* descrição;
* imagem de capa.

Exemplo:

`WaveNoise Lab — Modern Metal Drum Sample Pack`

As páginas devem ser indexáveis por mecanismos de busca.

---

# 19. Compartilhamento

Quando uma página de produto for compartilhada em WhatsApp, Instagram, Facebook, Discord etc., deve apresentar:

* imagem da capa;
* nome do produto;
* descrição curta;
* domínio WaveNoise Lab.

Configurar corretamente Open Graph.

---

# 20. Analytics

O MVP deve permitir futuramente a instalação de analytics.

Não é necessário implementar uma solução complexa inicialmente.

A arquitetura deve permitir adicionar:

* Google Analytics;
* Google Search Console;
* Meta Pixel, caso necessário;
* eventos de clique;
* conversões.

---

# 21. Performance

Priorizar:

* carregamento rápido;
* imagens otimizadas;
* poucos scripts externos;
* poucas dependências;
* lazy loading de imagens;
* vídeo carregado de maneira eficiente;
* bom desempenho em celular.

Não adicionar bibliotecas apenas por estética.

---

# 22. Acessibilidade

Implementar pelo menos:

* contraste adequado;
* textos alternativos nas imagens;
* botões semanticamente corretos;
* navegação básica por teclado;
* títulos hierárquicos;
* links identificáveis;
* boa legibilidade.

---

# 23. Estrutura de URLs

Preferir URLs simples.

Exemplo:

```text
/
 /products
 /products/modern-metal
 /products/altar-drum-samples
 /products/vintage-vibe-dead-drums
 /products/vibe-80-lab
 /products/free-altar-worship-fx
 /about
 /contact
 /terms
 /privacy
```

Se houver uma solução melhor para a tecnologia escolhida, ela pode ser utilizada, desde que mantenha URLs amigáveis.

---

# 24. Compartilhamento direto pelo YouTube

O site deve ser projetado considerando este fluxo:

```text
YouTube
    ↓
Vídeo "Modern Metal"
    ↓
Descrição
    ↓
WaveNoise Lab /products/modern-metal
    ↓
Produto
    ↓
Vídeo demo
    ↓
Comprar
```

O visitante não deve ser obrigado a navegar pela home.

---

# 25. Administração

No MVP, NÃO é necessário desenvolver um painel administrativo próprio.

A alteração dos produtos pode inicialmente ser feita através de:

* arquivos de dados;
* CMS simples;
* configuração;
* ou outra solução fácil de editar.

O objetivo é reduzir custo e complexidade.

Um painel administrativo poderá ser criado futuramente caso a quantidade de produtos justifique.

---

# 26. Conteúdo temporário

Como alguns vídeos e produtos ainda estarão sendo produzidos, utilizar placeholders claramente identificados durante o desenvolvimento.

Exemplo:

```text
VIDEO_PLACEHOLDER
COVER_PLACEHOLDER
PRICE_PLACEHOLDER
DESCRIPTION_PLACEHOLDER
```

Não inventar conteúdo definitivo.

---

# 27. O que NÃO construir no MVP

Não implementar inicialmente:

* cadastro obrigatório de usuários;
* login;
* área do cliente;
* assinatura;
* marketplace;
* comentários;
* avaliações;
* fórum;
* sistema de afiliados;
* carrinho complexo;
* player próprio de samples;
* preview individual dos samples;
* sistema próprio de pagamento;
* sistema próprio de entrega de arquivos;
* painel administrativo complexo;
* aplicativo;
* blog;
* sistema de newsletter complexo.

Tudo isso poderá ser considerado posteriormente.

---

# 28. Prioridade de desenvolvimento

A implementação deve seguir esta ordem:

## Fase 1 — Fundação

* projeto;
* estrutura;
* identidade visual;
* fontes;
* cores;
* layout;
* responsividade.

## Fase 2 — Produtos

* modelo de produto;
* grid;
* páginas individuais;
* URLs;
* produtos relacionados.

## Fase 3 — Mídia

* capas;
* YouTube;
* Open Graph.

## Fase 4 — Compra

* integração com solução de pagamento;
* botão de compra;
* produto gratuito.

## Fase 5 — Entrega

* confirmação;
* e-mail;
* download;
* proteção dos arquivos.

## Fase 6 — SEO e analytics

* metadata;
* sitemap;
* analytics;
* Search Console.

---

# 29. Regra importante para a IA que estiver desenvolvendo o projeto

Não modificar grandes partes do projeto sem necessidade.

Antes de adicionar uma biblioteca ou serviço, avaliar se a funcionalidade pode ser implementada utilizando o que já existe.

Não transformar uma página simples em uma aplicação complexa.

Priorizar código:

* simples;
* legível;
* modular;
* documentado quando necessário;
* fácil de modificar por outro desenvolvedor ou por outra IA.

Sempre explicar quais arquivos foram alterados.

Quando uma mudança for solicitada, alterar somente o necessário.

Não substituir a arquitetura inteira por uma tecnologia diferente sem autorização.

---

# 30. Resultado esperado do MVP

Ao final da primeira versão, deve ser possível:

1. acessar a home;
2. visualizar os cinco produtos;
3. clicar em qualquer produto;
4. acessar uma URL individual;
5. visualizar capa;
6. visualizar informações;
7. assistir ao vídeo demo;
8. visualizar preço;
9. comprar um produto;
10. receber o produto digital após pagamento;
11. acessar o produto gratuito;
12. navegar para outros produtos;
13. acessar o site perfeitamente pelo celular;
14. compartilhar uma página de produto e obter uma prévia visual correta.

---

# 31. Filosofia do projeto

O site deve ser pequeno, rápido e bonito.

A WaveNoise Lab deve parecer uma **marca de áudio independente e especializada**, não uma grande empresa tentando parecer tecnológica.

O produto é o protagonista.

As capas, os vídeos e os samples devem vender o produto.

O site deve apenas remover obstáculos entre o visitante e a compra.

**Menos funcionalidades. Mais personalidade.**
