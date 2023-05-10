import { createStore } from "redux";
import CounterReducer from "./reducer/CounterReducer";

const store = createStore(
    CounterReducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  export default store