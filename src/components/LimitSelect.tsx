interface Props {
  value: string;
  handler: (value: string) => void;
}

export function LimitSelect({ value, handler }: Props) {
  return (
    <select
      id="limitSelect"
      className="limitSelect"
      value={value}
      onChange={(e) => handler(e.target.value)}
    >
      <option value="all">Todos</option>
      <option value="12">12 items</option>
      <option value="20">20 items</option>
      <option value="32">32 items</option>
    </select>
  );
}
