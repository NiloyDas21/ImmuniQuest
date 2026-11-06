import { HeartPulse } from "lucide-react";
function Navbar() {
  return (
    <nav className="flex min-h-19.5 items-center justify-between bg-white px-[10%] py-6 shadow-md">
      <div className="flex items-center gap-2 text-[30px] font-bold  text-[#12a98b]  ">
        <HeartPulse className="h-8 w-8 text-emerald-600" />
        <span>
          <span className="text-green-700">Immuni</span>Quest
        </span>
      </div>
      <div className="flex items-center gap-9">
        <div className="cursor-pointer text-lg text-gray-600 transition-all duration-300 hover:scale-110 hover:text-emerald-700">
          Home
        </div>
        <div className="cursor-pointer text-lg text-gray-600 transition-all duration-300 hover:scale-110 hover:text-emerald-700">
          AboutUs
        </div>
         <button className="rounded-full bg-blue-400 px-5 py-2 text-white transition-all hover:bg-blue-600  duration-300 hover:scale-105 hover:text-blue-950 ">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;