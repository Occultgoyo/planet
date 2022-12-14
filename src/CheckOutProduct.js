import React from "react";
import "./CSS/CheckOutProduct.css";
import { useStateVaule } from "./StateProvider";

function CheckOutProduct({ id, image, title, price }) {
  const [{ basket }, dispatch] = useStateVaule();
  // 장바구니 상품 삭제를 위해 {basket} 정보가 필요함.
  // dispatch는 datalayer 활용을 위해 필요. 

  const removeFromBasket = () => {
    dispatch({
      type: "DELETE_BASKET",
      id: id,
      title: title,
    });
  };

  return (
    <div className="checkoutproduct">
      <img className="checkout_pd" src={image} alt="" />
      <div className="checkout_pdinfo">
        <p className="checkout_pdtitle">{title}</p>
        <p className="checkout_pdprice">
          {/* <small>{" ₩ "}</small> */}
          <strong>{ price }</strong>
          <small> 원</small>
        </p>
        <button onClick={()=>{
      removeFromBasket();
      alert("상품을 삭제했습니다.")}}> 상품 삭제 </button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
