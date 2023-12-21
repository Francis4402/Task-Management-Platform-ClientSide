import {useLocation, useNavigate} from "react-router-dom";
import useAuth from "../Hooks/useAuth.jsx";
import useAxiosSecure from "../AxiosFiles/useAxiosSecure.jsx";
import Swal from "sweetalert2";

const Addtask = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const handleaddtask = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const email = user?.email;
        const description = form.description.value;
        const priority = form.priority.value;

        const timestamp = new Date().toLocaleDateString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        });

        const myposts = {title, description, email, priority, timestamp}

        const addPosts = await axiosSecure.post('/tasks', myposts);
        if(addPosts.data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Post Added Successfully',
                icon: 'success',
                confirmButtonText: 'ok'
            })
            navigate(location?.state ? location?.state : '/dashboard/usertasks')
        }
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
                                <select name="priority" className="p-3 rounded-md bg-base-300 w-full" required>
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