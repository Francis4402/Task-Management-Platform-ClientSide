import LoadTasks from "./LoadTasks.jsx";

const MyTasks = () => {

    const [tasks] = LoadTasks();

    return (
        <div className="px-10">
            <div className="grid lg:grid-cols-3 gap-10">
                <div>
                    <h1 className="text-xl font-semibold border-b py-4">To-List</h1>
                    <div className="grid gap-5 mt-3">
                        {
                            tasks.map(ta => <div key={ta.title} className="border shadow rounded-xl w-full">
                                <div className="card-body">
                                    <div className="flex items-center gap-40">
                                        <h1 className="card-title">{ta.title}</h1>
                                        <p>{ta.timestamp}</p>
                                    </div>
                                    <div className="flex items-center gap-40">
                                        <p className="">{ta.description}</p>
                                        <p>{ta.priority}</p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-semibold border-b py-4">Ongoing</h1>
                    <div>
                        <h1>OnGoing</h1>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-semibold border-b py-4">Complete</h1>
                    <div>
                        <h1>Complete</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTasks;