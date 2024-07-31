import React from "react";
import NavBar from "../components/navBar";
import MomBorder from "../img/MomBorder.png";
import Footer from "../components/Footer";
import GreenWave from "../img/GreenWave.png";
import GreenWaveTurned from "../img/GreenWaveTurned.png";

export default function About() {
  return (
    <main className="flex flex-col" style={{ userSelect: "none" }}>
      <NavBar />
      <img src={MomBorder} alt="" className="h-[3rem]" />
      <img src={GreenWaveTurned} alt="" className="h-[3rem] w-full" />
      <section className="flex justify-center items-center px-4 py-5 bg-[#a0f885]">
        <div className="flex flex-col w-[70%] gap-4 max-w-[60rem]">
          <h1 className="font-BubblyBold lg:text-6xl md:text-6xl text-4xl">
            Welcome to Sunkiss Academy Childcare!
          </h1>
          <p className="text-2xl font-BubblyReg">
            At Sunkiss Academy Childcare, we believe in creating a warm,
            nurturing, and stimulating environment where children can learn,
            grow, and thrive. Our mission is to provide high-quality childcare
            that supports the physical, emotional, social, and cognitive
            development of each child in our care.
          </p>
        </div>
      </section>
      <img src={GreenWave} alt="" className="h-[3rem] w-full" />
      <section className="flex flex-col justify-center items-center py-10 mt-[2rem]">
        <div className="flex flex-col w-[70%] gap-2 max-w-[60rem]">
          <h2 className="font-BubblyBold text-5xl">Our Philosophy </h2>
          <p className="text-2xl font-BubblyReg">
            I believe that each child is unique in their way. Each child grows
            at their developmental level and each child comes from a family that
            has their own beliefs and values. As an educator, I believe it is
            our responsibility to understand the child and base our curriculum
            according to the child's needs.
          </p>
          <p className="text-2xl font-BubblyReg">I believe children are our future...</p>
          <p className="text-2xl font-BubblyReg">
            I believe each child has the potential to bring something unique and
            special to the world. I will help children to develop their
            potential by believing in them as capable individuals. I will assist
            children in discovering who they are, so they can express their own
            opinions and nurture their own ideas. I have a vision of a world
            where people learn to respect, accept, and embrace the differences
            between us, as the core of what makes life so fascinating.
          </p>
          <p className="text-2xl font-BubblyReg">Teach them well and let them lead the way...</p>
          <p className="text-2xl font-BubblyReg">
            My goal as an educator here at SunKiss Academy is to promote the
            physical, social, emotional, and cognitive development of each
            child. I also believe that play should be the base of learning since
            children learn best by doing. As an educator, I am committed to
            making sure that each child's needs are met and that each child is
            given space and the opportunity to grow and learn in a positive
            atmosphere.
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center bg-[#4228b3] py-10 mt-[2rem] gap-2 text-white">
        <div className="flex flex-col w-[70%] gap-2 max-w-[60rem]">
          <h2 className="font-BubblyBold text-5xl">Our Programs </h2>
          <p className="text-2xl font-BubblyReg">
            Sunkiss Academy Childcare offers a variety of programs designed to
            cater to the diverse needs of children and families. Our programs
            include:
          </p>
        </div>
        <ul className="flex flex-col gap-6 w-[70%] max-w-[60rem]">
          <li className="text-2xl font-BubblyReg">
            Infant Care: A nurturing environment for our youngest learners to
            feel safe and loved while they explore and develop essential skills.
          </li>
          <li className="text-2xl font-BubblyReg">
            Toddler Program: Engaging activities that promote independence,
            curiosity, and social interaction for our active toddlers.
          </li>
          <li className="text-2xl font-BubblyReg">
            Preschool Program: A structured curriculum that prepares children
            for the transition to kindergarten through hands-on learning
            experiences.
          </li>
          <li className="text-2xl font-BubblyReg">
            After-School Care: Fun and educational activities for school-aged
            children, providing a supportive space to unwind and continue
            learning after school hours.
          </li>
        </ul>
      </section>
      <Footer />
    </main>
  );
}
