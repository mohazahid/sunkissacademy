import React from 'react'
import NavBar from '../components/navBar'
import Footer from '../components/Footer'
import MomBorder from '../img/MomBorder.png'

export default function Hours() {
    return (
        <main>
            <NavBar />
            <img src={MomBorder} alt='' className="h-[3rem] w-full" />
            <section className="flex flex-col justify-center items-center bg-white py-10 mt-[2rem]">
                <div className="flex flex-col w-[70%] gap-2">
                    <h2 className="font-BubblyBold text-5xl"> Our Hours </h2>
                    <ul className="flex flex-col gap-4 mt-6 max-w-[30rem]">
                        <li className=" flex text-xl bg-[#f1f36f] rounded-xl justify-between p-2 px-[2rem]">
                            <p>Sunday</p>
                            <p>Closed</p>
                        </li>
                        <li className=" flex text-xl bg-[#8ef36f] rounded-xl justify-between p-2 px-[2rem]">
                            <p>Monday</p>
                            <p>8:00 AM to 5:00 PM</p>
                        </li>
                        <li className=" flex text-xl bg-[#6ff3e8] rounded-xl justify-between p-2 px-[2rem]">
                            <p>Tuesday</p>
                            <p>8:00 AM to 5:00 PM</p>
                        </li>
                        <li className=" flex text-xl bg-[#f3d06f] rounded-xl justify-between p-2 px-[2rem]">
                            <p>Wednesday</p>
                            <p>8:00 AM to 5:00 PM</p>
                        </li>
                        <li className=" flex text-xl bg-[#dd6ff3] rounded-xl justify-between p-2 px-[2rem]">
                            <p>Thursday</p>
                            <p>8:00 AM to 5:00 PM</p>
                        </li>
                        <li className=" flex text-xl bg-[#6f87f3] rounded-xl justify-between p-2 px-[2rem]">
                            <p>Friday</p>
                            <p>8:00 AM to 5:00 PM</p>
                        </li>
                        <li className=" flex text-xl bg-[#f36f6f] rounded-xl justify-between p-2 px-[2rem]">
                            <p>Saturday</p>
                            <p>Closed</p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center bg-[#ecaae9] py-10 mt-[2rem]">
                <div className="flex flex-col w-[70%] gap-2 text-white">
                    <h2 className="font-BubblyBold text-5xl"> Holidays </h2>
                    <ul className="flex flex-col gap-4 mt-6 max-w-[30rem] text-black">
                        <li className=" flex text-xl bg-[#aefcc8] rounded-xl justify-between p-2 px-[2rem]">
                            <p>New Year's Eve</p>
                            <p>Closed</p>
                        </li>
                        <li className=" flex text-xl bg-[#ee8a8a] rounded-xl justify-between p-2 px-[2rem]">
                            <p>New Year's Day</p>
                            <p>Closed</p>
                        </li>
                        <li className=" flex text-xl bg-[#afbdfa] rounded-xl justify-between p-2 px-[2rem]">
                            <p>Memorial Day</p>
                            <p>Closed</p>
                        </li>
                        <li className=" flex text-xl bg-[#c99efa] rounded-xl justify-between p-2 px-[2rem]">
                            <p>Labor Day</p>
                            <p>Closed</p>
                        </li>
                        <li className=" flex text-xl bg-[#e7ee84] rounded-xl justify-between p-2 px-[2rem]">
                            <p>Independence Day</p>
                            <p>Closed</p>
                        </li>
                        <li className=" flex text-xl bg-[#f3a06f] rounded-xl justify-between p-2 px-[2rem]">
                            <p>Eid (Religous Holiday)</p>
                            <p>Closed</p>
                        </li>
                        <li className=" flex text-xl bg-[#f3a06f] rounded-xl justify-between p-2 px-[2rem]">
                            <p>Martin Luther King Jr. Day</p>
                            <p>Closed</p>
                        </li>
                        <li className=" flex text-xl bg-[#f3a06f] rounded-xl justify-between p-2 px-[2rem]">
                            <p>Veterans Day</p>
                            <p>Closed</p>
                        </li>

                        <li className=" flex text-xl bg-[#9fc597] rounded-xl justify-between p-2 px-[2rem]">
                            <p>Thanksgiving Day</p>
                            <p>Closed</p>
                        </li>
                        <li className=" flex text-xl bg-[#cbd7e9] rounded-xl justify-between p-2 px-[2rem]">
                            <p>Christmas Day</p>
                            <p>Closed</p>
                        </li>

                    </ul>
                </div>
            </section>
            <Footer />

        </main>
    )
}