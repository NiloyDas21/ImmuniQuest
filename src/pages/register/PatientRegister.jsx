
import { Link } from "react-router-dom";
import {
  HeartPulse,
  ArrowLeft,
  UserRound,
  Mail,
  Phone,
  LockKeyhole,
  Users,
} from "lucide-react";

function PatientRegister() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Family member registration:", data);

    // Backend API integration will be added later.
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center px-5 py-12">

      <div className="w-full max-w-xl">

        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <HeartPulse className="h-9 w-9 text-emerald-600" />

          <span className="text-3xl font-bold text-emerald-800">
            ImmuniQuest
          </span>
        </Link>

        {/* Registration Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-teal-100 p-7 md:p-9">

          {/* Back Link */}
          <Link
            to="/register"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-teal-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to registration options
          </Link>

          {/* Heading */}
          <div className="mb-7">
            <h1 className="text-3xl font-bold text-slate-800">
              Family Registration
            </h1>

            <p className="mt-2 text-slate-500">
              Create an account to manage your child's vaccination journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full Name
              </label>

              <div className="relative">
                <UserRound className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />

                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  required
                  autoComplete="name"
                  className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
              </div>
            </div>

            {/* Relationship */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Relationship with Child
              </label>

              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />

                <select
                  name="relationship"
                  required
                  defaultValue=""
                  className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl bg-white outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                >
                  <option value="" disabled>
                    Select relationship
                  </option>

                  <option value="mother">Mother</option>
                  <option value="father">Father</option>
                  <option value="guardian">Legal Guardian</option>
                  <option value="other">Other Family Member</option>
                </select>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  autoComplete="email"
                  className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number
              </label>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                  autoComplete="tel"
                  className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Create Password
              </label>

              <div className="relative">
                <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />

                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  required
                  minLength={8}
                  autoComplete="new-password"
                  className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Confirm Password
              </label>

              <div className="relative">
                <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  required
                  minLength={8}
                  autoComplete="new-password"
                  className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-colors shadow-md shadow-teal-100"
            >
              Create Family Account
            </button>

          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{" "}

            <Link
              to="/login"
              className="font-semibold text-teal-700 hover:text-teal-900"
            >
              Sign in
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default PatientRegister;
