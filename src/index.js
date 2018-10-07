import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "../reducers";
import Redux from "../components/addition";

const rootElement = document.getElementById("root");

const store = createStore(reducer);

console.log(store.getState());

const renderingPart = () => {
  ReactDOM.render(
    <Redux
      value={store.getState()}
      increment={() => store.dispatch({ type: "INCREMENT" })}
      decrement={() => store.dispatch({ type: "DECREMENT" })}
    />,
    rootElement
  );
};

renderingPart();

store.subscribe(renderingPart);
