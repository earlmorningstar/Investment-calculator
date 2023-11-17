import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment.js";




export default function UserInput() {

  const [userInput,  setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
        [inputIdentifier]: newValue
        }
    })
  }

// const [initInvt, setInitInvt] = useState('');
// const [annlInvt, setAnnlInvt] = useState('');
// const [expdrtn, setExptRtn] = useState('');
// const [duration, setDuration] = useState('');
// const [investmentResult, setInvestmentResult] = useState(null);

//   function handleInitialInvestment(evt){
//     setInitInvt(evt.target.value);
//   }

//   function handleAnnualInvestment(evt) {
//     setAnnlInvt(evt.target.value);
//   }

//   function handleExpectedReturn(evt){
//     setExptRtn(evt.target.value);
//   }

//   function handleDuration(evt){
//     setDuration(evt.target.value);
//   }

  return (
    <>
      <form id="user-input">

        <div className="input-group">
          <span>
            <label htmlFor="">Initial Investment</label>
            <input className="input-bottom" type="number" required value={userInput.initialInvestment} onChange={(evt)=> handleChange('initialInvestment', evt.target.value)} />
          </span>

          <span>
             <label htmlFor="">Expected Return</label>
            <input type="number" required value={userInput.expectedReturn} onChange={(evt)=>handleChange('expectedReturn', evt.target.value)}/>
          </span>
          
        </div>

        <div className="input-group">
          <span>
          <label htmlFor="">Annual Investment</label>
            <input className="input-bottom" type="number" required value={userInput.annualInvestment} onChange={(evt)=>handleChange('annualInvestment', evt.target.value)} />
          </span>

          <span>
            <label htmlFor="">Duration</label>
            <input type="number" required value={userInput.duration} onChange={(evt)=>handleChange('duration', evt.target.value)}/>
          </span>
        </div>
      </form>
    </>
  );
}
