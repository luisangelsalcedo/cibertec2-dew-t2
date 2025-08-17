import type { Product } from "@/types";
import { memo, useEffect } from "react";

interface Props {
  product: Product;
  handlerClick: (product: Product) => void;
}

export const ProductCard = memo(({ product, handlerClick }: Props) => {
  const {
    marca,
    nombre,
    vendedor,
    precioActual,
    descuento,
    precioOriginal,
    src,
  } = product;

  console.log("rerender");

  useEffect(() => {
    console.log("✅ ProductCard MONTADO o ACTUALIZADO");
  }, [product]);

  return (
    <article className="card">
      <div className="card-container">
        <div className="card-image">
          <img src={src} alt={nombre} />
        </div>
        <div className="card-info">
          <header>
            <h4>{marca}</h4>
            <h3>{nombre}</h3>
            <small>Vendido por {vendedor}</small>
          </header>
          <div className="card-price">
            <p>
              S/. {precioActual}
              <strong>-{descuento}%</strong>
            </p>
            <p>S/. {precioOriginal}</p>
          </div>
        </div>
      </div>
      <button className="btn" onClick={() => handlerClick(product)}>
        Agregar al Carro
      </button>
    </article>
  );
});
