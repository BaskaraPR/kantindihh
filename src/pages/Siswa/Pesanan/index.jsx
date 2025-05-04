import OrderTable from "./components/OrderTable";

function Pesanan() {
  const dummyorderdata = [
    {
      no: "1",
      nama: "Nasi Goreng Spesial",
      stan: "Stan 1",
      date: "15-9-18",
      status: "Sampai",
      total: 20000,
    },
    {
      no: "2",
      nama: "Nasi Goreng Jawaa",
      stan: "Stan 2",
      date: "15-30-18",
      status: "Belum",
      total: 20000,
    },
    {
      no: "3",
      nama: "Nasi Goreng Spesial",
      stan: "Stan 69",
      date: "15-9-18",
      status: "Sampai",
      total: 20000,
    },
  ];
  return (
    <div>
      <div>
        <OrderTable orderData={dummyorderdata} />
      </div>
    </div>
  );
}

export default Pesanan;
