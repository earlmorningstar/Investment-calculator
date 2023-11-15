import { useState } from "react";

export default function UserInput() {
  const [initInvt, setInitInvt] = useState('');
  const [annlInvt, setAnnlInvt] = useState('');
  const [expdrtn, setExptRtn] = useState('');
  const [duration, setDuration] = useState('');


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





  return (
    <>
      <form className="input-group" id="user-input">

        <div>
          <span>
            <label htmlFor="">Initial Investment</label>
            <input type="number" required value={initInvt} onChange={handleInitialInvestment}/>
          </span>

          <span>
             <label htmlFor="">Expected Return</label>
            <input type="number" required value={expdrtn} onChange={handleExpectedReturn}/>
          </span>
        </div>

        <div>
          <span>
          <label htmlFor="">Annual Investment</label>
            <input type="number" required value={annlInvt} onChange={handleAnnualInvestment} />
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
