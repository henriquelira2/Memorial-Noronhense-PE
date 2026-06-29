import { useMemo, useState } from "react";
import { Info, Moon, Waves } from "lucide-react";
import { MemorialCarousel } from "./components/MemorialCarousel";
import { MemorialDetailPanel } from "./components/MemorialDetailPanel";
import { MemorialIndexRail } from "./components/MemorialIndexRail";
import { PanelViewerModal } from "./components/PanelViewerModal";
import { PdfViewerModal } from "./components/PdfViewerModal";
import { SearchAndFilters } from "./components/SearchAndFilters";
import { memoriais } from "./data/memoriais";
import type { Memorial } from "./types/memorial";

function searchableText(memorial: Memorial) {
  return [
    memorial.panelNumber,
    memorial.title,
    memorial.category,
    memorial.summary,
    memorial.tags.join(" "),
    memorial.sections
      .map((section) => {
        if ("text" in section) return section.text;
        if ("items" in section) return section.items.join(" ");
        return "";
      })
      .join(" "),
  ]
    .join(" ")
    .toLocaleLowerCase("pt-BR");
}

function App() {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [openPanel, setOpenPanel] = useState<Memorial | null>(null);
  const [openPdf, setOpenPdf] = useState<Memorial | null>(null);

  const filteredMemoriais = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR");
    return memoriais.filter((memorial) => {
      return (
        normalizedQuery.length === 0 ||
        searchableText(memorial).includes(normalizedQuery)
      );
    });
  }, [query]);

  const safeActiveIndex = Math.min(activeIndex, Math.max(filteredMemoriais.length - 1, 0));
  const activeMemorial = filteredMemoriais[safeActiveIndex] ?? memoriais[0];

  function handleQueryChange(nextQuery: string) {
    setQuery(nextQuery);
    setActiveIndex(0);
  }

  return (
    <main className="app">
      <div className="app__backdrop" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="/" aria-label="Memorial Noronhense">
          <span>
            <Waves size={22} />
          </span>
          <strong>Memorial Noronhense</strong>
        </a>

        <div className="topbar__tools">
          <SearchAndFilters
            query={query}
            onQueryChange={handleQueryChange}
          />
          <button type="button">
            <Info size={17} />
            Sobre
          </button>
          <button type="button" aria-label="Alternar tema">
            <Moon size={17} />
            Tema
          </button>
        </div>
      </header>

      {filteredMemoriais.length > 0 ? (
        <section className="gallery-layout" id="exposicao">
          <div className="gallery-layout__stage">
            <MemorialCarousel
              memoriais={filteredMemoriais}
              activeIndex={safeActiveIndex}
              onChange={setActiveIndex}
            />
            <MemorialIndexRail
              memoriais={filteredMemoriais}
              activePanel={activeMemorial.panelNumber}
              onSelect={setActiveIndex}
            />
          </div>

          <MemorialDetailPanel
            memorial={activeMemorial}
            onOpenPanel={() => setOpenPanel(activeMemorial)}
            onOpenPdf={() => setOpenPdf(activeMemorial)}
          />
        </section>
      ) : (
        <section className="empty-state" role="status">
          <h2>Nenhum memorial encontrado</h2>
          <p>Revise a busca ou escolha outra categoria.</p>
        </section>
      )}

      <PanelViewerModal memorial={openPanel} onClose={() => setOpenPanel(null)} />
      <PdfViewerModal memorial={openPdf} onClose={() => setOpenPdf(null)} />
    </main>
  );
}

export default App;
