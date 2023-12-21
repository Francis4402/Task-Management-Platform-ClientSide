import {Link} from "react-router-dom";
import useAuth from "../Hooks/useAuth.jsx";

const Addtask = () => {

    const {user} = useAuth();

    const handleaddtask = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;

    }

    return (
        <div className="hero">
            <div className="hero-content flex-col h-fit">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Add Product</h1>
                </div>

                <div className="space-y-6 justify-center grid p-10 lg:shadow-lg rounded-lg bg-white">

                    <form onSubmit={handleaddtask} className="space-y-8 md:w-[500px] w-full">
                        <div className="grid gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input name="title" type="text" placeholder="Title" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input name="description" type="text" placeholder="Description" className="input input-bordered w-full" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Priority</span>
                                </label>
                                <select name="level" className="p-3 rounded-md bg-base-300 w-full" required>
                                    <option value="">Select Category</option>
                                    <option value="easy">Low</option>
                                    <option value="medium">Moderate</option>
                                    <option value="hard">High</option>
                                </select>
                            </div>

                        </div>
                        <div>
                            <button type="submit" className="btn btn-block btn-neutral">Add Product</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Addtask;