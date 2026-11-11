
import { Link, useNavigate } from "react-router-dom";
import {
  HeartPulse,
  ArrowLeft,
  UserRound,
  Mail,
  Phone,
  ShieldCheck,
  BriefcaseMedical,
  Building2,
  IdCard,
  LockKeyhole,
} from "lucide-react";

function CaregiverRegister() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Caregiver registration:", data);
    navigate("/registration-pending")
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
        <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-7 md:p-9">

          <Link
            to="/register"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to registration options
          </Link>

          <div className="mb-7">
            <h1 className="text-3xl font-bold text-slate-800">
              Caregiver Registration
            </h1>

            <p className="mt-2 text-slate-500">
              Register as a nurse, doctor or authorised healthcare professional.
            </p>
          </div>

          {/* Admin approval notice */}
          <div className="flex gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 mb-7">
            <ShieldCheck className="h-6 w-6 text-amber-600 shrink-0" />

            <p className="text-sm text-amber-800 leading-relaxed">
              Your professional credentials will be verified by an
              administrator. Your account will remain pending until approval.
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
                  className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Professional Email
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  autoComplete="email"
                  className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
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
                  className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
            </div>

            {/* Professional Designation */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Professional Designation
              </label>

              <div className="relative">
                <BriefcaseMedical className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />

                <select
                  name="designation"
                  required
                  defaultValue=""
                  className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl bg-white outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                >
                  <option value="" disabled>
                    Select your designation
                  </option>
                  <option value="doctor">Doctor</option>
                  <option value="nurse">Nurse</option>
                  <option value="asha-worker">ASHA Worker</option>
                  <option value="other">Other Healthcare Professional</option>
                </select>
              </div>
            </div>

            {/* Workplace */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Hospital / Health Centre
              </label>

              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />

                <input
                  type="text"
                  name="workplace"
                  placeholder="Enter your workplace"
                  required
                  className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
            </div>

            {/* Professional ID */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Professional ID / Registration Number
              </label>

              <div className="relative">
                <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />

                <input
                  type="text"
                  name="professionalId"
                  placeholder="Enter your professional ID"
                  required
                  className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
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
                  className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
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
                  className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors shadow-md shadow-emerald-100"
            >
              Submit for Approval
            </button>

          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-emerald-700 hover:text-emerald-900"
            >
              Sign in
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default CaregiverRegister;
