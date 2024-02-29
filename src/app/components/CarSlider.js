"use client";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";

// next image
import Image from "next/image";

// icons
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "/variants";

// car data
const cars = [
  {
    type: "Hatchback",
    brand: "Perodua",
    name: "Myvi",
    price: 120,
    stars: 5,
    image: "images/carSlider/car01.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "4 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "102 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Sedan",
    brand: "Perodua",
    name: "Bezza",
    price: 150,
    stars: 4,
    image: "images/carSlider/car02.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "94 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Sedan",
    brand: "Honda",
    name: "City",
    price: 200,
    stars: 4.1,
    image: "images/carSlider/car03.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "119 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Sedan",
    brand: "Honda",
    name: "Civic",
    price: 350,
    stars: 4.9,
    image: "images/carSlider/car04.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "180 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "SUV",
    brand: "Tesla",
    name: "Model Y",
    price: 370,
    stars: 5,
    image: "images/carSlider/car05.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/ev.svg",
        text: "Electric",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "456 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "All Wheel",
      },
    ],
  },
  {
    type: "Sedan",
    brand: "Tesla",
    name: "Model S",
    price: 590,
    stars: 5,
    image: "images/carSlider/car06.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/ev.svg",
        text: "Electric",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1020 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "All Wheel",
      },
    ],
  },
  {
    type: "Sedan",
    brand: "Mercedes",
    name: "AMG CLA45S",
    price: 1910,
    stars: 5,
    image: "images/carSlider/car07.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "416 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "All Wheel",
      },
    ],
  },
  {
    type: "Sedan",
    brand: "Mercedes",
    name: "AMG CLA63S",
    price: 2490,
    stars: 4.0,
    image: "images/carSlider/car08.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "603 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "All Wheel",
      },
    ],
  },
  {
    type: "Grand Tourer",
    brand: "Aston Martin",
    name: "DB11",
    price: 3770,
    stars: 5,
    image: "images/carSlider/car09.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "4 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "503 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Rear",
      },
    ],
  },
  {
    type: "SUV",
    brand: "Mercedes",
    name: "Benz G",
    price: 4000,
    stars: 5,
    image: "images/carSlider/car10.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "621 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "All Wheel",
      },
    ],
  },
  {
    type: "SUV",
    brand: "Lamborghini",
    name: "Urus",
    price: 6390,
    stars: 5,
    image: "images/carSlider/car11.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "641 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "All Wheel",
      },
    ],
  },
  {
    type: "Supercar",
    brand: "Lamborghini",
    name: "Aventador SVJ",
    price: 4100,
    stars: 5,
    image: "images/carSlider/car12.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "2 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "759 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "All Wheel",
      },
    ],
  },
];

export default function CarSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {cars.map((car, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="max-w-[385px] mx-auto sm:mx-0">
                <Image src={car.image} width={380} height={280} alt="" />
                <div className="flex justify-between">
                  <div>
                    <div className="text-[13px] text-secondary uppercase">
                      {car.type}
                    </div>
                    <h2 className="text-lg uppercase font-bold">{car.brand}</h2>
                    <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                    <div className="mb-10 text-transparent bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text font-semibold uppercase">
                      RM {car.price} / day
                    </div>
                  </div>
                  {/* stars */}
                  <div className="flex gap-x-2 text-yellow-300 h-max">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                {/* car info */}
                <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                  {car.info.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2">
                          <Image
                            src={item.icon}
                            width={24}
                            height={24}
                            alt=""
                          />
                        </div>
                        <div className="text-[12px] uppercase">{item.text}</div>
                      </div>
                    );
                  })}
                </div>
                <button className="btn btn-lg bg-gradient-to-r from-blue-600 to-green-500">
                  See details
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
