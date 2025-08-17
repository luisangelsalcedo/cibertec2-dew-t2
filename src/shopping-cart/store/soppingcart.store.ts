import type { Product, ShoppingCarItem } from "@/types";
import { create } from "zustand";

interface ShoppingCartStore {
  shoppingCarList: ShoppingCarItem[];
  addProductToShoppingCart: (product: Product) => void;
  totalProductCount: number;
}

export const useShoppingCartStore = create<ShoppingCartStore>((set) => ({
  shoppingCarList: [],
  totalProductCount: 0,

  addProductToShoppingCart: (product: Product) =>
    set((state) => {
      const currentList = state.shoppingCarList;
      const index = currentList.findIndex(
        (item) => item.product.id === product.id
      );

      const newList = [...currentList];

      if (index === -1) {
        newList.push({ count: 1, product });
      } else {
        newList[index] = {
          ...newList[index],
          count: newList[index].count + 1,
        };
      }

      const totalProductCount = newList.reduce(
        (sum, element) => sum + element.count,
        0
      );

      return { shoppingCarList: newList, totalProductCount };
    }),
}));
