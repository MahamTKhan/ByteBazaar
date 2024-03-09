import React from "react";
import FooterItems from "./Footeritems";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white ">
            <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
                <h1 className="lg:text-4xl text-3xl md:mb-0 lg:leading-normal font-semibold md:w-2/5">
                    <span className="text-yellow-400">Get</span> the best Offers!</h1>

            <div>
                <input type="text" placeholder="Any Query?" 
                className="text-gray-800 sm:w-72 w-full 
                sm:mr-5 mr-1 lg: mb-0 mb-4 py-2.5 
                rounded px-2 focus-outline-visible"></input>

                <button className="bg-yellow-400 hover:bg-gray-300  duration-100 px-5 py-2 font-[poppins] 
                rounded-md text-white md:w-auto w-full">
                    Click Me
                </button>
            </div>
            </div>
            <FooterItems/>

            
        </footer>
    );
};

export default Footer;
