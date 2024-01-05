import React from "react";
import AddProject from "./AddProject";
import img from './images/image (1).png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import './home.css'

function Home() {
    return (
        <div >
            <div className="bg-white mt-12  ml-16 md:mb-20 lg:mb-48">


                <div className="mb-12 flex flex-row justify-between">
                    <h1 className="text-[#25282B] md:mb-2 lg:text-xl  md:text-md font-Comfortaa font-bold ">Mounika Lingala </h1>
                    <div className="">
                        <input type="checkbox" id="check" className="w-0" />
                        <span className="menu flex flex-col justify-center gap-4">
                            <li>
                                <a href='/about' className="">About</a>
                            </li>
                            <li>
                                <a href='/projects' className="ml-4 mr-4">Projects</a>
                            </li>
                            <li>
                                <a href='/contacts'>Contacts</a>
                            </li>
                            <label htmlFor="check" className="close-menu top-0 right-0 mt-8 mr-4 lg:hidden"><IoClose size="30" /></label>
                        </span>
                    </div>
                    <label htmlFor="check" className="open-menu"><GiHamburgerMenu className="md:hidden" size="30" /></label>
                </div>
                <div className="flex md:flex-col lg:flex-row lg:justify-between">
                    <div className=" md:mt-12 lg:mt-28 md:mb-20 lg:mb-0 ">
                        <h2 className="text-[#FDC435] font-Nunito md:text-xl text-lg font-bold">UX/UI Designer</h2>
                        <h1 className="text-[#333333] font-playfair mt-[20px] text-2xl md:text-4xl font-bold">Hello, my name<br /> is Mounika Lingala</h1>
                        <p className="w-80 text-[#828282] font-nunito mt-[20px] mb-[20px] text-[12px] md:text-sm">Learned and certifiend in web developer and I heve one year of experience, expert according to proficiency and build some single page and dynamic projects.</p>
                        <button type="button" className=" bg-[#FDC435] text-sm p-[10px] rounded-md mr-4 w-20 font-bold"><a href="/projects">Projects</a></button>
                        <button type="button" className="text-sm p-[10px] rounded-md mr-4 w-20 border border-black font-bold">Linkedin</button>
                    </div>
                    <div className="background  flex flex-col">
                        <div className="ml-[450px] mt-8">
                            <a href='/about' className="">About</a>
                            <a href='/projects' className="ml-4 mr-4">Projects</a>
                            <a href='/contacts'>Contacts</a>
                        </div>
                        <img src={img} className="w-40 h-60 md:h-[560px] md:w-[630px] absolute bottom-[250px] right-24  " alt="" />
                    </div>
                </div>
            </div>
            <AddProject />
        </div>
    );
}

export default Home;