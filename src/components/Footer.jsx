import {
  Home,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Send,
} from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">KantinKu</h2>
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
  );
}

export default Footer;
