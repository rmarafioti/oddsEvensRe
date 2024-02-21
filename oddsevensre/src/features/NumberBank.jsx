import { useDispatch } from "react-redux";
import {} from "./numberSlice";

export default function numberBank() {
  const dispatch = useDispatch();

  return (
    <>
      <section id="numberBank">
        <h1>Number Bank</h1>
        <output></output>
        <div>
          <button id="sortOne">Sort 1</button>
          <button id="sortAll">Sort All</button>
        </div>
      </section>
    </>
  );
}
