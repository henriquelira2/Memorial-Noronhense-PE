import { ExternalLink, X } from "lucide-react";
import type { Memorial } from "../types/memorial";

type PdfViewerModalProps = {
  memorial: Memorial | null;
  onClose: () => void;
};

export function PdfViewerModal({ memorial, onClose }: PdfViewerModalProps) {
  if (!memorial) return null;

  return (
    <div className="pdf-modal" role="dialog" aria-modal="true" aria-label="PDF oficial">
      <div className="pdf-modal__bar">
        <div>
          <span>PDF oficial</span>
          <strong>
            Painel {String(memorial.panelNumber).padStart(2, "0")} ·{" "}
            {memorial.title}
          </strong>
        </div>
        <div className="pdf-modal__actions">
          <a href={memorial.pdfUrl} target="_blank" rel="noreferrer">
            <ExternalLink size={18} />
            Abrir PDF
          </a>
          <button type="button" onClick={onClose} aria-label="Fechar PDF">
            <X size={20} />
          </button>
        </div>
      </div>
      <iframe title={`PDF oficial: ${memorial.title}`} src={memorial.pdfUrl} />
    </div>
  );
}
