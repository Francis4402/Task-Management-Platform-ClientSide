import useAxiosPublic from "../AxiosFiles/useAxiosPublic.jsx";
import {useQuery} from "@tanstack/react-query";

const UseUserData = () => {
    const axiosPublic = useAxiosPublic();
    const {data: alluserdata = [] } = useQuery({
        queryKey: ['alludata'],
        queryFn: async () => {
            const res = await axiosPublic.get('/userdata');
            return res.data;
        }
    })
    return [alluserdata]
};

export default UseUserData;