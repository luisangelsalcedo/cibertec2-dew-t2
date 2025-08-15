import type { Product } from "@/types";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const {
    marca,
    nombre,
    vendedor,
    precioActual,
    descuento,
    precioOriginal,
    src,
  } = product;
  return (
    <article className="card">
      <div className="card-container">
        <div className="card-info">
          {/* createTitle */}
          <header>
            <h4>{marca}</h4>
            <h3>{nombre}</h3>
            <small>Vendido por {vendedor}</small>
          </header>
          {/* createPrice */}
          <div className="card-price">
            <p>
              S/. {precioActual}
              <strong>-{descuento}%</strong>
            </p>
            <p>S/. {precioOriginal}</p>
          </div>
          {/* createImage */}
          <div className="card-image">
            <img src={src} alt={nombre} />
          </div>
          {/* createButton */}
          <button className="btn">Agregar al Carro</button>
        </div>
      </div>
    </article>
  );
}
