import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MomBorder from "../img/MomBorder.png";
import Reviews from "../components/Reviews";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import GoogleStars from "../img/GoogleStars.png";
import { motion } from "framer-motion";
import Face from "../img/MainPage.jpg";
import Curric from "../img/Counting.jpg";
import Letters from "../img/Letters.jpg";
import Struct from "../img/Struct.svg";
import Staff from "../img/Staff.jpg";

function Review(props: { Name: string; review: string }) {
  console.log(props);
  return (
    <div
      className="flex justify-center mb-6 p-4 bg-white h-full shadow-lg rounded-lg border"
      style={{ userSelect: "none" }}
    >
      <div className="flex flex-col">
        <img
          src={GoogleStars}
          alt=""
          className=" max-h-[10rem] max-w-[15rem] mx-auto"
        />
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
    <div
      className="flex flex-col mx-auto xl:items-center xl:justify-center"
      style={{ userSelect: "none" }}
    >
      <NavBar />
      <img src={MomBorder} alt="" className="h-[3rem] w-full" />
      <div className="flex flex-col max-w-[80rem]">
        <div className="flex justify-center items-center h-[50vh]">
          <img src={Face} alt="" className=" w-full h-full" />
          <h1 className="font-BubblyBold lg:text-6xl md:text-4xl text-4xl absolute">
            WELCOME TO SUNKISS ACADEMY
          </h1>
        </div>
        <motion.div
          className="flex flex-col justify-center items-center bg-[#9cdee7] py-10 mt-[2rem] h-full w-full mx-auto"
        >
          <div className="flex flex-col text-center w-[70%] gap-2 max-w-[60rem] mx-auto overflow-hidden ">
            <h2 className="font-BubblyBold lg:text-6xl md:text-6xl text-4xl">
              About Us{" "}
            </h2>
            <p className="text-xl font-BubblyReg">
              Welcome to our In-Home Childcare in Lynnwood! We are dedicated to
              providing a safe and nurturing environment for children to learn
              and grow. Our experienced staff is passionate about early
              childhood education and is committed to fostering the development
              of each child in our care.
            </p>
            <p className="text-xl font-BubblyReg">
              At our center, we offer a wide range of age-appropriate activities
              and educational programs that promote social, emotional,
              cognitive, and physical development. From interactive play to
              structured learning, we strive to create a well-rounded experience
              for every child.
            </p>
          </div>
        </motion.div>
        <div className="flex flex-col w-full gap-6 my-2 font-BubblyBold text-center p-4">
          <motion.div className="flex flex-col w-full gap-2 lg:flex-row md:flex-row items-center justify-center"
          initial={{ x: -100 }}
          whileInView={{ x: 0, y: 0, transition: { duration: 2 } }}
          viewport={{ once: true }}
          >
            <img src={Curric} alt="" className="w-[30rem] rounded-md" />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl"> Curriculum</h1>
              <p className="font-BubblyReg">
                Our curriculum is designed to meet the unique needs of each
                child and is based on the latest research in early childhood
                education. We focus on developing the whole child by providing a
                balance of academic, social, and physical activities. Our goal
                is to prepare children for success in school and in life by
                instilling a love of learning and a strong sense of
                self-confidence. We believe that every child is capable of
                achieving great things, and we are committed to helping them
                reach their full potential.{" "}
              </p>
            </div>
          </motion.div>
          <motion.div className="flex flex-col items-center justify-center w-full gap-2 md:hidden"
          initial={{ x: 100 }}
          whileInView={{ x: 0, y: 0, transition: { duration: 2 } }}
          viewport={{ once: true }}
          >
            <img src={Struct} alt="" className="w-[30rem] rounded-md" />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl"> Structured Learning</h1>
              <p className="font-BubblyReg">
                Structured learning is a cornerstone of our approach. We
                meticulously plan each day with a blend of purposeful activities
                designed to support key developmental milestones. Our routine
                incorporates a variety of learning modalities to cater to
                different styles, ensuring hildren are engaged and motivated. By
                setting clear goals and regularly assessing progress, we can
                tailor our curriculum to meet each child's needs, while
                maintaining flexibility to adapt to their interests and
                strengths.{" "}
              </p>
            </div>
          </motion.div>
          <motion.div className="hidden md:flex md:flex-row md:items-center md:justify-center w-full gap-2 lg:flex-row"
          initial={{ x: 100 }}
          whileInView={{ x: 0, y: 0, transition: { duration: 2 } }}
          viewport={{ once: true }}
          >
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl"> Structured Learning</h1>
              <p className="font-BubblyReg">
                Structured learning is a cornerstone of our approach. We
                meticulously plan each day with a blend of purposeful activities
                designed to support key developmental milestones. Our routine
                incorporates a variety of learning modalities to cater to
                different styles, ensuring hildren are engaged and motivated. By
                setting clear goals and regularly assessing progress, we can
                tailor our curriculum to meet each child's needs, while
                maintaining flexibility to adapt to their interests and
                strengths.{" "}
              </p>
            </div>
            <img src={Struct} alt="" className="w-[30rem] rounded-md" />
          </motion.div>
          <motion.div className="flex flex-col items-center justify-center w-full gap-2 lg:flex-row md:flex-row "
          initial={{ x: -100 }}
          whileInView={{ x: 0, y: 0, transition: { duration: 2 } }}
          viewport={{ once: true }}
          >
            <img src={Letters} alt="" className="w-[30rem] rounded-md" />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl"> Safety</h1>
              <p className="font-BubblyReg">
                In our in-home childcare setting, safety is a top priority. We
                rigorously childproof our environment, ensuring that hazards are
                eliminated and equipment is age-appropriate and well-maintained.
                The space is kept clean and sanitary, with regular disinfecting
                to prevent illness. Our emergency protocols are comprehensive,
                including first aid training and clear procedures for various
                situations. Secure access controls and constant supervision
                ensure that children are protected at all times.{" "}
              </p>
            </div>
          </motion.div>
          <motion.div className="flex flex-col items-center justify-center w-full gap-2 md:hidden"
          initial={{ x: 100 }}
          whileInView={{ x: 0, y: 0, transition: { duration: 2 } }}
          viewport={{ once: true }}
          >
            <img src={Staff} alt="" className="w-[30rem] rounded-md" />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl"> Experienced Staff</h1>
              <p className="font-BubblyReg">
                In our in-home childcare program, we pride ourselves on having a
                team of highly experienced staff. Our caregivers are not only
                certified in early childhood education but also have extensive
                hands-on experience working with children of various ages. They
                are trained in essential skills such as first aid, child
                development, and positive discipline techniques. Each staff
                member is dedicated to providing personalized care, fostering a
                supportive and engaging environment, and continually updating
                their knowledge to stay current with best practices in early
                childhood education.{" "}
              </p>
            </div>
          </motion.div>
          <motion.div className="hidden md:flex items-center justify-center w-full gap-2 lg:flex-row md:flex-row "
          initial={{ x: 100 }}
          whileInView={{ x: 0, y: 0, transition: { duration: 2 } }}
          viewport={{ once: true }}
          >
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl"> Experienced Staff</h1>
              <p className="font-BubblyReg">
                In our in-home childcare program, we pride ourselves on having a
                team of highly experienced staff. Our caregivers are not only
                certified in early childhood education but also have extensive
                hands-on experience working with children of various ages. They
                are trained in essential skills such as first aid, child
                development, and positive discipline techniques. Each staff
                member is dedicated to providing personalized care, fostering a
                supportive and engaging environment, and continually updating
                their knowledge to stay current with best practices in early
                childhood education.{" "}
              </p>
            </div>
            <img src={Staff} alt="" className="w-[30rem] rounded-md" />
          </motion.div>
        </div>
        <motion.div
          className="block w-full h-full mt-[2rem] px-[20px] max-w-[80rem] mx-auto"
          initial={{ x: -70 }}
          whileInView={{ x: 0, y: 0, transition: { duration: 1 } }}
          viewport={{ once: true }}
        >
          <h1 className="font-BubblyBold lg:text-6xl md:text-6xl text-4xl text-center mb-2">
            Google 5 Star Reviews
          </h1>
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="w-full bg-white mx-auto z-1 block mb-2"
          >
            {Reviews.map((review: any) => (
              <SwiperSlide key={review.id}>
                <Review Name={review.name} review={review.review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
