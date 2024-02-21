import { useDispatch } from "react-redux";
import {} from "./numberSlice";

export default function sorted() {
  const dispatch = useDispatch();

  return (
    <section id="sortedNumbers">
      <h1>Sorted Numbers</h1>
      <section id="odds">
        <h2>Odds</h2>
        <output></output>
      </section>
      <section id="evens">
        <h2>Evens</h2>
        <output></output>
      </section>
    </section>
  );
}
