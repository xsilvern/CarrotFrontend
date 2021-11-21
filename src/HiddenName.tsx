import { ChangeEvent, useState } from "react";
import { KeyboardEvent } from "react";
const HiddenNameText = () => {
  const [str, setStr] = useState<String>();
  const conditionEvent = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.length > 2) {
      setStr(
        event.currentTarget.value[0] +
          "*".repeat(event.currentTarget.value.length - 2) +
          event.currentTarget.value[event.currentTarget.value.length - 1]
      );
    } else {
      setStr(event.currentTarget.value);
    }
  };
  return (
    <>
      <section>hiddenName:{str}</section>
      <section>
        <input type="text" onChange={conditionEvent} />
      </section>
    </>
  );
};

export default HiddenNameText;
