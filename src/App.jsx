import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  
  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInputProp={userInput} onChangeInput={handleChange} />
      {!inputIsValid && <p className="center">Please Enter A Duration Greater Than Zero (0)</p>}
      {inputIsValid && <ResultTable input={userInput} />}
    </>
  );
}

export default App;
