import { SagaLogo, ShoppingcartIcon } from "@/assets/svgs";
import { ProductSearch } from "@/products/components/";
import { LimitSelect } from "./LimitSelect";
import { Clock } from "./Clock";
import "./header.scss";
import { Container } from "./Container";

interface Props {
  searchValue: string;
  limitValue: string;
  searchHandler: (value: string) => void;
  limitHandler: (value: string) => void;
  totalProductCount: number;
}

export function Header({
  searchValue,
  limitValue,
  searchHandler,
  limitHandler,
  totalProductCount,
}: Props) {
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
            <ProductSearch value={searchValue} handler={searchHandler} />
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
          <LimitSelect value={limitValue} handler={limitHandler} />
          <Clock />
        </Container>
      </div>
    </header>
  );
}
