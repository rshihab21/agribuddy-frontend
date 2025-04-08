import Lottie from "lottie-react";
import resgisterAnimation from "../assets/register.json";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const { createUser, user, userProfileUpdate, googleLogin } = useAuth();
  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const repassword = form.repassword.value;
    if (password != repassword) {
      alert("password doesn't match");
      return;
    }

    console.log(name, email, password, repassword);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        userProfileUpdate(name)
          .then(() => {})
          .catch(() => {});
        if (result.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Registration is successfull",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
        e.target.reset();
      })
      .catch((err) => {
        console.log(err.message);
        if (err) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.message,
          });
        }
      });
  };

  const handleGooglePopupLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Registration is successfull",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.message);
        if (err) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.message,
          });
        }
      });
  };
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

          <button
            onClick={handleGooglePopupLogin}
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg mb-4 hover:bg-gray-100"
          >
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

          <form onSubmit={handleRegistration} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Agri Buddy"
                className="w-full border rounded-lg px-4 py-2 mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email *</label>
              <input
                type="email"
                name="email"
                placeholder="agribuddy@gmail.com"
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
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChecked}
                className="mr-2"
              />
              <span className="text-sm">
                Agree our terms and policy
                <a href="#" className="text-green-600 hover:underline">
                  Learn more
                </a>
              </span>
            </div>

            <button
              type="submit"
              disabled={!isChecked}
              className={`w-full ${
                isChecked ? "bg-green-900" : "bg-green-200 cursor-not-allowed"
              } text-white py-2 rounded-lg  cursor-pointer`}
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
