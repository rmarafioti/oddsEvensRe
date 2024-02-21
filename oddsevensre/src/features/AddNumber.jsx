import { useDispatch } from "react-redux";
import {} from "./numberSlice";

export default function addNumber() {
  const dispatch = useDispatch();

  return (
    <>
      <form>
        <label>
          Add a Number to the Bank
          <input name="number" type="number" />
        </label>
        <button>Add Number</button>
      </form>
    </>
  );
}
