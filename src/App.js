import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  resetHandler,
  decrementHandler,
  fazetelincrement,
} from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(fazetelincrement());
  };
  const handleDecrement = () => {
    dispatch(decrementHandler());
  };
  const handleReset = () => {
    dispatch(resetHandler());
  };
  const counter = useSelector((state)=>state.counter)
  return (
    <div className="App">
      <button style={{border:'0', borderRadius:'10px', padding:"10px"}} onClick={handleIncrement}>+</button>
      <button style={{border:'0',borderRadius:'10px', padding:"10px"}} onClick={handleDecrement}>-</button>
      <button style={{ backgroundColor:'green', border:'0',borderRadius:'10px',padding:"10px"}}>{counter}</button>
      <button style={{border:'0',borderRadius:'10px',padding:"10px"}} onClick={handleReset}>RESET</button>
    </div>
  );
}

export default App;
