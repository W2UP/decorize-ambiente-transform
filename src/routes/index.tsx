import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImage from "@/assets/hero-armchair.jpg";
import versatility1 from "@/assets/versatility-1.jpg";
import versatility2 from "@/assets/versatility-2.jpg";
import detailImage from "@/assets/detail-material.jpg";
// Importando as novas fotos da fábrica
import fabrica1 from "@/assets/fabrica-1.png";
import fabrica2 from "@/assets/fabrica-2.png";
import fabrica3 from "@/assets/fabrica-3.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Decorize — Móveis que transformam ambientes" },
      {
        name: "description",
        content:
          "Móveis de design minimalista com acabamento amadeirado premium. Qualidade que transforma qualquer ambiente com excelente custo-benefício.",
      },
      { property: "og:title", content: "Decorize — Móveis que transformam ambientes" },
      {
        property: "og:description",
        content:
          "Móveis de design minimalista com acabamento amadeirado premium. Qualidade que transforma qualquer ambiente com excelente custo-benefício.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const faqs = [
  {
    q: "Qual o prazo de entrega?",
    a: "O envio é feito em até 5 dias úteis. A entrega chega entre 7 e 14 dias corridos, com rastreamento em tempo real.",
  },
  {
    q: "Como funciona a garantia de 7 dias?",
    a: "Você tem 7 dias após receber para avaliar o produto. Se não amar, devolvemos 100% do valor — sem burocracia.",
  },
  {
    q: "Posso parcelar a compra?",
    a: "Sim. Aceitamos Pix com 5% de desconto e cartão de crédito em até 12x sem juros.",
  },
  {
    q: "Preciso montar o móvel?",
    a: "O produto chega pré-montado em 70%. A montagem final leva menos de 30 minutos e não requer ferramentas especiais.",
  },
];

