import { useShoppingCartStore } from "../store/soppingcart.store";

export function useShoppingCart() {
  const addProductToShoppingCart = useShoppingCartStore(
    (state) => state.addProductToShoppingCart
  );
  const removeProductToShoppingCart = useShoppingCartStore(
    (state) => state.removeProductToShoppingCart
  );
  const totalProductCount = useShoppingCartStore(
    (state) => state.totalProductCount
  );
  const shoppingCarList = useShoppingCartStore(
    (state) => state.shoppingCarList
  );

  return {
    shoppingCarList,
    addProductToShoppingCart,
    totalProductCount,
    removeProductToShoppingCart,
  };
}
