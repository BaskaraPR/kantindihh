import React, { useState } from "react";
import ReceiptModal from "./Receipt";

const OrderTable = ({ orderData }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="rounded-lg shadow-md border border-gray-200">
        <div className="bg-green-500 p-4 text-white text-xl font-semibold">
          Pesanan Anda
        </div>
        <table className="min-w-full bg-white text-sm text-left">
          <thead className="text-gray-700 border-b">
            <tr>
              <th className="px-6 py-3">No</th>
              <th className="px-6 py-3">Nama</th>
              <th className="px-6 py-3">Stan</th>
              <th className="px-6 py-3">Tanggal</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Total</th>
              <th className="px-6 py-3">Receipt</th>
            </tr>
          </thead>
          <tbody className="text-gray-900">
            {orderData.map((order, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-6 py-4 font-medium">{index + 1}</td>
                <td className="px-6 py-4">{order.nama}</td>
                <td className="px-6 py-4">{order.stan}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      order.status === "Sampai"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  Rp. {order.total.toLocaleString("id-ID")}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-black text-white px-4 py-1 rounded-md text-sm font-semibold hover:bg-gray-800"
                  >
                    Print
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && <ReceiptModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default OrderTable;
