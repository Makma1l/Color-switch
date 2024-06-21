import { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment_red":
      return { ...state, red: state.red + 1 };
    case "decrement_red":
      return { ...state, red: Math.max(0, state.red - 1) };
    case "increment_green":
      return { ...state, green: state.green + 1 };
    case "decrement_green":
      return { ...state, green: Math.max(0, state.green - 1) };
    case "increment_blue":
      return { ...state, blue: state.blue + 1 };
    case "decrement_blue":
      return { ...state, blue: Math.max(0, state.blue - 1) };
    default:
      return state;
  }
};

const initialState = {
  red: 0,
  green: 0,
  blue: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10 ">
        <div
          className="w-96 h-96 rounded-xl"
          style={{
            backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
          }}
        ></div>
        <div className="flex flex-row space-x-10 mt-5">
          <div className="flex flex-col items-center">
            <p>Red {state.red}</p>
            <div className="flex space-x-2">
              <button
                className="border bg-neutral-500 rounded-md p-1"
                onClick={() => dispatch({ type: "increment_red" })}
              >
                +1
              </button>
              <button
                className="border bg-neutral-500 rounded-md p-1"
                onClick={() => dispatch({ type: "decrement_red" })}
              >
                -1
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p>Green {state.green}</p>
            <div className="flex space-x-2">
              <button
                className="border bg-neutral-500 rounded-md p-1"
                onClick={() => dispatch({ type: "increment_green" })}
              >
                +1
              </button>
              <button
                className="border bg-neutral-500 rounded-md p-1"
                onClick={() => dispatch({ type: "decrement_green" })}
              >
                -1
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p>Blue {state.blue}</p>
            <div className="flex space-x-2">
              <button
                className="border bg-neutral-500 rounded-md p-1"
                onClick={() => dispatch({ type: "increment_blue" })}
              >
                +1
              </button>
              <button
                className="border bg-neutral-500 rounded-md p-1"
                onClick={() => dispatch({ type: "decrement_blue" })}
              >
                -1
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
