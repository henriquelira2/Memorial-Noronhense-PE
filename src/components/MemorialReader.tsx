import type { Memorial, MemorialSection } from "../types/memorial";

type MemorialReaderProps = {
  memorial: Memorial;
};

function renderSection(section: MemorialSection, index: number) {
  switch (section.type) {
    case "heading":
      return <h3 key={index}>{section.text}</h3>;
    case "paragraph":
      return <p key={index}>{section.text}</p>;
    case "quote":
      return (
        <blockquote key={index}>
          <p>{section.text}</p>
          {section.credit ? <cite>{section.credit}</cite> : null}
        </blockquote>
      );
    case "image":
      return (
        <figure key={index}>
          <img src={section.src} alt={section.alt} />
          {section.caption ? <figcaption>{section.caption}</figcaption> : null}
        </figure>
      );
    case "list":
      return (
        <ul key={index}>
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
  }
}

export function MemorialReader({ memorial }: MemorialReaderProps) {
  const isPublished = memorial.transcriptionStatus === "published";
  const statusLabel = {
    pending: "Transcrição em preparação",
    draft: "Transcrição em revisão",
    reviewed: "Transcrição revisada",
    published: "Transcrição publicada",
  }[memorial.transcriptionStatus];

  return (
    <article className="reader">
      <header className="reader__header">
        <span>{statusLabel}</span>
        <h2>{memorial.title}</h2>
        <p>{memorial.summary}</p>
      </header>

      {!isPublished ? (
        <div className="reader__notice" role="status">
          A versão web abaixo é uma base editorial para revisão. Use o PDF oficial
          para conferência antes de publicar a transcrição final.
        </div>
      ) : null}

      <div className="reader__body">
        {memorial.sections.map((section, index) => renderSection(section, index))}
      </div>
    </article>
  );
}