const depoimentos = [
  {
    nome: "Mariana S.",
    cidade: "São José do Rio Preto, SP",
    texto: "Amei a mesinha! Chegou super rápido aqui em casa e o acabamento é lindo. Vale muito mais do que custa, recomendo!"
  },
  {
    nome: "Carlos M.",
    cidade: "Mirassol, SP",
    texto: "Fiquei com receio de comprar na internet, mas o atendimento pelo WhatsApp me passou muita segurança. O móvel é perfeito para o meu quarto."
  },
  {
    nome: "Juliana R.",
    cidade: "Bady Bassitt, SP",
    texto: "Qualidade surpreendente pelo preço. A textura da madeira é super elegante e a montagem foi muito fácil. Chegou bem embalado."
  }
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      
      {/* ===== WHATSAPP FLUTUANTE ===== */}
      <a
        href="https://wa.me/5517988255123?text=Olá!%20Estou%20no%20site%20da%20Decorize%20e%20tenho%20uma%20dúvida."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(37,211,102,0.4)] transition-transform hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* ===== BARRA DE ANÚNCIO (TOP BANNER) ===== */}
      <div className="absolute inset-x-0 top-0 z-40 bg-foreground px-4 py-2 text-center text-xs font-medium tracking-wide text-background">
        🚀 Frete Expresso para São José do Rio Preto e região!
      </div>

      {/* ===== NAV ===== */}
      <header className="absolute inset-x-0 top-8 z-30">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <a href="#" className="text-lg font-semibold tracking-tight">
            Decorize
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#versatilidade" className="transition-colors hover:text-foreground">
              Versatilidade
            </a>
            <a href="#detalhes" className="transition-colors hover:text-foreground">
              Detalhes
            </a>
            <a href="#oferta" className="transition-colors hover:text-foreground">
              Oferta
            </a>
          </div>
          <a
            href="https://checkout.decorize.com.br/checkout/212048587:1"
            className="rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:border-foreground"
          >
            Comprar
          </a>
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative flex min-h-screen items-center bg-background">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-32 pb-16 md:px-10 lg:grid-cols-2 lg:gap-16 lg:pt-36">
          <div className="flex flex-col items-start">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Acabamento amadeirado premium com design minimalista
            </span>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              O detalhe que faltava para deixar
              <br />
              seu ambiente
              <br />
              <span className="text-primary">mais elegante.</span>
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
              Design minimalista com acabamento amadeirado premium e laterais robustas. 
              Uma peça única que redefine qualquer espaço com elegância e excelente custo-benefício.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://checkout.decorize.com.br/checkout/212048587:1"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-[0_8px_24px_-8px_color-mix(in_oklab,var(--primary)_55%,transparent)] transition-all hover:brightness-105 hover:shadow-[0_12px_32px_-8px_color-mix(in_oklab,var(--primary)_65%,transparent)]"
              >
                Comprar agora — R$ 79,90
              </a>
              <a
                href="#detalhes"
                className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-base font-medium text-foreground transition-colors hover:border-foreground"
              >
                Ver detalhes
              </a>
            </div>
            <p className="mt-4 text-sm font-medium text-muted-foreground">
              🔥 Preço promocional. Apenas R$ 79,90 ou em até 12x.
            </p>
            
            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex flex-col">
                <span className="text-base font-semibold text-foreground">4.9</span>
                <span>Avaliação média</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex flex-col">
                <span className="text-base font-semibold text-foreground">+2.400</span>
                <span>Ambientes transformados</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border">
              <img
                src={heroImage}
                alt="Poltrona Decorize com estrutura em madeira nogueira e assento em bouclê creme em sala minimalista"
                width={1600}
                height={1100}
                className="aspect-[4/3] w-full object-cover"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card/90 px-5 py-4 backdrop-blur md:block">
              <p className="text-xs text-muted-foreground">A partir de</p>
              <p className="text-2xl font-semibold text-foreground">
                R$ 79.90
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VERSATILIDADE ===== */}
      <section id="versatilidade" className="bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Versatilidade
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Uma peça, infinitos ambientes
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Do cantinho de leitura ao quarto sereno — a Decorize se adapta ao
              seu espaço, não o contrário.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <figure className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="overflow-hidden">
                <img
                  src={versatility1}
                  alt="Poltrona Decorize em um cantinho de leitura com estante e luz quente"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-6 py-6 md:px-8">
                <h3 className="text-lg font-semibold text-foreground">
                  Cantinho de leitura
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A luz natural da tarde encontra a textura aconchegante do acabamento. 
                  Um refúgio perfeito para os seus momentos de pausa.
                </p>
              </figcaption>
            </figure>

            <figure className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="overflow-hidden">
                <img
                  src={versatility2}
                  alt="Poltrona Decorize ao lado de uma janela em quarto minimalista com roupa de cama em linho"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-6 py-6 md:px-8">
                <h3 className="text-lg font-semibold text-foreground">
                  Quarto sereno
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Linhas limpas e tons neutros criam uma atmosfera calma. A peça
                  que fala baixo, mas transforma tudo ao redor.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ===== DETALHES ===== */}
      <section id="detalhes" className="py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[1.75rem] border border-border">
              <img
                src={detailImage}
                alt="Detalhe macro do acabamento amadeirado"
                width={1100}
                height={900}
                loading="lazy"
                className="aspect-[11/9] w-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 flex flex-col lg:order-2">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Materiais & Qualidade
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Acabamento & Qualidade feito
              <br />
              para durar
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
               Desenhada para unir funcionalidade e estilo, nossa mesa utiliza materiais de 
               alta densidade com textura amadeirada e acabamento fosco. É a combinação perfeita 
               para transformar seu ambiente com um toque moderno, sem pesar no seu bolso.
            </p>

            <ul className="mt-9 space-y-6">
              <li className="flex gap-4">
                <span className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                <div>
                  <h3 className="font-medium text-foreground">Textura Amadeirada Premium</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Superfície resistente com veios elegantes que trazem 
                    o aconchego da madeira natural. Acabamento de alta durabilidade, 
                    protegido contra o desgaste do dia a dia e super fácil de limpar.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                <div>
                  <h3 className="font-medium text-foreground">Design em Contraste (Industrial Minimalista)</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Laterais robustas em tom sólido (Preto ou Branco) que destacam as prateleiras 
                    amadeiradas. Um visual contemporâneo que se adapta perfeitamente ao lado da 
                    sua cama, sofá ou mesa de escritório.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                <div>
                  <h3 className="font-medium text-foreground">Pés Palito Retrô</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Estrutura com base elevada que, além de adicionar um charme 
                    vintage e sofisticado ao design, garante total estabilidade 
                    ao móvel e facilita a limpeza do piso do seu ambiente.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== DIRETO DA FÁBRICA ===== */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center mb-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Produção Própria
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Direto da fábrica para o seu ambiente
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada peça da Decorize é produzida com rigoroso controle de qualidade em nossa linha de produção em Catanduva/SP.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <img src={fabrica1} alt="Lotes de madeira na produção" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-foreground">Matéria-Prima Selecionada</h3>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <img src={fabrica2} alt="Estrutura fabril" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-foreground">Alta Capacidade Produtiva</h3>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <img src={fabrica3} alt="Produtos prontos para envio" className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-foreground">Envio Rápido e Seguro</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DEPOIMENTOS (PROVA SOCIAL) ===== */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Quem comprou, aprovou.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Veja o que nossos clientes estão dizendo sobre a Decorize.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {depoimentos.map((dep, idx) => (
              <div key={idx} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
                <p className="text-muted-foreground text-sm italic mb-4">"{dep.texto}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {dep.nome.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{dep.nome}</p>
                    <p className="text-xs text-muted-foreground">Comprador Verificado • {dep.cidade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OFERTA ===== */}
      <section id="oferta" className="bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Oferta de lançamento
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Leve a Decorize para casa
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_30px_80px_-40px_color-mix(in_oklab,var(--foreground)_30%,transparent)]">
            <div className="flex flex-col items-center gap-6 px-7 py-12 text-center md:px-14 md:py-16">
              <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
                Estoque limitado
              </span>

              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-light text-muted-foreground line-through">
                  R$ 107,90
                </span>
                <span className="text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
                  R$ 79,90
                </span>
              </div>
              <p className="-mt-3 text-sm text-muted-foreground">
                em até 12x no cartão
              </p>

              <div className="my-2 h-px w-full bg-border" />

              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect width="16" height="12" x="2" y="6" rx="2" /><path d="M2 10h20" /></svg>
                  Cartão em 12x
                </span>
                <span className="inline-flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2v20M5 9l7-7 7 7" /></svg>
                  Pix com 5% off
                </span>
                <span className="inline-flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  Compra protegida
                </span>
              </div>

              <a
                href="https://checkout.decorize.com.br/checkout/212048587:1"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-5 text-lg font-medium text-primary-foreground shadow-[0_10px_30px_-8px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition-all hover:brightness-105 hover:shadow-[0_16px_40px_-8px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
              >
                Comprar agora — R$ 79,90
              </a>
              <p className="text-xs text-muted-foreground">
                Garantia de 7 dias · Frete grátis para todo o Brasil
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RODAPÉ ===== */}
      <footer className="border-t border-border bg-background">
        {/* Garantia */}
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="flex flex-col items-center gap-6 rounded-[1.75rem] border border-border bg-secondary/30 px-8 py-10 text-center md:px-14">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
            </span>
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              Garantia de 7 dias
            </h3>
            <p className="max-w-xl text-muted-foreground">
              Receba, viva com a peça e avalie por 7 dias. Se a transformação do
              seu ambiente não for o que você esperava, devolvemos 100% do valor.
              Sem perguntas.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mx-auto max-w-3xl px-6 pb-20 md:px-10">
          <h3 className="mb-8 text-center text-2xl font-semibold tracking-tight text-foreground">
            Dúvidas frequentes
          </h3>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={faq.q}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-base font-medium text-foreground">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-border text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                    }`}
                  >
                    <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom bar - BLINDADO */}
        <div className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
            {/* Grid de Informações */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 border-b border-border pb-10">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Atendimento</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Segunda a Sexta: 08h às 18h</p>
                  <p>Sábado: 08h às 12h</p>
                  <p className="pt-2">Email: sac@decorize.com.br</p>
                  <p>WhatsApp: (17) 98825-5123</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Logística Segura</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Enviamos com seguro para todo o Brasil.</p>
                  <p>Centro de Distribuição:</p>
                  <p>Catanduva / SP</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Empresa Verificada</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Ambiente de pagamento 100% seguro.</p>
                  <p>Decorize Móveis e Decoração</p>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-lg font-semibold tracking-tight text-foreground">
                Decorize
              </p>
              <p className="text-sm text-muted-foreground text-center md:text-left">
                O detalhe que faltava para deixar seu ambiente mais elegante. © {new Date().getFullYear()} Decorize.
              </p>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <a href="#" className="transition-colors hover:text-foreground">
                  Instagram
                </a>
                <a href="#" className="transition-colors hover:text-foreground">
                  Termos
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}