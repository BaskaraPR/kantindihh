import { Link } from "react-router-dom";
import FoodCard from "./components/FoodCard";

function Dashboard() {
  const bestSellerItems = [
    {
      id: 1,
      image: "https://placehold.co/250",
      title: "Ayam Katsu",
      description:
        "Katsu curry adalah hidangan Jepang yang memadukan nasi, saus kari kaya rempah, dan potongan daging ayam yang digoreng renyah.",
      price: "1.000.000",
    },
    {
      id: 2,
      image: "https://placehold.co/250",
      title: "Ayam Katsu",
      description:
        "Katsu curry adalah hidangan Jepang yang memadukan nasi, saus kari kaya rempah, dan potongan daging ayam yang digoreng renyah dengan lapisan tepung roti, menciptakan rasa gurih dan tekstur yang menggugah selera.",
      price: "1.000.000",
    },
    {
      id: 3,
      image: "https://placehold.co/250",
      title: "Ayam Katsu",
      description:
        "Katsu curry adalah hidangan Jepang yang memadukan nasi, saus kari kaya rempah, dan potongan daging ayam yang digoreng renyah.",
      price: "1.000.000",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main Content */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Best Seller Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-center justify-center mb-10">
            Best Seller
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {bestSellerItems.map((item) => (
              <FoodCard
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-lg font-medium mb-4">
            Belum Menemukan Makanan yang Kamu Inginkan?
          </h3>
          <Link to="/Siswa/Menu">
            <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors">
              Temukan Sekarang
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
