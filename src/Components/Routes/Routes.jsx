import {createBrowserRouter} from "react-router-dom";
import App from "../../App.jsx";
import Home from "../HomeRoutes/Home.jsx";
import Logins from "../SignUpPates/Logins.jsx";
import Register from "../SignUpPates/Register.jsx";
import PrivateRoute2 from "../PrivateRoute/PrivateRoute2.jsx";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/logins',
                element: <PrivateRoute2><Logins/></PrivateRoute2>
            },
            {
                path: '/register',
                element: <PrivateRoute2><Register/></PrivateRoute2>
            }
        ]
    }
])

export default Routes;