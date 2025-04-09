import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import AgriLearning from "../pages/AgriLearning";
import AgriLearningDetails from "../pages/AgriLearningDetails";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="signin" element={<SignIn></SignIn>}></Route>
        <Route
          path="agrilearning"
          element={<AgriLearning></AgriLearning>}
        ></Route>
        <Route
          path="agrilearningdetails/:agriDetails"
          element={
            <PrivateRoute>
              <AgriLearningDetails></AgriLearningDetails>
            </PrivateRoute>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default Router;
