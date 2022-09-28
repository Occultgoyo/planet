import React from "react";
import CheckOutProduct from "./CheckOutProduct";
import CheckTotal from "./CheckTotal";
import "./CSS/CheckOut.css";
import { useStateVaule } from "./StateProvider";

function CheckOut() {
  const [{ basket }, dispatch] = useStateVaule();

  return (
    <div className="checkout">
      <div className="checkout_op">
        <img
          className="checkout_ad"
          src={process.env.PUBLIC_URL + "images/checkout_ad.png"}
          alt=""
        />

        <div>
          <h4 className="checkout_title">장바구니</h4>
          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}/>
          ))}
          
        </div>
      </div>
      <div className="checkout_info">
        <CheckTotal />
      </div>
    </div>
  );
}
export default CheckOut;
