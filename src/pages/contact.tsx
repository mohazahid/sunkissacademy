import React from "react";
import NavBar from "../components/navBar";
import ContactFrom from "../components/ContactForm";
import Google from '../img/Google_Icon.svg'
import Instagram from '../img/Instagram_Icon.svg'
import Footer from "../components/Footer";


export default function Contact() {
  return (
    <main>
      <NavBar />
      <section className="flex flex-col justify-center items-center bg-[#f4f771] py-10 mt-[2rem] h-[30vh] max-h-[25rem]">
        <div className="flex flex-col text-center w-[70%] gap-2">
          <h2 className="font-BubblyBold text-5xl">Contact Us </h2>
          <p className="text-2xl font-BubblyReg">
            Have any tips, advice, questions or feedback? We are excited to hear
            from you!
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center bg-[#7b60dd] py-10 mt-[2rem] outline">
        <div className="flex flex-col text-center w-[70%] gap-2 mb-4">
          <h2 className="font-BubblyBold text-5xl">Sunkiss Academy </h2>
          <p className="text-2xl font-BubblyReg">
            Follow us on social media to stay updated on our latest news and
            events.
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-4 font-BubblyBold">
          <button className="flex bg-white p-2 rounded-xl">
          
            <img src = {Google} alt='' className="h-[10vh] max-h-[10rem] max-w-[15rem] mx-auto outline" />
</button>
    
          <button className="flex bg-white p-2 rounded-xl">
          <img src = {Instagram} alt='' className="h-[10vh] max-h-[10rem] max-w-[15rem] mx-auto outline" />
         
          </button>
          <button className="flex bg-white p-2 rounded-xl">
            {/* <img src = {FaceBook} alt='' className="max-h-[10rem] max-w-[15rem] mx-auto outline" /> */}
     
          </button>
        </div>
      </section>
      <ContactFrom />
        <Footer />
    </main>
  );
}
