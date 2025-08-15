import { SagaLogo, SearchIcon, ShoppingcartIcon } from "@/assets/svgs";
import "./header.scss";

export function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-left">
            <div className="logo">
              <SagaLogo />
            </div>
          </div>
          <div className="header-center">
            <div className="search">
              <input
                type="text"
                id="searchInput"
                placeholder="Buscar productos..."
              />
              <SearchIcon />
            </div>
          </div>
          <div className="header-right">
            <button
              id="shoppingCarButton"
              className="shoppingCarButton"
              /* onclick="document.getElementById('popup').showModal()" */
            >
              <ShoppingcartIcon />
              <span>0</span>
            </button>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <select id="limitSelect" className="limitSelect">
            <option value="all">Todos</option>
            <option value="12" selected>
              12 items
            </option>
            <option value="20">20 items</option>
            <option value="32">32 items</option>
          </select>
          <div id="tiempo">00:00:00</div>
        </div>
      </div>
    </header>
  );
}
