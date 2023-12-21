import {useContext} from 'react';
import {Navigate} from "react-router-dom";
import PropTypes from 'prop-types'
import useAuth from "../Hooks/useAuth.jsx";


const PrivateRoute2 = ({children}) => {

    const {user, loading} = useAuth();

    if(loading){
        return <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg min-h-screen"></span>
        </div>
    }

    if (!user) {
        return <>{children}</>
    }


    return <Navigate to="/"/>
};

PrivateRoute2.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute2;