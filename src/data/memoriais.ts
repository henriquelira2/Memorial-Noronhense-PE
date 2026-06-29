import type { Memorial, MemorialSection } from "../types/memorial";

const pdfBase = "/memoriais/pdfs";

type MemorialSource = {
  panelNumber: number;
  file: string;
  title: string;
};

const sources: MemorialSource[] = [
  {
    panelNumber: 1,
    file: "painel-01-espaco-cultural-americo-vespucio-apresentacao-do-memorial.pdf",
    title: "Espaço Cultural Américo Vespúcio - Apresentação do Memorial",
  },
  { panelNumber: 2, file: "painel-02-mapa-de-localizacao.pdf", title: "Mapa de localização" },
  {
    panelNumber: 3,
    file: "painel-03-periodos-historicos-de-fn-linha-do-tempo.pdf",
    title: "Períodos históricos de FN - linha do tempo",
  },
  {
    panelNumber: 4,
    file: "painel-04-dirigentes-de-fernando-de-noronha.pdf",
    title: "Dirigentes de Fernando de Noronha",
  },
  {
    panelNumber: 5,
    file: "painel-05-o-descobrimento-doacao-como-capitania.pdf",
    title: "O Descobrimento - Doação como Capitania",
  },
  {
    panelNumber: 6,
    file: "painel-06-o-descobrimento-americo-vespucio.pdf",
    title: "O Descobrimento - Américo Vespúcio",
  },
  { panelNumber: 7, file: "painel-07-toponimia-da-ilha.pdf", title: "Toponímia da ilha" },
  { panelNumber: 8, file: "painel-08-cartografia.pdf", title: "Cartografia" },
  {
    panelNumber: 9,
    file: "painel-09-evolucao-urbana-vila-dos-remedios-1845.pdf",
    title: "Evolução Urbana - Vila dos Remédios 1845",
  },
  {
    panelNumber: 10,
    file: "painel-10-evolucao-urbana-c-foto-de-d-helder.pdf",
    title: "Evolução Urbana - foto de D. Helder",
  },
  {
    panelNumber: 11,
    file: "painel-11-evolucao-urbana-c-fotos-de-armazem-e-almoxarifado.pdf",
    title: "Evolução Urbana - armazém e almoxarifado",
  },
  {
    panelNumber: 12,
    file: "painel-12-vila-da-quixaba-ou-sambaquixaba-c-aquarela-do-casario-em-azul.pdf",
    title: "Vila da Quixaba ou Sambaquixaba - aquarela do casario",
  },
  {
    panelNumber: 13,
    file: "painel-13-curvas-vila-da-quixaba-ou-sambaquixaba-casario.pdf",
    title: "Vila da Quixaba ou Sambaquixaba - casario",
  },
  {
    panelNumber: 14,
    file: "painel-14-sistema-defensivo-c-planta-de-jose-fernandes-portugal-1798.pdf",
    title: "Sistema Defensivo - planta de José Fernandes Portugal, 1798",
  },
  { panelNumber: 15, file: "painel-15-sistema-defensivo.pdf", title: "Sistema Defensivo" },
  { panelNumber: 16, file: "painel-16-curvas.pdf", title: "Curvas" },
  {
    panelNumber: 17,
    file: "painel-17-sistema-defensivo-c-forte-de-s-joao-baptista.pdf",
    title: "Sistema Defensivo - Forte de S. João Baptista",
  },
  {
    panelNumber: 18,
    file: "painel-18-presenca-francesa-c-carta-gravada-de-1738.pdf",
    title: "Presença Francesa - carta gravada de 1738",
  },
  {
    panelNumber: 19,
    file: "painel-19-presenca-francesa-c-foto-do-chale-submarino-francez.pdf",
    title: "Presença Francesa - chalé Submarino Francez",
  },
  {
    panelNumber: 20,
    file: "painel-20-presenca-holandesa-c-carta-nautica-do-atlantico.pdf",
    title: "Presença Holandesa - carta náutica do Atlântico",
  },
  {
    panelNumber: 21,
    file: "painel-21-presenca-holandesa-cronologia.pdf",
    title: "Presença Holandesa - Cronologia",
  },
  {
    panelNumber: 22,
    file: "painel-22-presenca-italiana-c-vista-da-vila-do-itaucable.pdf",
    title: "Presença Italiana - vista da Vila do Itaucable",
  },
  {
    panelNumber: 23,
    file: "painel-23-presenca-italiana-c-edificacao-principal-da-vila-do-itaucable.pdf",
    title: "Presença Italiana - edificação principal da Vila do Itaucable",
  },
  {
    panelNumber: 24,
    file: "painel-24-presenca-americana-primeira-ocupacao.pdf",
    title: "Presença Americana - primeira ocupação",
  },
  {
    panelNumber: 25,
    file: "painel-25-presenca-americana-c-foto-do-dirigivel.pdf",
    title: "Presença Americana - dirigível",
  },
  {
    panelNumber: 26,
    file: "painel-26-presenca-americana-segunda-ocupacao-c-morro-do-pico.pdf",
    title: "Presença Americana - segunda ocupação e Morro do Pico",
  },
  {
    panelNumber: 27,
    file: "painel-27-presenca-americana-segunda-ocupacao-c-foto-de-autoridades.pdf",
    title: "Presença Americana - segunda ocupação e autoridades",
  },
  {
    panelNumber: 28,
    file: "painel-28-presenca-americana-segunda-ocupacao-c-aviao-da-us-air.pdf",
    title: "Presença Americana - segunda ocupação e avião da US Air",
  },
  {
    panelNumber: 29,
    file: "painel-29-presenca-inglesa-c-foto-de-charles-darwin.pdf",
    title: "Presença Inglesa - Charles Darwin",
  },
  {
    panelNumber: 31,
    file: "painel-31-presidio-comum-c-presos-respondendo-a-chamada.pdf",
    title: "Presídio Comum - presos respondendo à chamada",
  },
  {
    panelNumber: 32,
    file: "painel-32-curvas-presidio-politico-eventual.pdf",
    title: "Presídio Político Eventual",
  },
  {
    panelNumber: 33,
    file: "painel-33-presidio-politico-oficial-1940-c-presos-de-calcao.pdf",
    title: "Presídio Político Oficial 1940 - presos de calção",
  },
  {
    panelNumber: 34,
    file: "painel-34-presidio-politicos-oficial-1938-1942-c-preso-de-roupa-listrada.pdf",
    title: "Presídio Político Oficial 1938-1942 - preso de roupa listrada",
  },
  {
    panelNumber: 35,
    file: "painel-35-presidio-politico-especial-64-com-fotos-de-alguns-dos-presos.pdf",
    title: "Presídio Político Especial 64 - alguns presos",
  },
  {
    panelNumber: 36,
    file: "painel-36-presidio-politico-especial-64-c-foto-de-miguel-arraes.pdf",
    title: "Presídio Político Especial 64 - Miguel Arraes",
  },
  {
    panelNumber: 38,
    file: "painel-38-sistema-de-defesa-do-seculo-xx-c-bateria-de-metralhadoras.pdf",
    title: "Sistema de Defesa do Século XX - bateria de metralhadoras",
  },
  {
    panelNumber: 39,
    file: "painel-39-sistema-de-defesa-do-seculo-xx.pdf",
    title: "Sistema de Defesa do Século XX",
  },
  {
    panelNumber: 40,
    file: "painel-40-territorio-federal-solenidade-civica.pdf",
    title: "Território Federal - solenidade cívica",
  },
  {
    panelNumber: 41,
    file: "painel-41-territorio-federal-grupo-escolar-major-costa.pdf",
    title: "Território Federal - Grupo Escolar Major Costa",
  },
  { panelNumber: 42, file: "painel-42-reintegracao-a-pe.pdf", title: "Reintegração a PE" },
  {
    panelNumber: 43,
    file: "painel-43-patrimonio-imaterial-lendas-alamoa.pdf",
    title: "Patrimônio Imaterial - Lendas: Alamoa",
  },
  {
    panelNumber: 44,
    file: "painel-44-patrimonio-imaterial-lendas-cap-kid.pdf",
    title: "Patrimônio Imaterial - Lendas: Cap Kid",
  },
  {
    panelNumber: 45,
    file: "painel-45-patrimonio-imaterial-lendas-cacimba-do-padre.pdf",
    title: "Patrimônio Imaterial - Lendas: Cacimba do Padre",
  },
  {
    panelNumber: 46,
    file: "painel-46-cotidiano-de-muitas-epocas-arte-como-forma-de-lazer.pdf",
    title: "Cotidiano de muitas épocas - arte como forma de lazer",
  },
  {
    panelNumber: 48,
    file: "painel-48-cotidiano-cemiterio-em-azul.pdf",
    title: "Cotidiano - Cemitério em azul",
  },
  {
    panelNumber: 49,
    file: "painel-49-aviacao-desenho-da-ilha-c-pista-de-aviacao.pdf",
    title: "Aviação - desenho da ilha e pista de aviação",
  },
  { panelNumber: 50, file: "painel-50-aviacao-cruzador-alemao.pdf", title: "Aviação - cruzador alemão" },
  {
    panelNumber: 51,
    file: "painel-51-navegacao-vista-do-armazem-e-rampa-de-desembarque-compressed.pdf",
    title: "Navegação - armazém e rampa de desembarque",
  },
  { panelNumber: 52, file: "painel-52-navegacao-navio-navarino.pdf", title: "Navegação - navio Navarino" },
  { panelNumber: 55, file: "painel-55-fn-hoje-escola-bem-me-quer.pdf", title: "FN Hoje - escola Bem me quer" },
  { panelNumber: 56, file: "painel-56-mapa-turistico-fn.pdf", title: "Mapa Turístico FN" },
  {
    panelNumber: 57,
    file: "painel-57-parque-nacional-marinho-zoneamento-agroecologico.pdf",
    title: "Parque Nacional Marinho - zoneamento agroecológico",
  },
  {
    panelNumber: 58,
    file: "painel-58-parque-nacional-marinho-diploma-da-unesco.pdf",
    title: "Parque Nacional Marinho - diploma da UNESCO",
  },
];

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function categoryFor(title: string) {
  const normalized = slugify(title);

  if (normalized.includes("mapa") || normalized.includes("cartografia") || normalized.includes("toponimia")) {
    return "Território";
  }
  if (normalized.includes("evolucao-urbana") || normalized.includes("vila-da-quixaba")) {
    return "Urbanismo";
  }
  if (normalized.includes("sistema-defensivo") || normalized.includes("sistema-de-defesa")) {
    return "Defesa";
  }
  if (normalized.includes("presenca")) {
    return "Presenças estrangeiras";
  }
  if (normalized.includes("presidio")) {
    return "Presídio";
  }
  if (normalized.includes("territorio-federal") || normalized.includes("reintegracao")) {
    return "Administração";
  }
  if (normalized.includes("patrimonio-imaterial")) {
    return "Patrimônio imaterial";
  }
  if (normalized.includes("cotidiano")) {
    return "Cotidiano";
  }
  if (normalized.includes("aviacao")) {
    return "Aviação";
  }
  if (normalized.includes("navegacao")) {
    return "Navegação";
  }
  if (normalized.includes("parque-nacional")) {
    return "Patrimônio natural";
  }
  if (normalized.includes("descobrimento") || normalized.includes("americo-vespucio")) {
    return "História e cultura";
  }

  return "Memorial";
}

