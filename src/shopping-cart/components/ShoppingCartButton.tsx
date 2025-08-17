import { memo } from "react";
import { ShoppingcartIcon } from "@/assets/svgs";
import { usePopup } from "@/popup/hooks/usePopup";
import { ShoppingCartList } from "./ShoppingCartList";

interface Props {
  count: number;
}

export const ShoppingCartButton = memo(({ count }: Props) => {
  const { openModal } = usePopup();

  return (
    <button
      id="shoppingCarButton"
      className="shoppingCarButton"
      onClick={() => openModal(<ShoppingCartList />)}
    >
      <ShoppingcartIcon />
      <span>{count}</span>
    </button>
  );
});
