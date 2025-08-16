import { SagaLogo, ShoppingcartIcon } from "@/assets/svgs";
import { ProductSearch } from "@/products/components/";
import { LimitSelect } from "../LimitSelect";
import { Clock } from "../Clock";
import { Container } from "../Container";
import "./header.scss";

interface Props {
  totalProductCount: number;
}

export function Header({ totalProductCount }: Props) {
  return (
    <header className="header">
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
            <button id="shoppingCarButton" className="shoppingCarButton">
              <ShoppingcartIcon />
              <span>{totalProductCount}</span>
            </button>
          </div>
        </Container>
      </div>
      <div className="header-bottom">
        <Container>
          <LimitSelect />
          <Clock />
        </Container>
      </div>
    </header>
  );
}
