import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment.js";


// export default function UserInput({initial, annual, expexted, timeDuration}) {
//     const [initInvt, setInitInvt] = useState(initial);
//     const [annlInvt, setAnnlInvt] = useState(annual);
//     const [expdrtn, setExptRtn] = useState(expexted);
//     const [duration, setDuration] = useState(timeDuration);

export default function UserInput() {
  const [initInvt, setInitInvt] = useState('');
  const [annlInvt, setAnnlInvt] = useState('');
  const [expdrtn, setExptRtn] = useState('');
  const [duration, setDuration] = useState('');
  const [investmentResult, setInvestmentResult] = useState(null);


  function handleInitialInvestment(evt){
    setInitInvt(evt.target.value);
  }

  function handleAnnualInvestment(evt) {
    setAnnlInvt(evt.target.value);
  }

  function handleExpectedReturn(evt){
    setExptRtn(evt.target.value);
  }

  function handleDuration(evt){
    setDuration(evt.target.value);
  }


  const handleCalculation = () => {
    const initial = parseFloat(initInvt);
    const annual = parseFloat(annlInvt);
    const expected = parseFloat(expdrtn);
    const timeDuration = parseFloat(duration);

    const result = calculateInvestmentResults(initial, annual, expected, timeDuration);

    setInvestmentResult(result);

  }




  return (
    <>
      <form onChange={handleCalculation} className="input-group" id="user-input">

        <div>
          <span >
            <label htmlFor="">Initial Investment</label>
            <input className="input-bottom" type="number" required value={initInvt} onChange={handleInitialInvestment}/>
          </span>

          <span>
             <label htmlFor="">Expected Return</label>
            <input type="number" required value={expdrtn} onChange={handleExpectedReturn}/>
          </span>
        </div>

        <div>
          <span>
          <label htmlFor="">Annual Investment</label>
            <input className="input-bottom" type="number" required value={annlInvt} onChange={handleAnnualInvestment} />
          </span>

          <span>
            <label htmlFor="">Duration</label>
            <input type="number" required value={duration} onChange={handleDuration} />
          </span>
        </div>
      </form>
    </>
  );
}
