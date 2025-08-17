import { ProductCard } from "./ProductCard";
import { useProduct } from "../hooks/useProduct";
import { useShoppingCart } from "@/shopping-cart/hooks/useShoppingcart";
import { memo, useCallback } from "react";
import type { Product } from "@/types";

export const ProductGrid = memo(() => {
  const { productsToDisplay } = useProduct();
  const { addProductToShoppingCart } = useShoppingCart();

  const addProduct = useCallback(
    (product: Product) => {
      addProductToShoppingCart(product);
    },
    [addProductToShoppingCart]
  );

  return (
    <div className="products">
      {productsToDisplay.length <= 0
        ? "No se encontraron productos disponibles"
        : productsToDisplay.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handlerClick={addProduct}
            ></ProductCard>
          ))}
    </div>
  );
});
