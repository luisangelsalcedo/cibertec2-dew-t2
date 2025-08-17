import { ShoppingcartIcon } from "@/assets/svgs";
import { usePopup } from "@/popup/hooks/usePopup";
import { memo } from "react";

interface Props {
  count: number;
}

export const ShoppingCartButton = memo(({ count }: Props) => {
  const { openModal } = usePopup();

  return (
    <button
      id="shoppingCarButton"
      className="shoppingCarButton"
      onClick={() => openModal(<h1>Modal</h1>)}
    >
      <ShoppingcartIcon />
      <span>{count}</span>
    </button>
  );
});
