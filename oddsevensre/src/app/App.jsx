import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import Sorted from "../features/Sorted.jsx";
import AddNumber from "../features/AddNumber.jsx";
import NumberBank from "../features/NumberBank.jsx";

function App() {
  return (
    <>
      <Provider store={store}>
        <AddNumber />
        <NumberBank />
        <Sorted />
      </Provider>
    </>
  );
}

export default App;
