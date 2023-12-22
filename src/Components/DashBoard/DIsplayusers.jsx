import Marquee from "react-fast-marquee";
import useUserData from "../Hooks/useUserData.jsx";

const DIsplayusers = () => {

    const [alluserdata] = useUserData();

    return (

        <Marquee pauseOnHover={true}>
            {
                alluserdata.map(userdata => <div key={userdata} className="grid justify-center px-5 text-center">
                    <img className="rounded-full w-20 h-20" src={userdata?.image} alt="i"/>
                    <li className="list-none text-center">
                        <p>{userdata?.name}</p>
                        <p>{userdata?.workprofesion}</p>
                    </li>
                </div>)
            }
        </Marquee>
    );
};

export default DIsplayusers;