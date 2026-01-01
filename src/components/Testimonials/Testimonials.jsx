import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import customer1 from "../../assets/customer1.jpg";
import customer2 from "../../assets/customer2.jpg";
import customer3 from "../../assets/customer3.jpg";
import customer4 from "../../assets/customer4.jpg";
import customer5 from "../../assets/customer5.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  return (
    <section>
      <div className="max-w-[1300px]  mx-auto px-10 my-20">
        <Heading highlight="Customers" heading="Saying" />
        {/* Arrow button */}
        <div className="py-5 flex justify-end mt-5 gap-2">
          <button className="focus:outline-none custom-prev text-2xl text-zinc-800 bg-zinc-100  rounded-lg p-1 cursor-pointer hover:bg-[var(--primary)] hover:text-white">
            <IoIosArrowBack />
          </button>
          <button className="focus:outline-none custom-next text-2xl text-zinc-800 bg-zinc-100 rounded-lg p-1 cursor-pointer hover:bg-[var(--primary)] hover:text-white">
            <IoIosArrowForward />
          </button>
        </div>

        {/* testimonials card */}

        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {review.map(item => {
            return (
              <SwiperSlide className="p-8 bg-zinc-100">
                <div className=" flex flex-row items-center gap-5 ">
                  <div className="h-15 w-15 rounded-full bg-black outline-2 outline-offset-6 outline-[var(--primary)] overflow-hidden">
                    <img src={item.image} className="w-full h-full" />
                  </div>
                  <div>
                    {" "}
                    <h5 className="text-xl text-zinc-800 font-bold">
                      {item.name}
                    </h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <p className="text-yellow-500 gap-2 mt-3 text-xl flex">
                      {Array.from({ length: item.rating }, (_, index) => (
                        <FaStar />
                      ))}
                    </p>
                  </div>
                </div>
                <div className="mt-10 min-h-[17vh] ">
                  <p>{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    rating: 4,
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    image: customer1,
  },
  {
    id: 2,
    name: "David Smith",
    profession: "Chef",
    rating: 5,
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    image: customer2,
  },
  {
    id: 3,
    name: "Alya Zahra",
    profession: "Model",
    rating: 3.5,
    para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
    image: customer3,
  },
  {
    id: 4,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    rating: 4,
    para: "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
    image: customer4,
  },
  {
    id: 5,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    rating: 4,
    para: "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
    image: customer5,
  },
];
