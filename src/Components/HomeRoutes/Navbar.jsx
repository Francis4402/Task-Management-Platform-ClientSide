import {Link} from "react-router-dom";
import useAuth from "../Hooks/useAuth.jsx";
import {toast} from "react-hot-toast";
import useUsers from "../Hooks/useUsers.jsx";

const Navbar = () => {

    const {user, logOut} = useAuth();
    const [AllUsers] = useUsers();
    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("logOut Successfully")
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="justify-center flex">
            <div className="container md:px-0 px-5">
                <div className="justify-between flex py-5 items-center">
                    <div>
                        <Link to="/"><h1 className="text-2xl font-bold">Tasky</h1></Link>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex justify-center gap-5 font-semibold">
                            <ul className="flex justify-center gap-5">
                                <Link to="/about"><li className="btn btn-ghost">About</li></Link>
                                {
                                    !user ? <>
                                        <Link to="/logins"><li className="btn btn-ghost">SignIn</li></Link>
                                        <Link to="/register"><li className="btn btn-ghost">SignUp</li></Link>
                                    </> : ''
                                }
                                {
                                    user ? <>
                                        <Link to="/dashboard"><li className="btn btn-ghost">DashBoard</li></Link>
                                    </> : ''
                                }

                            </ul>
                        </ul>
                    </div>

                    <div className="md:hidden flex">
                        {
                            !user ? <>
                                <div className="dropdown dropdown-left">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-8 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
                                        <li><a>About</a></li>
                                        {
                                            !user ? <>
                                                <Link to="/logins"><li><a>SignIn</a></li></Link>
                                                <Link to="/register"><li><a>SignUp</a></li></Link>
                                            </> : ''
                                        }
                                        {
                                            user ? <>
                                                <li><a onClick={handleLogout}>Logout</a></li>
                                            </> : ''
                                        }

                                    </ul>
                                </div>
                            </> : ''
                        }
                    </div>

                        {
                            user ? <>
                                <div className="flex-none">
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-24 rounded-full">
                                                {
                                                    AllUsers.map(myuser => <div key={myuser}><img src={myuser?.image} alt="i" /></div>)
                                                }

                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                            {
                                                AllUsers.map(username => <div key={username}><li>
                                                    <a>
                                                        {username?.name}
                                                    </a>
                                                </li></div>)
                                            }
                                            <Link to="/">
                                                <li>
                                                    <button>
                                                        Home
                                                    </button>
                                                </li>
                                            </Link>

                                            <Link to="/dashboard" className="md:hidden block">
                                                <li>
                                                    <button>
                                                        Dashboard
                                                    </button>
                                                </li>
                                            </Link>

                                            <Link to="/about" className="md:hidden block">
                                                <li>
                                                    <button>
                                                        About
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