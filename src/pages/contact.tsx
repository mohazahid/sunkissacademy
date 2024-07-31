import React from "react";
import NavBar from "../components/navBar";
import ContactFrom from "../components/ContactForm";
import Google from "../img/Google_Icon.svg";
import Instagram from "../img/Instagram_Icon.svg";
import Footer from "../components/Footer";
import MomBorder from "../img/MomBorder.png";

export default function Contact() {
  return (
    <main>
      <NavBar />
      <img src={MomBorder} alt="" className="h-[3rem] w-full" />
      <div className="max-w-[80rem] flex justify-center items-center flex-col w-full mx-auto">
      <section className="flex flex-col justify-center items-center bg-[#f4f771] w-full py-10 mt-[2rem] h-[30vh] max-h-[25rem]">
        <div className="flex flex-col text-center gap-2">
          <h2 className="font-BubblyBold text-5xl">Contact Us </h2>
          <p className="text-2xl font-BubblyReg">
            Have any tips, advice, questions or feedback? We are excited to hear
            from you!
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center bg-[#7b60dd] py-10 mt-[2rem] w-full">
        <div className="flex flex-col text-center w-[70%] gap-2 mb-4">
          <h2 className="font-BubblyBold text-5xl">Sunkiss Academy </h2>
          <p className="text-2xl font-BubblyReg">
            Follow us on social media to stay updated on our latest news and
            events.
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-4 font-BubblyBold">
          <a href="https://www.google.com/search?q=sunkiss+academy&sca_esv=956cb7fe596df730&source=hp&ei=acicZvmEJtqCm9cPvLe7uAo&iflsig=AL9hbdgAAAAAZpzWeVLNh98XBS5HRg0yjmEzQv4AMnYm&ved=0ahUKEwi53baI3beHAxVaweYEHbzbDqcQ4dUDCBc&uact=5&oq=sunkiss+academy&gs_lp=Egdnd3Mtd2l6GgIYAiIPc3Vua2lzcyBhY2FkZW15MgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIESNcYUL0GWPMXcAJ4AJABAJgBXaAB8weqAQIxNrgBA8gBAPgBAZgCEqACnAioAgrCAhAQLhgDGOUCGOoCGIwDGI8BwgIQEAAYAxjlAhjqAhiMAxiPAcICCxAAGIAEGLEDGIMBwgIREC4YgAQYsQMY0QMYgwEYxwHCAgsQLhiABBjRAxjHAcICCBAAGIAEGLEDwgIOEC4YgAQYsQMYgwEYigXCAg4QLhiABBixAxjRAxjHAcICCxAuGIAEGLEDGIMBwgIUEC4YgAQYxwEYmAUYmgUYngUYrwHCAggQABiABBjJA8ICCxAAGIAEGJIDGIoFwgIOEC4YgAQYxwEYjgUYrwHCAhQQLhiABBigAxixAxjlBBioAxiLA8ICERAuGIAEGKADGOUEGKgDGIsDwgIIEC4YgAQYsQPCAgsQABiABBixAxiLA8ICBRAuGIAEwgIKEAAYgAQYsQMYCsICFhAuGIAEGKADGLEDGOUEGKgDGAoYiwPCAgsQLhiABBjHARivAcICExAuGIAEGKADGOUEGKgDGAoYiwPCAggQABiABBiLA8ICFBAuGIAEGKADGOUEGPgFGKgDGIsDwgIHEAAYgAQYCsICCBAAGBYYChgemAMFkgcCMTigB_ilAQ&sclient=gws-wiz" target="blank">
            <button
              onSubmit={() => window.open("http://www.google.com")}
              className="flex bg-white p-2 rounded-xl hover:shadow-xl hover:bg-slate-200 transition-all"
            >
              <img
                src={Google}
                alt=""
                className="h-[10vh] max-h-[10rem] max-w-[15rem] mx-auto "
              />
            </button>
          </a>
          <a href="https://www.google.com/" target="blank">
            <button className="flex bg-white p-2 rounded-xl hover:shadow-xl hover:bg-slate-200 transition-all">
              <img
                src={Instagram}
                alt=""
                className="h-[10vh] max-h-[10rem] max-w-[15rem] mx-auto "
              />
            </button>
          </a>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-center items-center py-10 mt-[2rem] mb-[2rem] w-full gap-2">
        <div className="flex flex-col w-full p-2 md:w-[50%] gap-2">
          <h2 className="font-BubblyBold text-5xl">Contact Form </h2>
          <p className="text-2xl font-BubblyReg">
            Fill out the form below and we will get back to you as soon as
            possible.
          </p>
          <p className="text-2xl font-BubblyReg">Other Ways to Get in Contact:</p>
          <ul className="list-disc list-inside font-BubblyReg text-xl">
              <li className="text-black hover:text-white">
                sunkissacademy@gmail.com
              </li>
              <li className="text-black hover:text-white">(206)-334-5645</li>
            </ul>
        </div>

        <ContactFrom />
      </section>
      </div>
      <Footer />
    </main>
  );
}
