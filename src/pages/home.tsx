import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from "swiper/modules";
import MomBorder from "../img/MomBorder.png";
import Reviews from '../components/Reviews'
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import GoogleStars from "../img/GoogleStars.png";

function Review(props: { Name: string; review: string }) {
  console.log(props);
  return (
    <div className="flex justify-center mb-6 p-4 bg-white h-full shadow-lg rounded-lg border" style={{ userSelect: "none" }}>
      <div className="flex flex-col">
        <img src={GoogleStars} alt='' className=" max-h-[10rem] max-w-[15rem] mx-auto" />
        <p className="text-md font-BubblyReg text-yellow-600">{props.review}</p>
        <p className="text-md font-BubblyBold text-blue-600">-- {props.Name}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [slidesPerView, setSlidesPerView] = React.useState(
    window.innerWidth < 768 ? 1 : 3
  );

  React.useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(
        window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 2
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col pb-4" style={{ userSelect: "none" }}>
      <NavBar />
      <img src={MomBorder} alt='' className="h-[3rem]" /> 
      <div className="flex justify-center items-center px-4 py-5 outline h-[50vh]">
        <div className="flex ">
          <h1 className="font-BubblyBold lg:text-6xl md:text-6xl text-4xl">
            Sunkiss academy
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#9cdee7] py-10 mt-[2rem]">
        <div className="flex flex-col text-center w-[70%] gap-2 max-w-[60rem] ">
          <h2 className="font-BubblyBold text-5xl">About Us </h2>
          <p className="text-2xl font-BubblyReg">
            Welcome to our In-Home Childcare in Lynnwood! We are dedicated to
            providing a safe and nurturing environment for children to learn and
            grow. Our experienced staff is passionate about early childhood
            education and is committed to fostering the development of each
            child in our care.
          </p>
          <p className="text-2xl font-BubblyReg">
            At our center, we offer a wide range of age-appropriate activities
            and educational programs that promote social, emotional, cognitive,
            and physical development. From interactive play to structured
            learning, we strive to create a well-rounded experience for every
            child.
          </p>
        </div>
      </div>
      <div className="w-full h-full mt-[2rem] px-[20px] max-w-[80rem] mx-auto">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="w-full bg-white mx-auto"
        >
          {Reviews.map((review :any) => (
            <SwiperSlide key={review.id}>
              <Review Name={review.name} review={review.review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer/>
    </div>
  );
}
