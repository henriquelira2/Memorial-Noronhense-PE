import { useEffect, useRef } from "react";
import { Home } from "lucide-react";
import type { Memorial } from "../types/memorial";

type MemorialIndexRailProps = {
  memoriais: Memorial[];
  activePanel: number;
  onSelect: (index: number) => void;
};

export function MemorialIndexRail({
  memoriais,
  activePanel,
  onSelect,
}: MemorialIndexRailProps) {
  const activeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    activeButtonRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activePanel]);

  return (
    <div className="index-rail-shell">
      <nav className="index-rail" aria-label="Índice de painéis">
        <button className="index-rail__home" type="button" onClick={() => onSelect(0)}>
          <Home size={15} aria-hidden="true" />
          Início
        </button>
        {memoriais.map((memorial, index) => {
          const isActive = memorial.panelNumber === activePanel;

          return (
            <button
              key={memorial.slug}
              ref={isActive ? activeButtonRef : null}
              className={isActive ? "is-active" : ""}
              type="button"
              onClick={() => onSelect(index)}
              aria-current={isActive ? "true" : undefined}
            >
              <span>Painel</span>
              {String(memorial.panelNumber).padStart(2, "0")}
            </button>
          );
        })}
      </nav>
      <span className="index-rail-shell__count">
        {memoriais.length} painéis
      </span>
    </div>
  );
}
