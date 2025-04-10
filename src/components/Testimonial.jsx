import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Karmen Posto",
      title: "Organic Farmer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "Thanks to AgriBuddy, I've learned how to naturally enhance soil fertility and reduce my dependency on chemical fertilizers. My crops are healthier and more sustainable!",
    },
    {
      name: "Heimlin Marka",
      title: "Rice Farmer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "The irrigation tips I got from this platform helped me save water and increase my yield. It's a game-changer for small-scale farmers like me.",
    },
    {
      name: "Karmel Otto",
      title: "Vegetable Grower",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      review:
        "AgriBuddy's pest control advice is spot on. I now use natural repellents effectively and have seen a huge improvement in my produce quality.",
    },
    {
      name: "Nimrat Kaur",
      title: "Wheat Farmer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      review:
        "I followed AgriBuddy’s seasonal crop rotation advice and noticed a clear boost in productivity. It’s helping me preserve soil health year-round.",
    },
    {
      name: "Rajeev Patel",
      title: "Fruit Orchard Owner",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
      review:
        "The fruit care techniques I discovered here are outstanding. I’ve reduced fruit spoilage significantly, and my customers are loving the freshness!",
    },
  ];
  return (
    <div className="container mx-auto my-10">
      <div>
        <h2 className="text-3xl font-semibold">See What Users Are Saying</h2>
        <p className="text-xl md:w-1/2 mb-4">
          We are basically sharing agriculture tips to help farmers grow better.
        </p>
      </div>
      <>
        <Swiper
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <div className="bg-[#f4f6ff] py-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, index) => (
                <SwiperSlide>
                  <div key={index} className="bg-white rounded-xl shadow-sm">
                    <div className="p-6">
                      <div className="flex gap-1 text-green-400 mb-4">
                        {Array(5)
                          .fill()
                          .map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                      </div>
                      <p className="text-gray-700">{t.review}</p>
                    </div>
                    <div className="bg-green-600 text-white flex items-center gap-4 p-4 rounded-b-xl">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-14 h-14 rounded-full border-4 border-white object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-lg">{t.name}</h3>
                        <p className="text-sm">{t.title}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </div>
        </Swiper>
      </>
    </div>
  );
};

export default Testimonial;
