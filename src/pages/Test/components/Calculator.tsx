import Pad from "./Pad";
import { useState } from "react";

const Calculator = () => {
  const [latestStr, setLatestStr] = useState("");
  const [currentEqual, setcurrentEqual] = useState(false);
  const updateLatestStr = (name: string) => {
    if (name === "=") {
      setcurrentEqual(true);
      setLatestStr(latestStr + "=" + eval(latestStr));
    } else {
      if (currentEqual) {
        setLatestStr(name);
        setcurrentEqual(false);
      } else {
        setLatestStr(latestStr + name);
      }
    }
  };
  return (
    <>
      <Pad keyName={"7"} callback={updateLatestStr}></Pad>
      <Pad keyName={"8"} callback={updateLatestStr}></Pad>
      <Pad keyName={"9"} callback={updateLatestStr}></Pad>
      <br />
      <Pad keyName={"4"} callback={updateLatestStr}></Pad>
      <Pad keyName={"5"} callback={updateLatestStr}></Pad>
      <Pad keyName={"6"} callback={updateLatestStr}></Pad>
      <br />
      <Pad keyName={"1"} callback={updateLatestStr}></Pad>
      <Pad keyName={"2"} callback={updateLatestStr}></Pad>
      <Pad keyName={"3"} callback={updateLatestStr}></Pad>
      <br />
      <Pad keyName={"0"} callback={updateLatestStr}></Pad>
      <Pad keyName={"+"} callback={updateLatestStr}></Pad>
      <Pad keyName={"-"} callback={updateLatestStr}></Pad>
      <Pad keyName={"*"} callback={updateLatestStr}></Pad>
      <Pad keyName={"/"} callback={updateLatestStr}></Pad>
      <Pad keyName={"="} callback={updateLatestStr}></Pad>
      <br />
      <input value={latestStr}></input>
    </>
  );
};
export default Calculator;
