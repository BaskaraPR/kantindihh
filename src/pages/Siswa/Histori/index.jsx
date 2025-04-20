import HistoryTable from "./components/Table";

function Histori() {
  const TableData = [
    {
      id: 1,
      tanggal: "12-12-12",
      total: 20.0,
    },
    {
      id: 2,
      tanggal: "2-2-2",
      total: 26.0,
    },
    {
      id: 3,
      tanggal: "1-12-12",
      total: 69.0,
    },
  ];
  return (
    <div>
      <h1>Histori Anda</h1>
      <div>
        {TableData.map((data) => (
          <HistoryTable no={data.id} date={data.tanggal} total={data.total} />
        ))}
      </div>
    </div>
  );
}

export default Histori;
