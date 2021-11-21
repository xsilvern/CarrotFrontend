import { ChangeEvent, useState } from "react";
const WelcomeName = () => {
  const [str, setStr] = useState<String>("");
  const kevent = (event: ChangeEvent<HTMLInputElement>) => {
    setStr(event.currentTarget.value);
  };
  return (
    <>
      <section>반갑습니다{str}님</section>
      <section>
        <input type="text" onChange={kevent} />
      </section>
    </>
  );
};

export default WelcomeName;
