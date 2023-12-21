import {Link} from "react-router-dom";
import useAuth from "../Hooks/useAuth.jsx";
import {toast} from "react-hot-toast";

const Navbar = () => {

    const {user, logOut} = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("logOut Successfully")
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="justify-center flex">
            <div className="container">
                <div className="justify-between flex py-5 items-center">
                    <div>
                        <Link to="/"><h1 className="text-2xl font-bold">Tasky</h1></Link>
                    </div>
                    <div>
                        <ul className="flex justify-center gap-5 font-semibold">
                            <ul className="flex justify-center gap-5">
                                <li className="btn btn-ghost">About</li>
                                {
                                    !user ? <>
                                        <Link to="/logins"><li className="btn btn-ghost">SignIn</li></Link>
                                        <Link to="/register"><li className="btn btn-ghost">SignUp</li></Link>
                                    </> : ''
                                }

                                <li className="btn btn-ghost">DashBoard</li>
                            </ul>
                        </ul>
                    </div>

                        {
                            user ? <>
                                <div className="flex-none">

                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-24 rounded-full">
                                                <img src={user?.photoURL} alt="i" />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                            <li>
                                                <a>
                                                    {user?.displayName}
                                                </a>
                                            </li>

                                            <Link to="/">
                                                <li>
                                                    <button>
                                                        Dashboard
                                                    </button>
                                                </li>
                                            </Link>

                                            <li onClick={handleLogout}><a>Logout</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </> : ''
                        }

                </div>
            </div>
        </div>
    );
};

export default Navbar;