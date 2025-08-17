import { useShoppingCartStore } from "../store/soppingcart.store";

export function useShoppingCart() {
  const addProductToShoppingCart = useShoppingCartStore(
    (state) => state.addProductToShoppingCart
  );
  const totalProductCount = useShoppingCartStore(
    (state) => state.totalProductCount
  );

  return { addProductToShoppingCart, totalProductCount };
}
