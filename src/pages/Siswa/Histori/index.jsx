import HistoryTable from "./components/Table";

function Histori() {
  const TableData = [
    {
      id: 1,
      tanggal: "12-12-12",
      total: 20000,
    },
    {
      id: 2,
      tanggal: "2-2-2",
      total: 26000,
    },
    {
      id: 3,
      tanggal: "1-12-12",
      total: 69000,
    },
  ];
  return (
    <div>
      <HistoryTable historyData={TableData} />
    </div>
  );
}

export default Histori;
