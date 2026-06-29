import { Landmark, Waves } from "lucide-react";

type PdfCoverProps = {
  panelNumber: number;
  title: string;
  category: string;
  orientation: "portrait" | "landscape";
  coverUrl?: string;
  active?: boolean;
};

export function PdfCover({
  panelNumber,
  title,
  category,
  orientation,
  coverUrl,
  active,
}: PdfCoverProps) {
  return (
    <div
      className={`pdf-cover pdf-cover--${orientation} ${active ? "is-active" : ""}`}
      aria-label={`Capa do memorial ${title}`}
    >
      {coverUrl ? (
        <img src={coverUrl} alt="" aria-hidden="true" />
      ) : (
        <div className="pdf-cover__fallback">
          <div className="pdf-cover__topline">
            <span>Painel</span>
            <strong>{String(panelNumber).padStart(2, "0")}</strong>
          </div>

          <div className="pdf-cover__title">
            <small>{category}</small>
            <h2>{title}</h2>
          </div>

          <footer className="pdf-cover__footer">
            <Landmark size={18} aria-hidden="true" />
            <span>Memorial Noronhense</span>
            <Waves size={16} aria-hidden="true" />
          </footer>
        </div>
      )}
    </div>
  );
}
