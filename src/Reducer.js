export const initialState = {
    basket: [],
}; 

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BASKET':
            return {
               ...state,
                basket: [...state.basket, action.item],
            };
        
        case 'DELETE_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )

            let newBasket = [...state.basket];

            if(index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.error(
                    '(id' + action.id + ') 장바구니에 존재하지 않습니다.'
                )
            }
        return{
            ...state,
            basket: newBasket
        }


        default:
            return state;
        }
}
export default reducer;