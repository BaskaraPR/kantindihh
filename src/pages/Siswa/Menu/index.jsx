import OrderCard from "./components/OrderCard";

function MenuPage() {
  const dummyMenuData = [
    {
      id_menu: "1",
      nama_menu: "Nasi Goreng Spesial",
      jenis: "makanan",
      deskripsi: "Nasi goreng dengan ayam, telur, dan sayuran segar.",
      gambar: "nasi-goreng.jpg",
      harga: 20000,
    },
    {
      id_menu: "2",
      nama_menu: "Es Teh Manis",
      jenis: "minuman",
      deskripsi: "Teh manis dingin dengan es batu segar.",
      gambar: "es-teh.jpg",
      harga: 5000,
    },
    {
      id_menu: "3",
      nama_menu: "Mie Ayam Bakso",
      jenis: "makanan",
      deskripsi: "Mie ayam lengkap dengan bakso dan pangsit.",
      gambar: "mie-ayam.jpg",
      harga: 18000,
    },
    {
      id_menu: "4",
      nama_menu: "Jus Alpukat",
      jenis: "minuman",
      deskripsi: "Jus alpukat segar dengan susu coklat.",
      gambar: "jus-alpukat.jpg",
      harga: 15000,
    },
  ];

  return (
    <div>
      <h1>Our Menu</h1>
      <div className="flex gap-4 flex-wrap">
        {dummyMenuData.map((menu) => (
          <OrderCard key={menu.id_menu} menuData={menu} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
