import {createBrowserRouter} from "react-router-dom";
import App from "../../App.jsx";
import Home from "../HomeRoutes/Home.jsx";
import Logins from "../SignUpPates/Logins.jsx";
import Register from "../SignUpPates/Register.jsx";
import PrivateRoute2 from "../PrivateRoute/PrivateRoute2.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import Dashboard from "../DashBoard/Dashboard.jsx";
import About from "../HomeRoutes/About.jsx";

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
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard/></PrivateRoute>
            },
            {
                path: '/about',
                element: <About/>
            }
        ]
    }
])

export default Routes;