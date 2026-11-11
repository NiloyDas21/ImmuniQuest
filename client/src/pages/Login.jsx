import { HeartPulse, ArrowRight } from "lucide-react";
import healthworker from "../assests/Healthworker.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="grid min-h-screen md:grid-cols-2">

      {/* Left: illustration panel */}
      <div className="hidden bg-[radial-gradient(ellipse_at_50%_45%,#9BE7CE_0%,#C8F1E3_45%,#F7FCFA_100%)] p-10 lg:p-14 md:flex md:flex-col">

        {/* Illustration */}
        <div className="flex flex-1 items-center justify-center">
          <img
            src={healthworker}
            alt="Healthcare professional"
            className="w-full max-w-130 max-h-140 object-contain"
          />
        </div>

        {/* Welcome text */}
        <div className="mt-5">
          <h2 className="text-3xl font-bold text-[#075B49]">
            Welcome Back
          </h2>

          <p className="mt-3 text-lg text-gray-600">
            Manage your health journey with ImmuniQuest.
          </p>
        </div>

      </div>

      {/* Right: form */}
      <div className="flex items-center justify-center p-8">

        <form className="w-full max-w-md flex flex-col m-2">
            {/*Logo*/}
            <div className="mb-5 flex items-center gap-2">
            <HeartPulse className="h-8 w-8 text-emerald-600" />
            <h2 className="text-xl font-bold text-gray-900">
            ImmuniQuest
            </h2>
            </div>

            <div className="mb-4">
                <span className="text-black font-bold text-2xl ">Sign in to your account</span>
                <p className="text-gray-500">Don't have an account?
                    <Link to ="/register" className="ml-1 font-semibold text-emerald-500 hover:text-emerald-700">
                        Sign up for free
                    </Link>
                </p>
            </div>
            <div className="mb-5">
            <label  className="mb-2 block text-sm font-medium text-gray-700">
                Email address
            </label>

            <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
            </div>
            <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Password</label>  
          <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
            </div>
            <div className=" flex items-center justify-between mt-4">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" name="rememberMe"/>
                        Remember me
                </label>
                <Link to="/forgot-password" className="text-emerald-500 hover:text-emerald-600">
                    Forgot password?
                </Link>
            </div>
            {/*Sign in*/}
            <button type="submit" className="w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white shadow-lg shadow-emerald-100 transition hover:bg-emerald-700 mt-4 flex justify-center items-center gap-1">
                Sign in <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                
            </button>
        </form>
      </div>

    </div>
  );
}

export default Login;
