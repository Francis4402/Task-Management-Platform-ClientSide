import useAxiosPublic from "../AxiosFiles/useAxiosPublic.jsx";
import {useQuery} from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth.jsx";


const LoadTasks = () => {
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const {data: tasks = [] } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tasks?email=${user.email}`);
            return res.data;
        }
    })

    return [tasks]
};

export default LoadTasks;