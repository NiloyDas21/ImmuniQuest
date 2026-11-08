
import { NavLink, Link } from "react-router-dom";
import {
  HeartPulse,
  LayoutDashboard,
  Users,
  Syringe,
  CalendarDays,
  Bell,
  UserRound,
  LogOut,
  
} from "lucide-react";

function Sidebar() {
  
  const navItems = [
    {
      name:"Dashboard",
      path:"/family",
      icon:LayoutDashboard,
      end:true
    },
    {   
      name:"My Children",
      path:"/family/child",
      icon:Users
    },
    {
      name:"Vaccination Schedule",
      path:"/family/vaccineschedule",
      icon:Syringe
    },
    {
      name:"Appointments",
      path:"/family/appointments",
      icon:CalendarDays
    },
    {
      name:"Notifications",
      path:"/family/notifications",
      icon:Bell
    },
    {
      name:"Profile",
      path:"/family/profile",
      icon:UserRound
    }
  ]
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col shrink-0">

      {/* Logo */}
      <Link
        to="/dashboard"
        className="flex items-center gap-2 px-6 py-6 border-b border-gray-100"
      >
        <HeartPulse size={30} className="text-green-700" />

        <span className="text-xl font-bold text-green-900">
          ImmuniQuest
        </span>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">

        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-4">
          Main Menu
        </p>
        
         {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200
                ${
                  isActive
                    ? "bg-green-100 text-green-800"
                    : "text-gray-600 hover:bg-green-50 hover:text-green-800"
                }`
              }
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-100">

        <Link
          to="/login"
          className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition"
        >
          <LogOut size={19} />
          <span>Logout</span>
        </Link>

        <p className="text-xs text-gray-400 text-center mt-5">
          © 2026 ImmuniQuest
        </p>

      </div>

    </aside>
  );
}

export default Sidebar;
