import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/virtual";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle";


const Category = () => {
  // const images = [slide1, slide2, slide3, slide4, slide5, slide1, slide2, slide3, slide4, slide5];

  return (
    <>
  <SectionTitle  heading={"ORDER ONLINE"}  subHeading={'From 11.00 am to 11.00 pm'} >
 
 
  </SectionTitle>
    <Swiper
      modules={[Navigation, Pagination, Autoplay, Virtual]}
      virtual
      slidesPerView={4} // Adjust this to show more images at once
      spaceBetween={20} // Adjust the gap between slides (set to 10px)
      onReachEnd={() => {
        console.log("reach end");
      }}
      navigation
      pagination
      autoplay={{ delay: 3000 }} // Optional: Autoplay settings
      className="mb-16"
    >
      <SwiperSlide style={{ listStyle: "none" }}>
        <div className="slide">
          <img src={slide1} style={{ width: "100%" }} />
          <h3 className="text-white text-4xl uppercase text-center -mt-28 pb-10">
            SALADS
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ listStyle: "none" }}>
        <div className="slide">
          <img src={slide2} style={{ width: "100%" }} />
          <h3 className="text-white text-4xl uppercase text-center -mt-28">
            SOUPS
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ listStyle: "none" }}>
        <div className="slide">
          <img src={slide3} style={{ width: "100%" }} />
          <h3 className="text-white text-4xl uppercase text-center -mt-28">
            PIZZAS
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ listStyle: "none" }}>
        <div className="slide">
          <img src={slide4} style={{ width: "100%" }} />
          <h3 className="text-white text-4xl uppercase text-center -mt-28 ">
            DESERTS
          </h3>
        </div>
      </SwiperSlide>
      <SwiperSlide style={{ listStyle: "none" }}>
        <div className="slide">
          <img src={slide5} style={{ width: "100%" }} />
          <h3 className="text-white text-4xl uppercase text-center -mt-28">
            SALADS
          </h3>
        </div>
      </SwiperSlide>
    </Swiper>
    </>
  );
};

export default Category;
