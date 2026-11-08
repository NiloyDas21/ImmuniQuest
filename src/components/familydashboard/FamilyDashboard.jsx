
import { useState } from "react";

import {
  Users,
  CalendarDays,
  CircleAlert,
  Syringe,
  Plus,
  Minus,
  Trash2,
  Clock3,
} from "lucide-react";

function FamilyDashboard() {
  const data = [
    { name: "Niloy", dob: "2024-02-21", gender: "Male" },
  ];

  const [child, setChild] = useState(data);
  const [showForm, setShowForm] = useState(false);

  // Demo vaccination data
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

  function AddChild(newchild) {
    setChild((prev) => [...prev, newchild]);
    setShowForm(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    AddChild(Object.fromEntries(formData));
    e.target.reset();
  }

  function deleteEntry(key) {
    const updateChildren = child.filter((each,index) =>{
        return index !== key;
    })
    
    //update the status
    setChild(updateChildren);
  }

  function getAge(dob) {
    const [year, month, day] = dob.split("-").map(Number);

    const birthday = new Date(year, month - 1, day);
    const today = new Date();

    let years = today.getFullYear() - birthday.getFullYear();
    let months = today.getMonth() - birthday.getMonth();
    let days = today.getDate() - birthday.getDate();

    if (days < 0) {
      months--;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years === 0) return `${months} months`;
    if (months === 0) return `${years} years`;

    return `${years} years, ${months} months`;
  }

  const inputStyle =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition";

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

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">

        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-center justify-between hover:shadow-md transition"
            >
              <div>
                <p className="text-sm md:text-base text-gray-500">
                  {stat.title}
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-2">
                  {stat.value}
                </h2>
              </div>

              <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
                <Icon size={28} strokeWidth={1.9} />
              </div>
            </div>
          );
        })}

      </div>

      {/* My Children */}
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

          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition shadow-sm"
          >
            {showForm ? <Minus size={19} /> : <Plus size={19} />}

            {showForm ? "Close Form" : "Add Child"}
          </button>

        </div>

        {/* Add Child Form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mb-8 bg-green-50/60 border border-green-100 rounded-2xl p-5 md:p-6 space-y-5"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Add Child Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Child's Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter child's name"
                  required
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>

                <input
                  type="date"
                  name="dob"
                  required
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>

                <select
                  name="gender"
                  required
                  defaultValue=""
                  className={inputStyle}
                >
                  <option value="" disabled>
                    Select gender
                  </option>

                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-3">

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition"
              >
                Save Child
              </button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-medium hover:bg-white transition"
              >
                Cancel
              </button>

            </div>
          </form>
        )}

        {/* Child Cards */}
        {child.length === 0 ? (

          <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl">
            <Users size={35} className="mx-auto text-gray-400 mb-3" />

            <p className="text-gray-500">
              No children added yet.
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Click Add Child to create your first profile.
            </p>
          </div>

        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {child.map((item, index) => (

              <div
                key={index}
                className="flex items-center justify-between gap-4 border border-gray-200 rounded-2xl p-5 hover:border-green-300 hover:shadow-sm transition"
              >

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

                <button
                  onClick={() => deleteEntry(index)}
                  title="Delete child"
                  aria-label={`Delete ${item.name}`}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                >
                  <Trash2 size={20} strokeWidth={1.9} />
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

      {/* Upcoming Vaccinations */}
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
