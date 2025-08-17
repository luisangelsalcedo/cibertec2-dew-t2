import { SearchIcon } from "@/assets/svgs";
import { useProductStore } from "../store/product.store";
import { memo } from "react";

export const ProductSearch = memo(() => {
  const searchValue = useProductStore((state) => state.searchValue);
  const setSearchValue = useProductStore((state) => state.setSearchValue);

  return (
    <div className="search">
      <input
        type="text"
        id="searchInput"
        placeholder="Buscar productos..."
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <SearchIcon />
    </div>
  );
});
