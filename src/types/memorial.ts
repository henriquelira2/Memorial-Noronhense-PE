export type MemorialOrientation = "portrait" | "landscape";

export type TranscriptionStatus =
  | "pending"
  | "draft"
  | "reviewed"
  | "published";

export type MemorialSection =
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "quote";
      text: string;
      credit?: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    }
  | {
      type: "list";
      items: string[];
    };

export type Memorial = {
  panelNumber: number;
  title: string;
  slug: string;
  category: string;
  summary: string;
  orientation: MemorialOrientation;
  pdfUrl: string;
  coverUrl?: string;
  transcriptionStatus: TranscriptionStatus;
  tags: string[];
  sections: MemorialSection[];
};
