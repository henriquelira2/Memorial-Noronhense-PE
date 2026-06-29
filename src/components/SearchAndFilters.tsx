import { Search } from "lucide-react";

type SearchAndFiltersProps = {
  query: string;
  onQueryChange: (query: string) => void;
};

export function SearchAndFilters({
  query,
  onQueryChange,
}: SearchAndFiltersProps) {
  return (
    <section className="search" aria-label="Busca">
      <label className="search__field">
        <Search aria-hidden="true" size={18} />
        <span className="sr-only">Buscar memorial</span>
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Pesquisar"
        />
      </label>
    </section>
  );
}
