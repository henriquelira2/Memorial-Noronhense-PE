import { ExternalLink, X } from "lucide-react";
import type { Memorial } from "../types/memorial";

type PanelViewerModalProps = {
  memorial: Memorial | null;
  onClose: () => void;
};

export function PanelViewerModal({ memorial, onClose }: PanelViewerModalProps) {
  if (!memorial) return null;

  return (
    <div
      className="pdf-modal panel-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`Painel ${memorial.panelNumber}: ${memorial.title}`}
    >
      <div className="pdf-modal__bar">
        <div>
          <span>Painel original</span>
          <strong>
            Painel {String(memorial.panelNumber).padStart(2, "0")} ·{" "}
            {memorial.title}
          </strong>
        </div>
        <div className="pdf-modal__actions">
          <a href={memorial.pdfUrl} target="_blank" rel="noreferrer">
            <ExternalLink size={18} />
            Abrir em nova aba
          </a>
          <button type="button" onClick={onClose} aria-label="Fechar painel">
            <X size={20} />
          </button>
        </div>
      </div>
      <iframe title={`Painel original: ${memorial.title}`} src={memorial.pdfUrl} />
    </div>
  );
}
