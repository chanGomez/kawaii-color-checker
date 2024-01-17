import { useState } from "react";
import "./App.sass";

import { Heading } from "./components/Heading";
import { TextColorPicker } from "./components/TextColorPicker";
import { ContrastRatio } from "./components/ContrastRatio";
import { Output } from "./components/Output";
import { BackgroundColorPicker } from "./components/BackgroundColorPicker";
import CardOne from "./components/OutputExamples/CardOne/CardOne";
import CardTwo from "./components/OutputExamples/CardTwo/CardTwo";
import CardThree from "./components/OutputExamples/CardThree/CardThree";
import CardFour from "./components/OutputExamples/CardFour/CardFour";
import CardFive from "./components/OutputExamples/CardFive/CardFive";
import CardSix from "./components/OutputExamples/CardSix/CardSix";
import Search from "./components/OutputExamples/Search/Search";

const App = () => {
  const [textColor, setTextColor] = useState("#111169");
  const [backgroundColor, setBackgroundColor] = useState("#ECE0FF");

  return (
    <div className="app">
      <Heading />
      <div className="mainContainer">
        <div className="pickerContainer">
          <div className="colorPicker">
            <TextColorPicker color={textColor} setColor={setTextColor} />
            <BackgroundColorPicker
              color={backgroundColor}
              setColor={setBackgroundColor}
            />
          </div>
          <ContrastRatio color={textColor} background={backgroundColor} />
        </div>
        <Output textColor={textColor} backgroundColor={backgroundColor} />
      </div>
      <div className="output-examples-container">
        <div className="output-examples-content">
          <div className="div1">
            <CardOne />
            <CardThree />
          </div>
          <div className="div2">
            <Search/>
            <CardFive />
            <CardFour />
          </div>
          <div className="div3">
            <CardSix />
            <CardTwo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
