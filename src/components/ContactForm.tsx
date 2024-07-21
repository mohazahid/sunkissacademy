export default function ContactFrom() {
    return (
        
        <div className="flex flex-row justify-center items-center bg-[#aed2f3] h-full rounded shadow-md gap-2 h-max-[20rem] py-6">
            <section className="flex flex-col justify-center items-center w-[30rem]">
                <h2 className="font-BubblyBold text-4xl">Contact Us</h2>
                <p className="font-BubblyReg text-2xl">
                    We'd love to hear from you! Please feel free to reach out with any questions or feedback.
                </p>
            </section>
            <section className="flex flex-col justify-center items-center">
                <form className="flex flex-col gap-4 w-[30rem]">
                    <p className="font-BubblyBold"> Your Name</p>
                    <input type="text" placeholder="Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    <p className="font-BubblyBold"> Your Email </p>
                    <input type="email" placeholder="Email" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    <p className="font-BubblyBold"> Your Message</p>
                    <textarea placeholder="Message" className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    <button className="bg-[#3e22a3] text-white p-2 rounded-md font-BubblyBold">Send</button>
                </form>
            </section>
      </div>
    )
}
