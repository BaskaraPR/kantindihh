function HistoryTable({ no, date, total }) {
  return (
    <div>
      <table>
        <tr>
          <th>No</th>
          <th>Tanggal</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>{no}</td>
          <td>{date}</td>
          <td>{total}</td>
        </tr>
      </table>
    </div>
  );
}

export default HistoryTable;
