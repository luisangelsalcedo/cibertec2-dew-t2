import { productList } from "@/data/products";
import type { Product } from "@/types";
import { create } from "zustand";

interface ProductStore {
  products: Product[];
  searchValue: string;
  limitValue: string;

  setProducts: (products: Product[]) => void;
  setSearchValue: (value: string) => void;
  setLimitValue: (value: string) => void;
}

export const useProductStore = create<ProductStore>()((set) => ({
  products: productList,
  searchValue: "",
  limitValue: "12",
  setProducts: (products) => set(() => ({ products })),
  setSearchValue: (value: string) => set(() => ({ searchValue: value })),
  setLimitValue: (value: string) => set(() => ({ limitValue: value })),
}));
