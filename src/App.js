 import react from "react";
 import './App.css';
 import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum} from "./Actions/action";
function App() {
  const theState = useSelector((state) => state.changeNum)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux Counter</h1>
      <button onClick={ ()=> dispatch(incNum(2))} className="btn">+</button>
      <h2 className="num">{theState}</h2>
      <button onClick={ ()=> dispatch(decNum(3))} className="btn">-</button>
    </div>
  );
}

export default App;
