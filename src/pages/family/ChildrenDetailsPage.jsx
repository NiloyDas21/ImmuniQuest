
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  UserRound,
  CalendarDays,
  Syringe,
  Clock,
  CheckCircle2,
  AlertCircle,
  ClipboardList,
  MapPin,
} from "lucide-react";

function ChildrenDetailsPage() {
  const { childId } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Overview");

  // Temporary mock data
  const child = {
    name: "Niloy Das",
    dob: "2024-02-21",
    gender: "Male",
    age: "2 years, 8 months",
    bloodGroup: "B+",
    totalVaccines: 12,
    completedVaccines: 8,
    upcomingVaccines: 3,
    overdueVaccines: 1,
  };

  const tabs = [
    "Overview",
    "Vaccination Schedule",
    "History",
    "Appointments",
  ];

  const progress =
    (child.completedVaccines / child.totalVaccines) * 100;

  return (
    <div className="space-y-6">

      {/* Back Navigation */}
      <button
        onClick={() => navigate("/family/children")}
        className="flex items-center gap-2 text-gray-500 hover:text-green-700 transition"
      >
        <ArrowLeft size={18} />
        Back to Children
      </button>

      {/* Child Profile */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">

          <div className="w-20 h-20 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
            <UserRound size={38} />
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">
              {child.name}
            </h1>

            <p className="text-gray-500 mt-1">
              {child.gender} · {child.age} old
            </p>

            <p className="text-sm text-gray-400 mt-2">
              Child ID: {childId}
            </p>
          </div>

          <div className="bg-green-50 text-green-700 px-4 py-2 rounded-xl text-sm font-medium">
            Registered Child
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-7 pt-6 border-t border-gray-100">

          <div>
            <p className="text-sm text-gray-400">Date of Birth</p>
            <p className="font-semibold text-gray-800 mt-1">
              {child.dob}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Gender</p>
            <p className="font-semibold text-gray-800 mt-1">
              {child.gender}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Blood Group</p>
            <p className="font-semibold text-gray-800 mt-1">
              {child.bloodGroup}
            </p>
          </div>

        </div>
      </div>

      {/* Vaccination Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">Completed Vaccines</p>
            <CheckCircle2 className="text-green-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-3">
            {child.completedVaccines}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">Upcoming Vaccines</p>
            <CalendarDays className="text-blue-600" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-3">
            {child.upcomingVaccines}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">Overdue Vaccines</p>
            <AlertCircle className="text-red-500" />
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-3">
            {child.overdueVaccines}
          </p>
        </div>

      </div>

      {/* Vaccination Progress */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold text-gray-900">
            Vaccination Progress
          </h2>
          <span className="text-green-700 font-semibold">
            {Math.round(progress)}%
          </span>
        </div>

        <div className="w-full bg-gray-100 rounded-full h-3">
          <div
            className="bg-green-600 h-3 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-sm text-gray-400 mt-3">
          {child.completedVaccines} of {child.totalVaccines} vaccines completed
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-white border border-gray-200 rounded-2xl">

        <div className="flex gap-6 overflow-x-auto border-b border-gray-100 px-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 text-sm font-medium whitespace-nowrap border-b-2 transition ${
                activeTab === tab
                  ? "border-green-600 text-green-700"
                  : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6">

          {activeTab === "Overview" && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Vaccination Overview
              </h3>
              <p className="text-sm text-gray-500">
                Track your child's vaccination progress and stay updated
                with upcoming and overdue vaccines.
              </p>
            </div>
          )}

          {activeTab === "Vaccination Schedule" && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Vaccination Schedule
              </h3>
              <p className="text-sm text-gray-500">
                Your child's scheduled vaccines will appear here.
              </p>
            </div>
          )}

          {activeTab === "History" && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Vaccination History
              </h3>
              <p className="text-sm text-gray-500">
                Previously administered vaccines will appear here.
              </p>
            </div>
          )}

          {activeTab === "Appointments" && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Appointments
              </h3>
              <p className="text-sm text-gray-500">
                Your child's vaccination appointments will appear here.
              </p>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}

export default ChildrenDetailsPage;
