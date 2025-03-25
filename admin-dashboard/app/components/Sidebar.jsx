
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from "react-icons/bs";

export default function Sidebar({isOpen,toggleSidebar}){
    return(
       <aside className={`fixed left-0 top-0 h-screen w-64 bg-gray-800 transition-transform duration-300 ${isOpen? "translate-x-0":"-translate-x-full"}lg:translate-x-0`}>
        <div className="flex items-center justify-between p-4 text-white">
        <span className="text-xl font-bold flex gap-3"><BsCart3/>STORE</span>
        <button className="text-red-500 lg:hidden" onClick={toggleSidebar}></button>
        </div>

        <ul className="space-y-6 p-4">
        {[
          { icon: BsGrid1X2Fill, text: "Dashboard" },
          { icon: BsFillArchiveFill, text: "Products" },
          { icon: BsFillGrid3X3GapFill, text: "Categories" },
          { icon: BsPeopleFill, text: "Customers" },
          { icon: BsListCheck, text: "Inventory" },
          { icon: BsMenuButtonWideFill, text: "Reports" },
          { icon: BsFillGearFill, text: "Settings" },
        ].map((item,index)=>(
            <li key={index} className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
                <item.icon className="text-xl" />
                {item.text}
            </li>
        ))
         }
        </ul>

       </aside>
        
    )
}