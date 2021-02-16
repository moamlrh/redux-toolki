import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { decreamentClicked, increamentClicked } from "./redux-toolkit";

export default function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.counterReducer);
  return (
    <div className="App">
      <h1>{state.counter}</h1>
      <button onClick={() => dispatch(increamentClicked())}>increament</button>
      <button onClick={() => dispatch(decreamentClicked())}>decreament</button>
    </div>
  );
}
