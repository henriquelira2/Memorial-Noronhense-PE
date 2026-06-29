import type { CSSProperties } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Memorial } from "../types/memorial";
import { PdfCover } from "./PdfCover";

type MemorialCarouselProps = {
  memoriais: Memorial[];
  activeIndex: number;
  onChange: (index: number) => void;
};

type StageStyle = CSSProperties & {
  "--offset": number;
  "--abs-offset": number;
};

export function MemorialCarousel({
  memoriais,
  activeIndex,
  onChange,
}: MemorialCarouselProps) {
  const lastIndex = memoriais.length - 1;
  const midpoint = memoriais.length / 2;

  function goTo(index: number) {
    if (memoriais.length === 0) return;
    const nextIndex = (index + memoriais.length) % memoriais.length;
    onChange(Math.max(0, Math.min(nextIndex, lastIndex)));
  }

  function getCircularOffset(index: number) {
    let offset = index - activeIndex;

    if (offset > midpoint) {
      offset -= memoriais.length;
    }

    if (offset < -midpoint) {
      offset += memoriais.length;
    }

    return offset;
  }

  return (
    <section className="carousel" aria-label="Exposição dos memoriais">
      <button
        className="carousel__nav carousel__nav--prev"
        type="button"
        aria-label="Memorial anterior"
        onClick={() => goTo(activeIndex - 1)}
      >
        <ChevronLeft size={28} />
      </button>

      <div className="carousel__track" aria-live="polite">
        {memoriais.map((memorial, index) => {
          const offset = getCircularOffset(index);
          const absOffset = Math.abs(offset);

          return (
            <button
              key={memorial.slug}
              className={`carousel__item ${offset === 0 ? "is-active" : ""}`}
              style={
                {
                  "--offset": offset,
                  "--abs-offset": absOffset,
                  zIndex: 20 - absOffset,
                } as StageStyle
              }
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Selecionar painel ${memorial.panelNumber}: ${memorial.title}`}
            >
              <article className="memorial-slide">
                <PdfCover
                  panelNumber={memorial.panelNumber}
                  title={memorial.title}
                  category={memorial.category}
                  orientation="portrait"
                  coverUrl={memorial.coverUrl}
                  active={index === activeIndex}
                />
                <div className="memorial-slide__meta">
                  <span>Painel {String(memorial.panelNumber).padStart(2, "0")}</span>
                  <strong>{memorial.title}</strong>
                </div>
              </article>
            </button>
          );
        })}
      </div>

      <button
        className="carousel__nav carousel__nav--next"
        type="button"
        aria-label="Próximo memorial"
        onClick={() => goTo(activeIndex + 1)}
      >
        <ChevronRight size={28} />
      </button>
    </section>
  );
}
