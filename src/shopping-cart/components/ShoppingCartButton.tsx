import { ShoppingcartIcon } from "@/assets/svgs";
import { memo } from "react";

interface Props {
  count: number;
}

export const ShoppingCartButton = memo(({ count }: Props) => {
  return (
    <button id="shoppingCarButton" className="shoppingCarButton">
      <ShoppingcartIcon />
      <span>{count}</span>
    </button>
  );
});
