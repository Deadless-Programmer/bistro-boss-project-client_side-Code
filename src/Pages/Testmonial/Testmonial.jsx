import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "@smastrom/react-rating/style.css";

// Declare it outside your component so it doesn't get re-created

import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
const Testmonial = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <SectionTitle
        heading={"TESTMONIALS"}
        subHeading={"What our client say"}
      ></SectionTitle>
      
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper my-14"
      >
        {review.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="w-3/4 mx-auto">
              <div className="flex justify-center py-2">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={item.rating}
                  readOnly
                />
          
              </div>
              <p className=" flex justify-center text-6xl py-8">
        <FaQuoteLeft />
      </p>
              <p className="text-center">{item.details}</p>
              <h2 className="text-2xl text-orange-600 text-center">
                {item.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testmonial;
