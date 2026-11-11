
import { Trash2, UserRound } from "lucide-react";

function ChildCard({ child, deleteEntry, getAge, renderFooter }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {child.map((item, index) => {
        const initials = item.name
          .trim()
          .split(/\s+/)
          .map((word) => word[0])
          .slice(0, 2)
          .join("")
          .toUpperCase();

        return (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-5 hover:border-green-300 hover:shadow-sm transition"
          >
            <div className="flex items-center justify-between gap-4">

              {/* Avatar + Child Details */}
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-lg shrink-0">
                  {initials || <UserRound size={22} />}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    {item.gender} · {getAge(item.dob)} old
                  </p>

                  <p className="text-sm text-gray-400 mt-2">
                    DOB: {item.dob}
                  </p>
                </div>

              </div>

              {/* Delete Button */}
              <button
                onClick={() => deleteEntry(index)}
                title="Delete child"
                aria-label={`Delete ${item.name}`}
                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition shrink-0"
              >
                <Trash2 size={20} />
              </button>

            </div>
            {/* Optional footer to enable View Details*/}
            {renderFooter && renderFooter(item, index)}
          </div>
        );
      })}
    </div>
  );
}

export default ChildCard;
