import { useState, useEffect } from "react";

function OrderCard({ menuData }) {
  const [qty, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  function getCart() {
    const storage = localStorage.getItem("cart");
    const cartItems = storage ? JSON.parse(storage) : [];
    const indexCart = cartItems.findIndex(
      (item) => item.id_menu === menuData.id_menu
    );
    if (indexCart !== -1) {
      setQuantity(cartItems[indexCart].qty);
    }
  }

  useEffect(() => {
    getCart();
  }, []);

  function updateCart(id_menu) {
    const storage = localStorage.getItem("cart") || "[]";
    const cartItems = JSON.parse(storage);
    const indexCart = cartItems.findIndex((item) => item.id_menu === id_menu);

    if (indexCart === -1) {
      const nama = menuData.nama_menu;
      const harga = menuData.harga;
      const totalHarga = qty * harga;
      cartItems.push({ id_menu, nama, harga, qty, totalHarga });
      console.log("Item added to cart");
    } else {
      cartItems[indexCart].qty = qty;
      cartItems[indexCart].totalHarga =
        cartItems[indexCart].qty * menuData.harga;
      console.log("Item quantity updated in cart");
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    setCart(cartItems);
    setQuantity(1);
    window.dispatchEvent(new Event("storage"));
  }

  const formatCash = (value) =>
    new Intl.NumberFormat("id-ID", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(value);

  return (
    <div className="w-64 overflow-hidden rounded-lg shadow-lg bg-white gap-4">
      <div className="relative">
        <img
          src={`/menu/${menuData.gambar}`}
          alt={`Menu: ${menuData.nama_menu}`}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 left-2 bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">
          {menuData.jenis.charAt(0).toUpperCase() + menuData.jenis.slice(1)}
        </span>
      </div>
      <div className="p-3">
        <h3 className="font-bold text-lg mb-1 truncate">
          {menuData.nama_menu}
        </h3>
        <p className="text-gray-600 text-xs line-clamp-2 min-h-[2.5rem]">
          {menuData.deskripsi}
        </p>
      </div>
      <div className="p-3 flex flex-col gap-2">
        <div className="flex justify-between items-center w-full">
          <span className="font-bold text-base text-purple-600">
            {formatCash(menuData.harga)}
          </span>
          <input
            type="number"
            value={qty}
            min="1"
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            className="w-16 text-center text-sm border border-gray-300 rounded-md p-1"
          />
        </div>
        <button
          onClick={() => updateCart(menuData.id_menu)}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-3 text-sm rounded transition duration-300 ease-in-out"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default OrderCard;
