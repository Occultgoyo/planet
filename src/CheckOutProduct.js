import React from "react";
import "./CSS/CheckOutProduct.css";
import { useStateVaule } from "./StateProvider";

function CheckOutProduct({ id, image, title, price }) {
  const [{ basket }, dispatch] = useStateVaule();
  // 장바구니에 삭제를 위해 {basket} 정보가 필요함.

  const removeFromBasket = () => {
    dispatch({
      type: "DELETE_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutproduct">
      <img className="checkout_pd" src={image} alt="" />
      <div className="checkout_pdinfo">
        <p className="checkout_pdtitle">{title}</p>
        <p className="checkout_pdprice">
          <small>{" ₩ "}</small>
          <strong>{ price }</strong>
          <small> 원</small>
        </p>
        <button onClick={removeFromBasket}> 상품 삭제 </button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
