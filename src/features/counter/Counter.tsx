import { Button } from "@/components/ui/button";
import { addition, multiplyByNumber, subtraction, divideByAsync } from "@/redux/slices/counterSlice";

import { useState } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Counter = () => {
  const dispatch = useAppDispatch();

  // Use `useSelector` directly for more control and fewer dependencies
  const { value: count, status } = useAppSelector((state) => state.counter);

  const [number, setNumber] = useState<number | null>(null);

  const isPending = status === "loading";
  const isError = status === "failed";

  const handleMultiply = (e: React.FormEvent) => {
    e.preventDefault();
    if (number !== null) {
      dispatch(multiplyByNumber(number));
      setNumber(null);
    }
  };

  const handleDivide = (e: React.FormEvent) => {
    e.preventDefault();
    if (number !== null) {
      dispatch(divideByAsync(number));
      setNumber(null);
    }
  };

  return (
    <div className="gap-5 flex flex-col justify-center">
      <h2>Count: {count}</h2>

      <div className="space-x-4 space-y-8">
        <form onSubmit={handleMultiply} className="space-y-2">
          <input
            type="number"
            className="contact-input"
            value={number === null ? "" : number}
            onChange={(e) => setNumber(Number(e.target.value))}
          />
          <Button type="submit" disabled={number === null}>
            Multiply by
          </Button>
          <Button
            className="ml-8"
            onClick={handleDivide}
            disabled={isPending || number === null}
          >
            {isPending ? "Loading..." : "Divide by"}
          </Button>
        </form>
        <Button onClick={() => dispatch(addition())}>Add</Button>
        <Button onClick={() => dispatch(subtraction())}>Subtract</Button>
      </div>

      {isError && <p className="text-red-600">Error occurred. Please try again.</p>}
    </div>
  );
};

export default Counter;
