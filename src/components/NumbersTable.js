function NumbersTable(props) {
  const cases = [];

  for (let i = 1; i <= props.limit; i++) {
    if (i % 2 !== 0) {
      cases.push(
        <td
          key={i.toString()}
          className="border border-dark text-center"
          style={{ height: '3rem', width: '3rem' }}
        >
          {i}
        </td>
      );
    } else if (i % 2 === 0) {
      cases.push(
        <td
          key={i.toString()}
          className="border border-dark text-center"
          style={{ height: '3rem', width: '3rem', backgroundColor: 'red' }}
        >
          {i}
        </td>
      );
    }
  }

  return (
    <table>
      <tbody>
        <tr>{cases}</tr>
      </tbody>
    </table>
  );
}

export default NumbersTable;
