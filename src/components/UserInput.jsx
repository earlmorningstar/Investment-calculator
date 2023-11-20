
export default function UserInput({ onChangeInput, userInputProp }) {
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
      <section id="user-input">
        <div className="input-group">
          <span>
            <label>Initial Investment</label>
            <input
              className="input-bottom"
              type="number"
              required
              value={userInputProp.initialInvestment}
              onChange={(evt) =>
                onChangeInput("initialInvestment", evt.target.value)
              }
            />
          </span>

          <span>
            <label>Expected Return</label>
            <input
              type="number"
              required
              value={userInputProp.expectedReturn}
              onChange={(evt) =>
                onChangeInput("expectedReturn", evt.target.value)
              }
            />
          </span>
        </div>

        <div className="input-group">
          <span>
            <label>Annual Investment</label>
            <input
              className="input-bottom"
              type="number"
              required
              value={userInputProp.annualInvestment}
              onChange={(evt) =>
                onChangeInput("annualInvestment", evt.target.value)
              }
            />
          </span>

          <span>
            <label>Duration</label>
            <input
              type="number"
              required
              value={userInputProp.duration}
              onChange={(evt) => onChangeInput("duration", evt.target.value)}
            />
          </span>
        </div>
      </section>
    </>
  );
}
