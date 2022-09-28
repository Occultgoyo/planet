import React from "react";
import "./CSS/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import {Link} from "react-router-dom";
import { useStateVaule } from "./StateProvider";
function Header() {
  const [{basket}] = useStateVaule();

  return (
    <div className="header">
      <Link to="/">
      <img
        className="header_logo"
        src={process.env.PUBLIC_URL + "/images/planet3-1.png"}
        alt="header logo"
      /></Link>

      <div className="header_search">
        <input type="text" className="header_inputsearch" placeholder="Search..." />
        <SearchIcon className="search_icon" />
      </div>

      <div className="header_navi">

        <div className="header_options">
          <span className="header_options_ln1"> 환영합니다.</span>
          <span className="header_options_ln2"> 로그인 하세요</span>
        </div>

        <div className="header_options">
          <span className="header_options_ln1"> 미정 </span>
          <span className="header_options_ln2"> 주문 내역</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: 'none' }}>
        <div className="header_Basket">
          <ShoppingBasket/>
          <span className="header_options_BasketCNT">
          {basket?.length}
          </span>
        </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;
