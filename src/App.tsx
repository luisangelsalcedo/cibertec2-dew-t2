import type { Product, ShoppingCarItem } from "./types";
import { useEffect, useState } from "react";
import { productList } from "./data/products";
import {
  Header,
  Footer,
  MainTitle,
  ColorfulTitle,
  Container,
} from "./components";

import { ProductGrid } from "./products/components/ProductGrid";

export function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [limitValue, setLimitValue] = useState("12");
  const [totalProductCount, setTotalProductCount] = useState(0);
  const [shoppingCarList, setShoppingCarList] = useState<ShoppingCarItem[]>([]);

  useEffect(() => {
    setProducts(productList);
    console.log("card1");
  }, []);

  useEffect(() => {
    setTotalProductCount(
      shoppingCarList.reduce((accumulator, item) => accumulator + item.count, 0)
    );
  }, [shoppingCarList]);

  const handleSearchInput = (value: string) => {
    setSearchValue(value);
  };
  const handleLimitSelect = (value: string) => {
    setLimitValue(value);
  };

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

  const filteredList = products.filter(
    (product) =>
      product.nombre.toLowerCase().trim().includes(searchValue) ||
      product.marca.toLowerCase().trim().includes(searchValue)
  );

  const productsToDisplay =
    limitValue === "all"
      ? filteredList
      : filteredList.slice(0, Number(limitValue));

  return (
    <>
      <Header
        searchValue={searchValue}
        searchHandler={handleSearchInput}
        limitValue={limitValue}
        limitHandler={handleLimitSelect}
        totalProductCount={totalProductCount}
      />
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
