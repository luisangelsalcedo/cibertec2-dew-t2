import { ShoppingcartIcon } from "@/assets/svgs";
import { useShoppingCart } from "@/shopping-cart/hooks/useShoppingcart";

export function ShoppingCartButton() {
  const { totalProductCount } = useShoppingCart();
  return (
    <button id="shoppingCarButton" className="shoppingCarButton">
      <ShoppingcartIcon />
      <span>{totalProductCount}</span>
    </button>
  );
}
