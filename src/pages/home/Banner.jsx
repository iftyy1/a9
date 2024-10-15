import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src={
              "https://i.ibb.co.com/MhGmTx9/istockphoto-155700839-612x612.jpg"
            }
            className="w-1/2"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://i.ibb.co.com/4Yr7Gww/istockphoto-149060607-612x612.jpg"
            }
            className="w-1/2"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={
              "https://i.ibb.co.com/pzTXYBv/istockphoto-1460658780-612x612.jpg"
            }
            className="w-1/2 "
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
