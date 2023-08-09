import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/common/Layout"
import TaskScreen from "../pages/screen/TaskScreen"
import Register from "../pages/auth/Register"
import Signin from "../pages/auth/Signin"
import PrivateRoute from "./privateRoute"

export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element:
            <PrivateRoute>
                <Layout />
            </PrivateRoute>,
        children: [
            {
                index: true,
                element: <TaskScreen />
            }
        ]
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/sign-in",
        element: <Signin />
    }
])