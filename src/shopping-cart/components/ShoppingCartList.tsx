import { useShoppingCart } from "../hooks/useShoppingcart";

export function ShoppingCartList() {
  const { shoppingCarList, removeProductToShoppingCart } = useShoppingCart();
  return (
    <>
      {shoppingCarList.length <= 0 ? (
        <h3>Aun no hay productos en el carrito</h3>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Cantidad</th>
              <th>Imagen</th>
              <th>Descripción</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {shoppingCarList.map((item, index) => (
              <tr key={`item-${item.product.id}`}>
                <td>{item.count}</td>
                <td>
                  <img src={item.product.src} width="80" />
                </td>
                <td>{item.product.nombre}</td>
                <td>
                  <button
                    className="btn delete"
                    onClick={() => removeProductToShoppingCart(index)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
