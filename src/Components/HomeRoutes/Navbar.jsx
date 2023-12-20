
const Navbar = () => {
    return (
        <div className="justify-center flex">
            <div className="container">
                <div className="justify-between flex py-5 items-center">
                    <div>
                        <h1 className="text-2xl font-bold">Tasky</h1>
                    </div>
                    <div>
                        <ul className="flex justify-center gap-5 font-semibold">
                            <ul className="flex justify-center gap-5">
                                <li className="btn btn-ghost">Home</li>
                                <li className="btn btn-ghost">About</li>
                                <li className="btn btn-ghost">DashBoard</li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;