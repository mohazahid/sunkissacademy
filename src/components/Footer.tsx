import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#e7dfc7] text-black font-BubblyBold w-full">
      <div className="container mx-auto py-8 px-8 max-w-[80rem]">
        <div className="flex justify-between">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Quick Links</h2>
            <ul className="list-disc list-inside">
              <li>
                <a href="/" className="text-black hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-black hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/hours" className="text-black hover:text-white">
                  Hours
                </a>
              </li>
              <li>
                <a href="/contact" className="text-black hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Get in Touch</h2>
            <ul className="list-disc list-inside">
              <li className="text-black hover:text-white">
                sunkissacademy@gmail.com
              </li>
              <li className="text-black hover:text-white">(206)-334-5645</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-2xl text-black">© 2024 Sunkiss Academy</p>
        </div>
      </div>
    </footer>
  );
}
