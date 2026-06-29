import { FileText, Landmark, PanelTop } from "lucide-react";
import type { Memorial } from "../types/memorial";

type MemorialDetailPanelProps = {
  memorial: Memorial;
  onOpenPanel: () => void;
  onOpenPdf: () => void;
};

export function MemorialDetailPanel({
  memorial,
  onOpenPanel,
  onOpenPdf,
}: MemorialDetailPanelProps) {
  return (
    <aside className="detail" aria-label="Detalhes do memorial selecionado">
      <div className="detail__number">
        Painel {String(memorial.panelNumber).padStart(2, "0")}
      </div>
      <h1>{memorial.title}</h1>

      <div className="detail__category">
        <Landmark size={20} aria-hidden="true" />
        <div>
          <span>Categoria</span>
          <strong>{memorial.category}</strong>
        </div>
      </div>

      <p>{memorial.summary}</p>

      <div className="detail__actions" aria-label="Ações do memorial">
        <button
          type="button"
          className="detail__primary"
          onClick={onOpenPanel}
        >
          <PanelTop size={17} />
          Ver painel
        </button>
        <button
          type="button"
          onClick={onOpenPdf}
        >
          <FileText size={17} />
          Abrir PDF
        </button>
      </div>
    </aside>
  );
}
