import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white font-BubblyBold">
            <div className="container mx-auto py-8">
                <div className="flex justify-between">
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold">Quick Links</h2>
                        <ul className="list-disc list-inside">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Courses
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold">Get in Touch</h2>
                        <ul className="list-disc list-inside">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Email
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Phone
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    Address
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-2xl text-gray-300">© 2024 Sunkiss Academy</p>
                </div>
            </div>
        </footer>
    );
}
    