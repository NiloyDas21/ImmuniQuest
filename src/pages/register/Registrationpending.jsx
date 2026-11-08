
import { Link } from "react-router-dom";
import {
  HeartPulse,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Mail,
  ArrowRight
} from "lucide-react";

function RegistrationPending() {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-xl">

        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <HeartPulse size={32} className="text-green-700" />
          <span className="text-2xl font-bold text-green-900">
            ImmuniQuest
          </span>
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-green-100 p-8 sm:p-10 text-center">

          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 size={52} className="text-green-600" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Application Submitted!
          </h1>

          <p className="text-gray-500 leading-relaxed mb-6">
            Thank you for registering with ImmuniQuest.
            Your application has been successfully submitted
            and is awaiting administrative approval.
          </p>

          {/* Status */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-medium text-sm mb-8">
            <Clock size={17} />
            Pending Approval
          </div>

          {/* Next Steps */}
          <div className="text-left bg-green-50 rounded-2xl p-6 mb-7">

            <h2 className="text-lg font-semibold text-green-900 mb-5">
              What happens next?
            </h2>

            <div className="space-y-5">

              <div className="flex gap-3">
                <ShieldCheck className="text-green-700 shrink-0" size={22} />
                <div>
                  <h3 className="font-medium text-gray-800">
                    Credential Verification
                  </h3>
                  <p className="text-sm text-gray-500">
                    Our administration team will review your
                    professional credentials.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="text-green-700 shrink-0" size={22} />
                <div>
                  <h3 className="font-medium text-gray-800">
                    Approval Notification
                  </h3>
                  <p className="text-sm text-gray-500">
                    You will be notified once your application
                    has been reviewed.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="text-green-700 shrink-0" size={22} />
                <div>
                  <h3 className="font-medium text-gray-800">
                    Access Your Dashboard
                  </h3>
                  <p className="text-sm text-gray-500">
                    Once approved, you can log in and access
                    your healthcare dashboard.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Login Button */}
          <Link
            to="/login"
            className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-3.5 rounded-xl transition duration-200"
          >
            Return to Login
            <ArrowRight size={18} />
          </Link>

          <p className="text-xs text-gray-400 mt-5">
            Your account will remain inactive until approved
            by the ImmuniQuest administration team.
          </p>

        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          © 2026 ImmuniQuest. All rights reserved.
        </p>

      </div>
    </div>
  );
}

export default RegistrationPending;
