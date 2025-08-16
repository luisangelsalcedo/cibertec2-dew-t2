import { useProductStore } from "@/products/store/product.store";

export function LimitSelect() {
  const limitValue = useProductStore((state) => state.limitValue);
  const setLimitValue = useProductStore((state) => state.setLimitValue);

  return (
    <select
      id="limitSelect"
      className="limitSelect"
      value={limitValue}
      onChange={(e) => setLimitValue(e.target.value)}
    >
      <option value="all">Todos</option>
      <option value="12">12 items</option>
      <option value="20">20 items</option>
      <option value="32">32 items</option>
    </select>
  );
}
