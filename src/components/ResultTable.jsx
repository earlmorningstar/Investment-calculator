import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultTable({input}) {

  const resultData = calculateInvestmentResults(input);
  return (
    <>
      <table id="result" className="center">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Investment Capital</th>
          </tr>
        </thead>

        <tbody>{resultData.map((yearData) => {
            return (
                <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{yearData.interest}</td>
                    <td>{yearData}</td>
                    <td></td>
                </tr>
            )
        })}</tbody>
      </table> 
    </>
  );
}
