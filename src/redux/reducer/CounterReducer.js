import { MINUS, PLUS } from "../actionTypes/CounterTypes";

const initialState = {
    counter:0
}

const CounterReducer= (state = initialState,action) => {
  
  switch (action.type) {
    case PLUS:
        
       return{...state,counter:state.counter+1}
       case MINUS:
        
       return{...state,counter:state.counter-1}
    default:
       return state
  }
  
}
export default CounterReducer
