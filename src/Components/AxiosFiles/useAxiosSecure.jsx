import React from 'react';
import useAuth from "../Hooks/useAuth.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
})
const UseAxiosSecure = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function(error) {
        return Promise.reject(error);
    })

    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async function(error){
        const status = error.response.status;
        if(status === 401 || status === 403){
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error);
    })

    return axiosSecure;
};

export default UseAxiosSecure;