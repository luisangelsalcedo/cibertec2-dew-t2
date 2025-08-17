import "./header.scss";
import { HeaderTop } from "./HeadetTop";
import { HeaderBottom } from "./HeaderBottom";

export function Header() {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
}
