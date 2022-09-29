import React from "react";
import CurrencyFormat from "react-currency-format";
import './CSS/CheckTotal.css';
import { getBasketTotal } from "./Reducer";
import { useStateVaule } from "./StateProvider";

function CheckTotal(){

    const [{basket}, dispatch] = useStateVaule();

    return (
        <div className="checktotal">
            <CurrencyFormat 
            renderText={(value) =>(
                <>
                <p>
                    총액 ( {basket.length} 개의 상품) : <strong> {value}원 </strong> 
                </p>
                </>
            )}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            />
            <button> 계산하기 </button>
            </div>
    )
}

export default CheckTotal;