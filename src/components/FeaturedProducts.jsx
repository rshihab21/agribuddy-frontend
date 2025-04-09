import { motion } from "motion/react";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Awesome Brokoli",
      img: "src/assets/images/Vector-Smart-Object-1.png",
    },
    {
      name: "Orange Pumpkin",
      img: "src/assets/images/Vector-Smart-Object-2.png",
    },
    {
      name: "Juicy Tomato",
      img: "src/assets/images/Vector-Smart-Object-4.png",
    },
    {
      name: "Crispy Cabbage",
      img: "src/assets/images/Vector-Smart-Object-5.png",
    },
    { name: "Bomb Corn", img: "src/assets/images/paddy.png" },
    {
      name: "The Best Potato",
      img: "src/assets/images/Vector-Smart-Object-6.png",
    },
    {
      name: "Juicy Radish",
      img: "src/assets/images/Vector-Smart-Object-8.png",
    },
    {
      name: "Orange Pumpkin",
      img: "src/assets/images/Vector-Smart-Object-9.png",
    },
    {
      name: "Awesome Gross",
      img: "src/assets/images/Vector-Smart-Object-10.png",
    },
    {
      name: "Blue Eggplant",
      img: "src/assets/images/Vector-Smart-Object-11.png",
    },
    { name: "Red Radish", img: "src/assets/images/Vector-Smart-Object-12.png" },
    {
      name: "Walnut Olives",
      img: "src/assets/images/Vector-Smart-Object-13.png",
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
