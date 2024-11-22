import { createBrowserRouter } from "react-router-dom";

import {Login} from './pages/login/index'
import { CreateUser } from "./pages/createUser";
import { Home } from "./pages/home";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>

    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"/createuser",
        element: <CreateUser/>
    }
])

export {router};