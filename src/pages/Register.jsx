import Lottie from "lottie-react";
import resgisterAnimation from "../assets/register.json";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row">
      {/* Left: lottie image */}
      <div className="hidden md:flex w-full md:w-1/3 items-center justify-cente">
        <Lottie animationData={resgisterAnimation} loop={true} />;
      </div>
      {/* Right: Register Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mt-1 mb-4 text-green-700">
            Pleage Register Now!
          </h1>

          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg mb-4 hover:bg-gray-100">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </button>

          <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-sm text-gray-500">Or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium">Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Steven Job"
                className="w-full border rounded-lg px-4 py-2 mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email *</label>
              <input
                type="email"
                name="email"
                placeholder="stevenjob@gmail.com"
                className="w-full border rounded-lg px-4 py-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Password *</label>
              <input
                type="password"
                name="password"
                className="w-full border rounded-lg px-4 py-2 mt-1"
                placeholder="password"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Re-Password *</label>
              <input
                type="password"
                name="repassword"
                className="w-full border rounded-lg px-4 py-2 mt-1"
                placeholder="Re-Type password"
              />
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">
                Agree our terms and policy{" "}
                <a href="#" className="text-green-600 hover:underline">
                  Learn more
                </a>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-green-900 text-white py-2 rounded-lg hover:bg-green-800 cursor-pointer"
            >
              Register Now
            </button>

            <p className="text-sm text-center mt-4">
              Already have an account?
              <Link to="/signin" className="text-green-600 hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
