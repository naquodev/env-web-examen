import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-5 z-50">
      <nav
        className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4
                   rounded-2xl 
                   bg-white/10 
                   backdrop-blur-2xl 
                   backdrop-saturate-200
                   border border-white/20 
                   shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
                   "
      >
        {/* Logo */}
        <div className="text-3xl font-extrabold text-white ">
          Mathieu & Flavio
        </div>

        {/* Navigation */}
        <ul className="flex space-x-8 text-white font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-pink-400 transition-colors drop-shadow-sm"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-cyan-400 transition-colors drop-shadow-sm"
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-purple-400 transition-colors drop-shadow-sm"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
