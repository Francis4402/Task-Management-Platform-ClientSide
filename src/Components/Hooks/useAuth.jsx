import {useContext} from 'react';
import {AuthContext} from "../Provider/AuthProvider.jsx";

const UseAuth = () => {
    return useContext(AuthContext);
};

export default UseAuth;