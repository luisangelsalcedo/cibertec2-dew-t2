import { SagaLogo } from "@/assets/svgs";
import { Container } from "../Container";
import { ProductSearch } from "@/products/components";
import { ShoppingCartButton } from "@/shopping-cart/components/ShoppingCartButton";
import { memo } from "react";
import { useShoppingCart } from "@/shopping-cart/hooks/useShoppingcart";

export const HeaderTop = memo(() => {
  const { totalProductCount } = useShoppingCart();

  return (
    <div className="header-top">
      <Container>
        <div className="header-left">
          <div className="logo">
            <SagaLogo />
          </div>
        </div>
        <div className="header-center">
          <ProductSearch />
        </div>
        <div className="header-right">
          <ShoppingCartButton count={totalProductCount} />
        </div>
      </Container>
    </div>
  );
});
