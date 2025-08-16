import { useEffect } from "react";
import { useProductStore } from "../store/product.store";
import { productList } from "@/data/products";

export function useProduct() {
  const products = useProductStore((state) => state.products);
  const setProducts = useProductStore((state) => state.setProducts);
  const searchValue = useProductStore((state) => state.searchValue);
  const limitValue = useProductStore((state) => state.limitValue);

  useEffect(() => {
    setProducts(productList);
    console.log("card1");
  }, [setProducts]);

  const filteredList = products.filter(
    (product) =>
      product.nombre.toLowerCase().trim().includes(searchValue) ||
      product.marca.toLowerCase().trim().includes(searchValue)
  );

  const productsToDisplay =
    limitValue === "all"
      ? filteredList
      : filteredList.slice(0, Number(limitValue));

  return { productsToDisplay };
}
