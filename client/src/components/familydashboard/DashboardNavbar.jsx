import {
  Bell,
  ChevronDown,
  UserRound
} from "lucide-react";

function DashboardNavbar() {
  return (
    <header className="h-20 bg-white border-b border-gray-200 px-6 md:px-8 flex items-center justify-between">

      {/* Page Heading */}
      <div>
        <h1 className="text-lg font-semibold text-gray-800">
          Family Dashboard
        </h1>

        <p className="text-sm text-gray-500">
          Manage your children's vaccination records
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative p-2 rounded-full text-gray-600 hover:bg-green-50 hover:text-green-700 transition"
        >
          <Bell size={21} />

          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">

          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <UserRound size={22} className="text-green-700" />
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">
              Family Member
            </p>

            <p className="text-xs text-gray-500">
              Parent Account
            </p>
          </div>

          <ChevronDown size={17} className="text-gray-500" />

        </div>

      </div>

    </header>
  );
}

export default DashboardNavbar;
