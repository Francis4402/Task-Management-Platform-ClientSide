import useUsers from "../Hooks/useUsers.jsx";

const DisplayUsersProfile = () => {
    const [AllUsers] = useUsers();

    return (
        <div className="justify-center grid gap-3 mt-10 text-black">
            {
                AllUsers.map(u => <div key={u}>
                    <img className="rounded-full w-20 h-20" src={u?.image} alt="i"/>
                    <li className="font-semibold">
                        {u?.name}
                    </li>
                </div>)
            }
        </div>
    );
};

export default DisplayUsersProfile;