function summaryFor(title: string, category: string) {
  return `Painel do Memorial Noronhense sobre ${title}, na categoria ${category}.`;
}

function sectionsFor(title: string, category: string): MemorialSection[] {
  return [
    {
      type: "paragraph",
      text: `Transcrição web pendente para o painel "${title}". Use o PDF oficial como fonte de conferência.`,
    },
    {
      type: "list",
      items: [
        "Extrair ou transcrever o conteúdo do PDF.",
        "Revisar nomes próprios, datas, legendas e créditos.",
        "Publicar a versão web após conferência editorial.",
      ],
    },
    {
      type: "paragraph",
      text: `Categoria sugerida: ${category}.`,
    },
  ];
}

export const memoriais: Memorial[] = sources.map((source) => {
  const category = categoryFor(source.title);

  return {
    panelNumber: source.panelNumber,
    title: source.title,
    slug: slugify(`${source.panelNumber}-${source.title}`),
    category,
    summary: summaryFor(source.title, category),
    orientation: "portrait",
    pdfUrl: `${pdfBase}/${source.file}`,
    transcriptionStatus: "pending",
    tags: [category.toLowerCase(), ...source.title.toLowerCase().split(/\s+/).slice(0, 5)],
    sections: sectionsFor(source.title, category),
  };
});
