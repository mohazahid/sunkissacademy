export default function ContactFrom() {
    return (
        <div className="flex flex-row justify-center items-center h-full gap-2 h-max-[20rem] py-6 shadow p-4 rounded w-full max-w-[40rem]">
            <section className="flex flex-col justify-center items-center w-full">
                <form className="flex flex-col gap-4 w-full">
                    <p className="font-BubblyBold"> Your Name</p>
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    <p className="font-BubblyBold"> Your Phone Number</p>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full flex rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    <p className="font-BubblyBold"> Your Email </p>
                    <input
                        type="email"
                        placeholder="Email"
                        className="flex rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    <p className="font-BubblyBold"> Your Message</p>
                    <textarea
                        placeholder="Message"
                        className="w-full flex resize row-span-5 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    <button className="bg-[#3e22a3] text-white p-2 rounded-md font-BubblyBold hover:shadow-lg hover:bg-[#492abb]">
                        Send
                    </button>
                </form>
            </section>
        </div>
    );
}
