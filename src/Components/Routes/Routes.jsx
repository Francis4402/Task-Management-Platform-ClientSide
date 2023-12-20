import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import App from "../../App.jsx";
import Home from "../HomeRoutes/Home.jsx";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])

export default Routes;