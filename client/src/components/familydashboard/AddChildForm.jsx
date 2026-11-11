import { Plus, Minus } from "lucide-react";

function AddChildForm({ showForm, setShowForm, handleSubmit }) {
  const inputStyle =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition";

  return (
    <>
      <button
        onClick={() => setShowForm(!showForm)}
        className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition"
      >
        {showForm ? <Minus size={19} /> : <Plus size={19} />}
        {showForm ? "Close Form" : "Add Child"}
      </button>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-6 bg-green-50/60 border border-green-100 rounded-2xl p-5 md:p-6 space-y-5"
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
    </>
  );
}

export default AddChildForm;