import type { Product, ShoppingCarItem } from "./types";
import { useEffect, useState } from "react";
import {
  Header,
  Footer,
  MainTitle,
  ColorfulTitle,
  Container,
} from "./components";

import { ProductGrid } from "./products/components/ProductGrid";
import { useProduct } from "./products/hooks/useProduct";

export function App() {
  const { productsToDisplay } = useProduct();
  const [totalProductCount, setTotalProductCount] = useState(0);
  const [shoppingCarList, setShoppingCarList] = useState<ShoppingCarItem[]>([]);

  useEffect(() => {
    setTotalProductCount(
      shoppingCarList.reduce((accumulator, item) => accumulator + item.count, 0)
    );
  }, [shoppingCarList]);

  const addProductoToShoppingCar = (product: Product) => {
    const index = shoppingCarList.findIndex(
      (productCar) => productCar.product.id == product.id
    );

    if (index > -1) {
      const carsClone = [...shoppingCarList];
      carsClone[index].count++;

      setShoppingCarList(carsClone);
    } else {
      setShoppingCarList((state) => [...state, { count: 1, product }]);
    }
  };

  return (
    <>
      <Header totalProductCount={totalProductCount} />
      <main>
        <Container>
          <MainTitle>
            <ColorfulTitle>
              Tecnología <strong>Computadoras</strong>
            </ColorfulTitle>
          </MainTitle>
          <ProductGrid
            data={productsToDisplay}
            handleClick={addProductoToShoppingCar}
          />
        </Container>
      </main>
      <Footer />
    </>
  );
}
