import type { Product } from "./types";
import { useEffect, useState } from "react";
import { productList } from "./data/products";
import { ProductCard } from "./products/components";
import { Header, Footer } from "./components/";

export function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    setProducts(productList);
  }, []);
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <header>
            <h1 id="main-title">
              Tecnología <strong>Computadoras</strong>
            </h1>
          </header>
          <div className="products">
            {products.map((product) => (
              <ProductCard product={product} key={product.id}></ProductCard>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
