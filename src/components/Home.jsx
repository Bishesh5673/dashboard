import { FaShareAlt } from "react-icons/fa";
import { FaS, FaStar, FaThumbsUp } from "react-icons/fa6";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from "recharts";


function Home() {
  return (
    <div className=" p-3">
      <div>
        <p className="text-3xl text-blue-950">Dashboard User</p>
      </div>
      <div className="grid grid-cols-4 mt-4 gap-7 ">
        <div className="shadow-lg shadow-gray-400  bg-blue-900 p-3 h-34 w-50">
          <div className="flex justify-between items-center  pr-3 ">
            <p>Earning</p>
            <FaS
              size={30}
              className="border bg-white rounded-full p-2 font-bold text-blue-900"
            />
          </div>
          <p className="text-6xl mt-3">$6767</p>
        </div>
        <div className="shadow-lg shadow-gray-400  bg-white p-3 h-34 w-50">
          <div className="flex justify-between items-center  pr-3 text-blue-900 ">
            <p>Share</p>
            <FaShareAlt size={30} className="text-amber-600" />
          </div>
          <p className="text-6xl text-blue-900 mt-3">2345</p>
        </div>
        <div className="shadow-lg shadow-gray-400   bg-white p-3 h-34 w-50">
          <div className="flex justify-between items-center  pr-3  text-blue-900">
            <p>Likes </p>
            <FaThumbsUp size={30} className=" text-amber-600" />
          </div>
          <p className="text-6xl text-blue-900 mt-3">1299</p>
        </div>
        <div className="shadow-lg shadow-gray-400   bg-white p-3 h-34 w-50">
          <div className="flex justify-between items-center  pr-3  text-blue-900">
            <p>Rating</p>
            <FaStar size={30} className=" text-amber-600" />
          </div>
          <p className="text-6xl text-blue-900 mt-3">4.5</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-x-96" >
        <div className="w-[706px]">
          <img className="h-44 w-[700px] shadow-lg shadow-gray-400 mb-2.5  " src="\src\assets\chart1.png" alt="" />
          <img className="h-44 w-[700px] shadow-lg shadow-gray-400  " src="\src\assets\chart2.png" alt="" />
        </div>
        <div className="h-90 w-50 relative left-18 flex flex-col justify-center items-center shadow-lg shadow-gray-400 ">
          <div className="p-5 border-[25px] rounded-full border-r-amber-600 h-32 w-32 text-blue-900 text-3xl flex justify-center items-center">
            85% 
          </div>
          <p className="text-blue-900 font-extralight m-2">Lorem ipsum</p>
          <p className="text-blue-900 font-extralight m-2">Lorem ipsum</p>
          <p className="text-blue-900 font-extralight m-2">Lorem ipsum</p>
          <p className="text-blue-900 font-extralight m-2">Lorem ipsum</p>
          <button className="bg-amber-600 rounded-2xl text-black p-1 m-1.5 mb-0">Check now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
