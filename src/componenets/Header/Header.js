import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-white h-screen flex flex-col justify-center mt-20 mb-20">
            <h1 className="lg:text-9xl md-text-7xl sm:text-5xl text-3xl font-black mb-14">
                Build Your Dream Football Club Today
            </h1>
            <Link
                to="/"
                className="py-6 px-10 bg-blue-300 rounded-full text-3xl hover:bg-blue-500 transition duration-300 ease-in-out flex items-center animate-bounce w-max ml-5"
            >
                Start Now
                <svg
                    className="w-6 h-6 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                </svg>
            </Link>
        </div>
    );
};

export default Header;
