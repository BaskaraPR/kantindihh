import { Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Menu", path: "/siswa/menu" },
    { name: "Pesanan", path: "/siswa/pesanan" },
    { name: "Histori", path: "/siswa/histori" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow bg-white">
      <div className="text-2xl font-bold text-gray-900">
        <Link to="Siswa/dashboard" className="text-inherit no-underline">
          KantinKu
        </Link>
      </div>
      <div className="bg-gray-50 px-2 py-1 rounded-full flex gap-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`px-6 py-2 rounded-full transition-all text-sm font-medium ${
                isActive
                  ? "bg-gray-800 text-white"
                  : "text-green-700 hover:text-green-900"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      <Link
        to="/siswa/Profile"
        className="border p-2 rounded-md hover:shadow transition-shadow"
      >
        <FaUser className="text-green-600" />
      </Link>
    </nav>
  );
};

export default Navbar;
