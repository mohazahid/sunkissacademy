import React from 'react'
import NavBar from '../components/navBar'
import MomBorder from '../img/MomBorder.png'
import Footer from '../components/Footer'
import GreenWave from '../img/GreenWave.png'
import GreenWaveTurned from '../img/GreenWaveTurned.png'

export default function About() {
    return (
        <main className="flex flex-col pb-4" style={{ userSelect: "none" }}>
            <NavBar />
            <img src={MomBorder} alt='' className="h-[3rem]" />
            <img src={GreenWaveTurned} alt='' className="h-[3rem] w-full" /> 
            <section className="flex justify-center items-center px-4 py-5 bg-[#a0f885]">
                <div className="flex flex-col w-[70%] gap-4 max-w-[60rem]">
                    <h1 className="font-BubblyBold lg:text-6xl md:text-6xl text-4xl">
                    Welcome to Sunkiss Academy Childcare!
                    </h1>
                    <p className="text-2xl font-BubblyReg">
                    At Sunkiss Academy Childcare, we believe in creating a warm, nurturing, and stimulating environment where children can learn, grow, and thrive. Our mission is to provide high-quality childcare that supports the physical, emotional, social, and cognitive development of each child in our care.
                    </p>
                </div>
            </section>
            <img src={GreenWave} alt='' className="h-[3rem] w-full" />
            <section className="flex flex-col justify-center items-center py-10 mt-[2rem]">
                <div className="flex flex-col w-[70%] gap-2 max-w-[60rem]">
                    <h2 className="font-BubblyBold text-5xl">Our Philosophy </h2>
                    <p className="text-2xl font-BubblyReg">
                    We understand that each child is unique and deserves personalized attention and care. Our philosophy is centered around fostering a love for learning through play-based and child-centered activities. We aim to create a safe and inclusive space where children feel valued, respected, and encouraged to explore their interests and talents.
                    </p>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center bg-[#4228b3] py-10 mt-[2rem] gap-2 text-white">
                <div className="flex flex-col w-[70%] gap-2 max-w-[60rem]">
                    <h2 className="font-BubblyBold text-5xl">Our Programs </h2>
                    <p className="text-2xl font-BubblyReg">
                    Sunkiss Academy Childcare offers a variety of programs designed to cater to the diverse needs of children and families. Our programs include:
                    </p>
                </div>
                <ul className="flex flex-col gap-6 w-[70%] max-w-[60rem]">
                <li className="text-2xl font-BubblyReg">
                Infant Care: A nurturing environment for our youngest learners to feel safe and loved while they explore and develop essential skills.
                </li>
                <li className="text-2xl font-BubblyReg">
                Toddler Program: Engaging activities that promote independence, curiosity, and social interaction for our active toddlers.
                </li>
                <li className="text-2xl font-BubblyReg">
                Preschool Program: A structured curriculum that prepares children for the transition to kindergarten through hands-on learning experiences.
                </li>
                <li className="text-2xl font-BubblyReg">
                After-School Care: Fun and educational activities for school-aged children, providing a supportive space to unwind and continue learning after school hours.
                </li>
                </ul>
            </section>
            <Footer />
        </main>
    )
}