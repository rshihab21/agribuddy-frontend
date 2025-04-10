import { motion } from "motion/react";
import product_one from "../assets/images/Vector-Smart-Object-1.png";
import product_two from "../assets/images/Vector-Smart-Object-2.png";
import product_three from "../assets/images/Vector-Smart-Object-4.png";
import product_four from "../assets/images/Vector-Smart-Object-5.png";
import product_five from "../assets/images/paddy.png";
import product_six from "../assets/images/Vector-Smart-Object-6.png";
import product_seven from "../assets/images/Vector-Smart-Object-8.png";
import product_eight from "../assets/images/Vector-Smart-Object-9.png";
import product_nine from "../assets/images/Vector-Smart-Object-10.png";
import product_ten from "../assets/images/Vector-Smart-Object-11.png";
import product_eleven from "../assets/images/Vector-Smart-Object-12.png";
import product_thirty from "../assets/images/Vector-Smart-Object-13.png";
const FeaturedProducts = () => {
  const products = [
    {
      name: "Awesome Brokoli",
      img: product_one,
    },
    {
      name: "Orange Pumpkin",
      img: product_two,
    },
    {
      name: "Juicy Tomato",
      img: product_three,
    },
    {
      name: "Crispy Cabbage",
      img: product_four,
    },
    { name: "Bomb Corn", img: product_five },
    {
      name: "The Best Potato",
      img: product_six,
    },
    {
      name: "Juicy Radish",
      img: product_seven,
    },
    {
      name: "Orange Pumpkin",
      img: product_eight,
    },
    {
      name: "Awesome Gross",
      img: product_nine,
    },
    {
      name: "Blue Eggplant",
      img: product_ten,
    },
    { name: "Red Radish", img: product_eleven },
    {
      name: "Walnut Olives",
      img: product_thirty,
    },
  ];
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-green-600 text-xl font-semibold">Feature Products</h2>
      <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-10">
        We help to growth a large harvest
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6 md:px-12 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              src={product.img}
              alt={product.name}
              className="h-20 object-contain"
            />
            <p className="text-sm font-medium text-gray-800">{product.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
