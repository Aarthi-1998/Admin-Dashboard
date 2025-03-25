import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from "react-icons/bs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from "recharts";

const data = [
    { name: "A", uv: 4000, pv: 2400 },
    { name: "B", uv: 3000, pv: 1398 },
    { name: "C", uv: 2000, pv: 9800 },
    { name: "D", uv: 2780, pv: 3908 },
  ];

export default function HomeComponent(){


    return(
        <div>
            <h3  className="mb-4 text-xl font-bold" >DASHBOARD</h3>
         
         <div className="grid grid-cols-2 gap-6 md:grid-cols4">
            {
               [BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill].map((Icon,index)=>(
                <div key={index} className="flex flex-col justify-around p-4 rounded-md shadow-md bg-gray-700">
                <div className="flex justify-between">
                    <h3 className="text-lg font-semibold">Title</h3>
                    <Icon className="text-2xl"/>
                </div>
                <h1 className="text-3xl">100</h1>
                </div>
                
               ))
            }
         </div>




        </div>
    )
}