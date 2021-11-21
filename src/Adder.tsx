import { ChangeEvent, KeyboardEvent, useState } from "react";

const Adder = () => {
  const [number1, setNum1] = useState<number>(0);
  const [number2, setNum2] = useState<number>(0);
  const setCount1 = (event: ChangeEvent<HTMLInputElement>) => {
    setNum1(parseFloat(event.currentTarget.value));
  };
  const setCount2 = (event: ChangeEvent<HTMLInputElement>) => {
    setNum2(parseFloat(event.currentTarget.value));
  };
  return (
    <>
      <section>
        <input type="text" onChange={setCount1} />+
        <input type="text" onChange={setCount2} />
      </section>
      <section>{number1 + number2}</section>
    </>
  );
};

export default Adder;
