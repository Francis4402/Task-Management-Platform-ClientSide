import {useQuery} from "@tanstack/react-query";
import useAuth from "./useAuth.jsx";
import useAxiosSecure from "../AxiosFiles/useAxiosSecure.jsx";

const UseUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data: AllUsers = [] } = useQuery({
        queryKey: ['alluser'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?email=${user.email}`);
            return res.data;
        }
    })
    return [AllUsers]
};

export default UseUsers;