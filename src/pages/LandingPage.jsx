import {
  ShoppingCart,
  Home,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">KantinKu</h1>
          <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
            <span className="text-white text-xs">🍽️</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-green-500 font-medium">Selamat datang User</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Temukan Semua Makanan Favoritmu di KantinKu!
              </h2>
              <p className="text-gray-600">
                KantinKu adalah tempat di mana rasa lezat bertemu kenyamanan.
                Dengan bahan berkualitas dan pilihan menu yang beragam, kami
                menyediakan hidangan yang lezat, sehat, dan siap memenuhi harimu
                dengan penuh energi!
              </p>
              <div>
                <Link to="/login">
                  <a className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Pesan Sekarang</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <img
                src="../public/canteen.png"
                alt="Canteen Illustration"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                KantinKu
              </h2>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6">Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Home className="w-5 h-5 text-gray-600 mt-1" />
                  <span>Malang, Jl. Linggangguliguli</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span>kantin@ku.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <span>+6820609284628</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-4">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2024 MKU. All Right Reserved
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
