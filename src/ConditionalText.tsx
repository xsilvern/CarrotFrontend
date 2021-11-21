import { ChangeEvent, useState } from "react";
import { KeyboardEvent } from "react";
const ConditionalText = () => {
  const [str, setStr] = useState<String>();
  const conditionEvent = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.length > 5) {
      setStr(event.currentTarget.value);
    } else {
      setStr("");
    }
  };
  return (
    <>
      <section>5글자초과만나옴:{str}</section>
      <section>
        <input type="text" onChange={conditionEvent} />
      </section>
    </>
  );
};

export default ConditionalText;
