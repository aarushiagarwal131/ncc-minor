import React from "react";
import one from "./images/ANO.jpg"

const OFFICERS = () =>{
    return(
        <div>
            <div className="bg-gradient-to-b from-transparent via-blue-50 to-blue-100">
                <br></br>
                <br></br>
            </div>
            <div className="flex items-center bg-blue-100">
                <div className="bg-blue-900 h-1 flex-grow ml-10 mr-10"></div>
                <h2 className="text-2xl font-bold text-center bg-blue-900 py-2 px-4 text-white rounded">OFFICERS</h2>
                <div className="bg-blue-900 h-1 flex-grow ml-10 mr-10"></div>
            </div>
            <div className="bg-blue-100">
            <div className="items-centre ml-10 flex-col w-1/3">
                <img src={one} alt="ANO" className="ml-5 rounded-lg w-50 h-60"></img> 
                <div className="bg-blue-900 rounded-lg mt-5 w-60">
                    <p className="">Dr Dinesh Kumar Shukla</p>
                    <p>Assistant NCC officer</p>
                    <p>EMAIL: {" "}<a href="mailto:shukladk@nitj.ac.in" className="text-blue-300 hover:text-blue-500" >
                        shukladk@nitj.ac.in </a></p>
                </div>
            </div>
            </div>
        </div>
    );
};
export default OFFICERS;