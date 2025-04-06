import bannerImgOne from "../assets/images/farmer_one.jpg";
import bannerImgTwo from "../assets/images/farmer_two.png";
import { motion } from "motion/react";
const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <div className="md:grid grid-cols-2 py:12 md:py-4 flex justify-center items-center p-4">
        <div>
          <h4 className="text-2xl font-semibold text-green-600">
            Make Dream Gardening
          </h4>
          <motion.h2 className="text-5xl font-bold leading-14">
            Landscaping & Maintenance
          </motion.h2>
          <p className="text-xl mt-2">
            Dissuade ecstatic and properly saw entirely sir why laughter
            endeavor. In on my jointure horrible margaret suitable he followed.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="border border-green-700 px-8 py-2 mt-4 rounded cursor-pointer"
          >
            Reed More
          </motion.button>
        </div>
        <div className="hidden  md:flex md:flex-col md:items-center">
          <motion.img
            animate={{ y: [50, 100, 50] }}
            transition={{ ease: "easeOut", duration: 2, repeat: Infinity }}
            className="w-60"
            src={bannerImgOne}
            alt=""
          />
          <motion.img
            animate={{ x: [100, 50, 100] }}
            transition={{ ease: "easeOut", duration: 2, repeat: Infinity }}
            className="w-60"
            src={bannerImgTwo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
