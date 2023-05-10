
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Minus, Plus } from './redux/action/CounterAction';

function App() {
  const counter=useSelector((state)=>state.counter)
  const dispatch=useDispatch()
  return (
    <div className="App">
     <button onClick={()=>dispatch(Plus())}>+</button>
     <span>{counter}</span>
     <button onClick={counter>0?()=>dispatch(Minus()):null}>-</button>
    </div>
  );
}

export default App;
