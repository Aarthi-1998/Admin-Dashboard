import {BsFillBellFill,BsFillEnvelopeFill,BsPersonCircle,BsSearch,BsJustify} from "react-icons/bs"

export default function Header({toggleSidebar}){
    return(
        <div className=" h-[60px] flex items-center justify-between shadow-md ">
            <div className="block lg:hidden  align-middle leading-[1px] text-[20px]" onClick={toggleSidebar}><BsJustify/></div>
            <div className="hidden sm:block"><BsSearch/></div>
            <div className="flex  gap-4 ">
            <BsFillBellFill className="text-xl"/>
            <BsFillEnvelopeFill className="text-xl"/>
            <BsPersonCircle className="text-xl"/>
            </div>
        </div>
    )
}