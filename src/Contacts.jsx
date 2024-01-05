import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

const Contacts = () => {
    return (
        <div>
            <div className=" flex justify-center gap-4 mt-20">
                <a href="www.instagram.com" className="text-[#25282B]"><AiFillInstagram size={45} /></a>
                <a href="www.instagram.com" className="text-[#25282B] mt-[2px]">< FaLinkedin size={40} /></a>
                <a href="www.instagram.com" className="text-[#25282B]"><TbMailFilled size={45} /></a>
            </div>
            <p className="text-[#828282] font-nunito text-[12px] mt-4">Copyright ©️ 2024. All rights reserved </p>
        </div>
    )
}

export default Contacts