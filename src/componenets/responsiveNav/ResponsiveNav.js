import React from "react";
import { Link } from "react-router-dom";

const ResponsiveNav = ({ isOpen, toggle }) => {
    return (
        <div
            className={
                isOpen
                    ? "grid grid-rows-4 text-center items-center bg-blue-300"
                    : "hidden"
            }
            onClick={toggle}
        >
            <Link className="p-4" to="/">
                Home
            </Link>
            <Link className="p-4" to="/">
                Build a Club
            </Link>
            <Link className="p-4" to="/">
                Buy Players
            </Link>
            <Link className="p-4" to="/">
                Your Club
            </Link>
        </div>
    );
};

export default ResponsiveNav;
