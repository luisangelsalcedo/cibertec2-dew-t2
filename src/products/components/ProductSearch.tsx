import { SearchIcon } from "@/assets/svgs";

interface Props {
  value: string;
  handler: (value: string) => void;
}

export function ProductSearch({ value, handler }: Props) {
  return (
    <div className="search">
      <input
        type="text"
        id="searchInput"
        placeholder="Buscar productos..."
        onChange={(e) => handler(e.target.value)}
        value={value}
      />
      <SearchIcon />
    </div>
  );
}
