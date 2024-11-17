import { createBrowserRouter } from "react-router-dom";

import {Login} from './pages/login/index'
import { CreateUser } from "./pages/createUser";

const router = createBrowserRouter([
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