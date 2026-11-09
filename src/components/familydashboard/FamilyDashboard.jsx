import { useState } from "react";

import {
  Users,
  CalendarDays,
  CircleAlert,
  Syringe,
  Clock3,
} from "lucide-react";

import StatsCards from "./StatsCards.jsx";
import AddChildForm from "./AddChildForm.jsx";
import ChildCard from "./ChildCard.jsx";
import getAge from "../../utils/getAge.js";

function FamilyDashboard() {
  const data = [
    {
      name: "Niloy",
      dob: "2024-02-21",
      gender: "Male",
    },
  ];

  const [child, setChild] = useState(data);
  const [showForm, setShowForm] = useState(false);

  // Add Child
  function AddChild(newchild) {
    setChild((prev) => [...prev, newchild]);
    setShowForm(false);
  }

  // Handle Form Submission
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newchild = Object.fromEntries(formData);

    AddChild(newchild);
    e.target.reset();
  }

  // Delete Child
  function deleteEntry(key) {
    setChild((prev) =>
      prev.filter((item, index) => index !== key)
    );
  }


  // Dashboard Statistics
  const stats = [
    {
      title: "Total Children",
      value: child.length,
      icon: Users,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Upcoming Vaccines",
      value: 2,
      icon: CalendarDays,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Overdue Vaccines",
      value: 1,
      icon: CircleAlert,
      color: "text-red-500",
      bg: "bg-red-50",
    },
    {
      title: "Vaccines Completed",
      value: 8,
      icon: Syringe,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
  ];

  // Demo Upcoming Vaccinations
  const upcomingVaccinations = [
    {
      vaccine: "DPT Booster",
      childName: "Niloy",
      date: "15 November 2026",
    },
    {
      vaccine: "MMR Vaccine",
      childName: "Niloy",
      date: "22 November 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-5 md:p-8">

      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Welcome back!
        </h1>

        <p className="text-gray-500 mt-2 text-base md:text-lg">
          Keep track of your children's vaccination journey.
        </p>
      </div>

      {/* Statistics */}
      <StatsCards stats={stats} />

      {/* My Children Section */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 mb-10">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              My Children
            </h2>

            <p className="text-gray-500 mt-1">
              Manage your children's profiles.
            </p>
          </div>

          <AddChildForm
            showForm={showForm}
            setShowForm={setShowForm}
            handleSubmit={handleSubmit}
          />

        </div>

        {/* Child List */}
        {child.length === 0 ? (
          <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl">
            <Users
              size={35}
              className="mx-auto text-gray-400 mb-3"
            />

            <p className="text-gray-500">
              No children added yet.
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Click Add Child to create your first profile.
            </p>
          </div>
        ) : (
          <ChildCard
            child={child}
            deleteEntry={deleteEntry}
            getAge={getAge}
          />
        )}

      </div>

      {/* Upcoming Vaccinations - Kept Inside FamilyDashboard */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">

        <div className="mb-7">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Upcoming Vaccinations
          </h2>

          <p className="text-gray-500 mt-1">
            Don't miss your children's upcoming doses.
          </p>
        </div>

        <div className="space-y-4">

          {upcomingVaccinations.map((vaccine, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-green-50 rounded-xl p-5 hover:bg-green-100/70 transition"
            >

              <div>
                <h3 className="font-semibold text-gray-900">
                  {vaccine.vaccine}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {vaccine.childName}
                </p>
              </div>

              <div className="flex items-center gap-2 text-green-700 text-sm font-medium">
                <Clock3 size={19} strokeWidth={1.9} />
                {vaccine.date}
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default FamilyDashboard;
