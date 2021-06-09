import React from "react";
import { Link } from "react-router-dom";
import { PlayersData } from "./PlayersData";

const Players = () => {
    return (
        <>
            <h1 className="lg:text-9xl md-text-7xl sm:text-5xl text-3xl font-black mt-5 md:mx-28 uppercase">
                Our Free to transfer players
            </h1>
            <div className="grid md:grid-cols-2 justify-center items-center bg-white px-40">
                {PlayersData.map((player) => (
                    <div className="py-20 md:mx-5 md:ml-20" key={player.id}>
                        <img
                            src={player.img}
                            alt="player"
                            className="w-80 object-contain rounded mb-20 shadow-lg"
                        />
                        <div>
                            <h2 className="text-2xl mb-2 font-black text-red-700">
                                {player.name}
                            </h2>
                            <p className="mb-2 font-semibold">
                                {player.country}, {player.club},{" "}
                                {player.position}, #{player.jerseyNumber}
                            </p>
                            <br />
                            <span className="font-bold">
                                Transfer fee:{" "}
                            </span>{" "}
                            <span>${player.transferFee}</span>
                            <p>
                                <span className="font-bold">Salary: </span>
                                {player.salary}
                            </p>
                            <p>
                                <span className="font-bold">{player.age}</span>{" "}
                                years,{" "}
                                <span className="font-bold">
                                    {player.height}
                                </span>{" "}
                                meter
                            </p>
                            <p>
                                <span className="font-bold">
                                    {player.matches}
                                </span>{" "}
                                matches,{" "}
                                <span className="font-bold">
                                    {player.trophies}
                                </span>{" "}
                                trophies
                            </p>
                            <p>
                                <span className="font-bold">
                                    Contract expires on:{" "}
                                </span>
                                {player.contractExpairy}
                            </p>
                            <Link
                                to="/"
                                className="shadow-lg mt-5 py-3 px-7 bg-blue-300 rounded-full hover:bg-blue-500 transition duration-300 ease-in-out flex items-center w-max"
                            >
                                Contract Now
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
                    </div>
                ))}
            </div>
        </>
    );
};

export default Players;
