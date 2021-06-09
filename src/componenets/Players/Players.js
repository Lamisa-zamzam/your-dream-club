import React from "react";

const Players = () => {
    return (
        <div className="flex flex-row justify-center items-center bg-white h-screen py-40">
            <div className="flex flex-col justify-center items-center h-screen py-40">
                <img
                    src="https://i2-prod.irishmirror.ie/incoming/article18846295.ece/ALTERNATES/s615b/1_GettyImages-1166107281-1.jpg"
                    alt=""
                    className="h-full rounded mb-20"
                />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Philippe</h2>
                    <p className="mb-2">The Real Brazilian Feel</p>
                    <span>$40000</span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center h-screen py-40">
                <img
                    src="https://i2-prod.irishmirror.ie/incoming/article18846295.ece/ALTERNATES/s615b/1_GettyImages-1166107281-1.jpg"
                    alt=""
                    className="h-full rounded mb-20"
                />
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl mb-2">Philippe</h2>
                    <p className="mb-2">The Real Brazilian Feel</p>
                    <span>$40000</span>
                </div>
            </div>
        </div>
    );
};

export default Players;
