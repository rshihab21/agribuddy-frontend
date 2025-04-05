import { Link } from "react-router-dom";
import signInAnimation from "../assets/signin.json";
import Lottie from "lottie-react";
const SignIn = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row">
      {/* Left: Sign In Form  */}
      <div className="w-full md:w-3/5 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h2 className="text-sm text-green-600 text-center font-medium">
            Welcome back!
          </h2>
          <h1 className="text-3xl font-bold text-center mt-1 mb-2">
            Member Login
          </h1>

          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg mb-4 hover:bg-gray-100 cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>

          <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-sm text-gray-500">Or continue with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium">Email address *</label>
              <input
                type="text"
                name="email"
                placeholder="agribuddy@gmail"
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-green-600 hover:underline">
                Forgot Password
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-green-900 text-white py-2 rounded-lg hover:bg-green-800 cursor-pointer"
            >
              Sign In
            </button>

            <p className="text-sm text-center mt-4">
              Don’t have an Account?
              <Link to="/register" className="text-green-600 hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right: Image */}
      <div className="hidden md:flex w-full md:w-2/5 items-center justify-start">
        <Lottie animationData={signInAnimation} loop={true} />
      </div>
    </div>
  );
};

export default SignIn;
