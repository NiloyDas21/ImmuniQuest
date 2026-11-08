import { Link } from "react-router-dom";
import {
  HeartPulse,
  Users,
  Baby,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

function RegisterSelect() {
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center px-5 py-12">

      <div className="w-full max-w-4xl">

        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-10">
          <HeartPulse className="h-9 w-9 text-emerald-600" />
          <span className="text-3xl font-bold text-emerald-800">
            ImmuniQuest
          </span>
        </Link>

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
            Join ImmuniQuest
          </h1>

          <p className="mt-3 text-slate-500 text-base md:text-lg">
            Choose the registration type that applies to you.
          </p>
        </div>

        {/* Selection cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Caregiver */}
          <Link
            to="/register/caregiver"
            className="group block text-left bg-white border border-emerald-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-emerald-400 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-16 w-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
              <Users className="h-8 w-8 text-emerald-700 group-hover:text-white" />
            </div>

            <h2 className="text-2xl font-bold text-slate-800">
              I'm a Caregiver
            </h2>

            <p className="mt-3 text-slate-500 leading-relaxed">
              For nurses, doctors and authorised healthcare professionals.
              Register using your professional ID. Your account will be
              activated after verification and admin approval.
            </p>

            <div className="mt-4 flex items-center gap-2 text-emerald-700 font-semibold">
              Register as Caregiver
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Child */}
          <Link
            to="/register/patient"
            className="group block text-left bg-white border border-teal-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-teal-400 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-16 w-16 rounded-2xl bg-teal-100 flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
              <Baby className="h-8 w-8 text-teal-700 group-hover:text-white" />
            </div>

            <h2 className="text-2xl font-bold text-slate-800">
              Register a Child
            </h2>

            <p className="mt-3 text-slate-500 leading-relaxed">
              For parents and family members registering a child for
              vaccination. Enter the child's details to create their
              vaccination profile and track upcoming doses.
            </p>

            <div className="mt-13 flex items-center gap-2 text-teal-700 font-semibold">
              Register a Child
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>

        {/* Security note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
          <ShieldCheck className="h-5 w-5 text-emerald-600" />
          Your information is protected and securely managed.
        </div>

        {/* Login link */}
        <p className="mt-8 text-center text-slate-600">
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
  );
}

export default RegisterSelect;
