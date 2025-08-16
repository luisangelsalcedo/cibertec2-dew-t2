import type { Product } from "@/types";
import { ProductCard } from "./ProductCard";

interface Props {
  data: Product[];
  handleClick: (product: Product) => void;
}

export function ProductGrid({ data, handleClick }: Props) {
  return (
    <div className="products">
      {data.length <= 0
        ? "No se encontraron productos disponibles"
        : data.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              handler={handleClick}
            ></ProductCard>
          ))}
    </div>
  );
}
