function HistoryTable({ historyData }) {
  return (
    <>
      <div className="bg-green-500 p-4 text-white text-xl font-semibold">
        Histori Anda
      </div>
      <div>
        <table className="min-w-full bg-white text-sm text-left">
          <thead className="text-gray-700 border-b">
            <tr>
              <th className="px-6 py-3">No</th>

              <th className="px-6 py-3">Tanggal</th>

              <th className="px-6 py-3">Total</th>
            </tr>
          </thead>
          <tbody className="text-gray-900">
            {historyData.map((history, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-6 py-4 font-medium">{index + 1}</td>
                <td className="px-6 py-4">{history.tanggal}</td>
                <td className="px-6 py-4">
                  Rp. {history.total.toLocaleString("id-ID")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default HistoryTable;
