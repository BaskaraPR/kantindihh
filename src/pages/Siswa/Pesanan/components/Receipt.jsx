import React from "react";

function ReceiptModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg overflow-hidden max-w-md w-full relative shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>

        {/* Header */}
        <div className="bg-green-500 p-4">
          <h2 className="text-white text-xl font-bold">KantinKu</h2>
        </div>

        {/* Content */}
        <div className="p-4 border-b text-sm">
          <p>
            <strong>Siswa:</strong> User
          </p>
          <p>
            <strong>Stan:</strong> Stan 1
          </p>
          <p>
            <strong>Waktu:</strong> 6 Feb 2025, 08:31 WIB
          </p>
        </div>

        {/* Example table (replace with dynamic data later) */}
        <div className="p-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Menu</th>
                <th className="text-center py-2">Jumlah</th>
                <th className="text-right py-2">Harga</th>
                <th className="text-right py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Ayam Katsu</td>
                <td className="text-center py-2">2</td>
                <td className="text-right py-2">Rp. 20.000</td>
                <td className="text-right py-2">Rp. 40.000</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} className="text-left font-medium py-2">
                  Total
                </td>
                <td className="text-right font-medium py-2">Rp. 40.000</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="p-4 text-center">
          <p className="font-bold text-lg">Terima Kasih</p>
        </div>

        <div className="p-4">
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md">
            Print Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReceiptModal;
