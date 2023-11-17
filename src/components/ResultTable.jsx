export default function ResultTable({year, investmentValue, interestYear, totalInterest, investmentCapital}) {
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

        <tbody>
          <tr>
            <td>{year}</td>
            <td>{investmentValue}</td>
            <td>{interestYear}</td>
            <td>{totalInterest}</td>
            <td>{investmentCapital}</td>
          </tr>
        </tbody>
      </table> 
    </>
  );
}
