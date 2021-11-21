import React, { ChangeEvent, KeyboardEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import Title from "./Title";
import Text from "./Text";
import Adult from "./Adult";
import Photo from "./Photo";
import Counter from "./Counter";
import Adder from "./Adder";
import WelcomeName from "./WelcomeName";
import ConditionalText from "./ConditionalText";
import HiddenNameText from "./HiddenName";
import { useState } from "react";
import Calculator from "./pages/Test/components/Calculator";
import Test from "./pages/Test/components";
const App = () => {
  const [latestName, setLatestName] = useState("");
  const updateLatestName = (name: string) => {
    setLatestName(name);
  };
  return (
    <>
      <Button name="hello" callback={updateLatestName} />
      <Button name="world" callback={updateLatestName} />
      <Button name="nextop" callback={updateLatestName} />
      <article>{latestName} is clicked!</article>
      <Test />
    </>
  );
};

export default App;
