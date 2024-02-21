import { useState } from "react";
import "./App.css";

import store from "./store";
import { Provider } from "react-redux";
import Sorted from "./features/Sorted";
import AddNumber from "./features/AddNumber";
import NumberBank from "./features/NumberBank";

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
