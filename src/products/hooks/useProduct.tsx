import { useEffect, useMemo } from "react";
import { useProductStore } from "../store/product.store";
import { productsData } from "@/data/productsData";

export function useProduct() {
  const products = useProductStore((state) => state.products);
  const setProducts = useProductStore((state) => state.setProducts);
  const searchValue = useProductStore((state) => state.searchValue);
  const limitValue = useProductStore((state) => state.limitValue);

  useEffect(() => {
    setProducts(productsData);
    console.log("card1");
  }, [setProducts]);

  const filteredList = useMemo(
    () =>
      products.filter(
        (product) =>
          product.nombre.toLowerCase().trim().includes(searchValue) ||
          product.marca.toLowerCase().trim().includes(searchValue)
      ),
    [products, searchValue]
  );

  const productsToDisplay =
    limitValue === "all"
      ? filteredList
      : filteredList.slice(0, Number(limitValue));

  return { productsToDisplay };
}
