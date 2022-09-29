import React from "react";
import "./CSS/Product.css";
import { useStateVaule } from "./StateProvider";


function Product({id, title, image, price}) {

  const [ {basket}, dispatch] = useStateVaule();
  //
  
  const addBasket = () => {
    dispatch({
      type: "ADD_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <h2>{ title }</h2>
        <p className="product_price">
          <small>금액 :</small>
          <strong>{ price }</strong>
          <small> 원</small>
        </p>
      </div>
      <img src={image} alt=""/>
      
      {/* <button onClick={addBasket}> 담기 </button> */}
      <button onClick={()=>{
      addBasket();
      alert("장바구니에 담겼습니다.")}}> 상품 담기 </button>
      
    </div>
  );
}

export default Product;
