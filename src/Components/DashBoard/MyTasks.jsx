const MyTasks = () => {
    return (
        <div className="px-10">
            <div className="grid grid-cols-2">
                <div>
                    <h1 className="text-xl font-semibold border-b py-4">To-List</h1>
                    <div>
                        <h1>Todo</h1>
                    </div>
                </div>
                <div className="grid">
                    <div>
                        <h1 className="text-xl font-semibold border-b py-4">Ongoing</h1>
                        <div>
                            <h1>OnGoind</h1>
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
        </div>
    );
};

export default MyTasks;