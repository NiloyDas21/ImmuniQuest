import { HeartPulse } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex min-h-19.5 items-center justify-between bg-white px-[10%] py-6 shadow-md">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 text-[30px] font-bold text-[#12a98b]">
        <HeartPulse className="h-8 w-8 text-emerald-600" />
        <span>
          <span className="text-green-700">Immuni</span>Quest
        </span>
      </Link>

      {/* Navigation links */}
      <div className="flex items-center gap-9">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg transition-all duration-300 hover:scale-110 hover:text-emerald-700 ${
              isActive ? "text-emerald-700 font-semibold" : "text-gray-600"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-lg transition-all duration-300 hover:scale-110 hover:text-emerald-700 ${
              isActive ? "text-emerald-700 font-semibold" : "text-gray-600"
            }`
          }
        >
          About Us
        </NavLink>

        <Link
          to="/login"
          className="rounded-full bg-blue-400 px-5 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:text-blue-950"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;