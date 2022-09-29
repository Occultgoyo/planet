import { createContext, useContext, useReducer } from "react";
export const StateContext = createContext(); //DataLayer 역할을 해줄수있는 녀석


// stateContext.Provider로 랩핑후 DataLayer를 만들어준다.
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateVaule = () => useContext(StateContext);
//DataLayer 에서 정보를 가져올수있도록 설정