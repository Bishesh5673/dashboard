import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { FaBell, FaFile, FaFolder, FaMessage } from "react-icons/fa6";

function Admin() {
  return (
    <div className="flex text-white">
      <div className="flex flex-col bg-blue-950 h-[100vh] w-73 p-5 items-center ">
        <FaUserCircle size={120} className=" shadow-lg shadow-black rounded-full" />
        <p className="text-white font-bold text-4xl mt-4 mb-1">Eren Jaeger</p>
        <p className="text-white italic font-light text-2xl">
          erenjaeger@gmail.com
        </p>
        <div>
          <div className="flex justify-start space-x-6.5 items-center text-2xl font-light m-7">
            <FaHome />
            <NavLink to="home">Home</NavLink>
          </div>
          <div className="flex justify-start space-x-6.5 items-center text-2xl font-light m-7">
            <FaFolder />
            <NavLink to="file">File</NavLink>
          </div>
          <div className="flex justify-start space-x-6.5 items-center text-2xl font-light m-7">
            <FaMessage />
            <NavLink to="messages">Messages</NavLink>
          </div>
          <div className="flex justify-start space-x-6.5 items-center text-2xl font-light m-7">
            <FaBell />
            <NavLink to="notification">Notification</NavLink>
          </div>
        </div>
      </div>
      <div className=" bg-white w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
