import useAuth from "../Hooks/useAuth.jsx";
import {FaBars, FaHome, FaPlus} from "react-icons/fa";
import {NavLink, Outlet} from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import {toast} from "react-hot-toast";
import {BiTask} from "react-icons/bi";
import DIsplayusers from "./DIsplayusers.jsx";
import DisplayUsersProfile from "./DisplayUsersProfile.jsx";
const Dashboard = () => {
    const {logOut} = useAuth();
    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("logOut Successfully")
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="sm:flex hidden">
                <div className="w-64 min-h-screen border-r">
                    <ul className="menu sm:text-xl gap-4 text-center">
                        <DisplayUsersProfile/>
                        <div className="border-b gap-5 grid">
                            <NavLink to="usertasks" className="flex items-center sm:gap-3 gap-1 hover:bg-gray-200 py-2 rounded-lg justify-center">
                                <BiTask/>
                                <h1>MyTasks</h1>
                            </NavLink>
                            <NavLink to="addtask" className="flex items-center sm:gap-3 gap-1 hover:bg-gray-200 py-2 rounded-lg justify-center">
                                <FaPlus size={15}/>
                                <h1>Add Task</h1>
                            </NavLink>
                        </div>
                        <NavLink to="/" className="flex items-center sm:gap-3 gap-1 hover:bg-gray-200 py-2 rounded-lg justify-center">
                            <FaHome size={15}/>
                            <h1>Home</h1>
                        </NavLink>
                    </ul>
                </div>

                <div className="w-full border-b py-3 gap-3 flex flex-col">
                    <div className='flex items-center justify-between mt-5 lg:px-72 md:px-32 px-3'>
                        <div className="sm:flex gap-2 hidden">
                            <AiOutlineHome size={20}/>
                            <h1 className="font-semibold">DashBoard</h1>
                        </div>
                        <div>
                            <button onClick={handleLogout} className="btn btn-outline">LogOut</button>
                        </div>
                    </div>
                    <div className="justify-center flex">
                        <div className="w-80">
                            <DIsplayusers/>
                        </div>
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>

            <div className="drawer border-b sm:hidden">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content grid gap-3 md:px-0 px-5 py-3">
                    <div className="justify-between flex">
                        <label htmlFor="my-drawer" className="btn btn-outline drawer-button"><FaBars/></label>
                        <button onClick={handleLogout} className="btn btn-outline">Logout</button>
                    </div>
                    <div className="justify-center flex">
                        <div className="w-80">
                            <DIsplayusers/>
                        </div>
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-44 gap-5 min-h-full bg-base-200 text-base-content">

                        <DisplayUsersProfile/>

                        <NavLink to="addtask"><li><a><FaPlus size={15}/> MyTasks</a></li></NavLink>
                        <NavLink to="addtask"><li><a><FaPlus size={15}/> AddTask</a></li></NavLink>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;