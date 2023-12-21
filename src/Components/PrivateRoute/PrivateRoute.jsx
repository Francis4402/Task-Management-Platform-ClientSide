import useAuth from "../Hooks/useAuth.jsx";
import PropTypes from 'prop-types'
import {Navigate} from "react-router-dom";
const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();

    if(loading){
        return <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg min-h-screen"></span>
        </div>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;