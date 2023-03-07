import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import ProtectedPages from "../pages/ProtectedPages"
import Register from "../pages/RegisterPage"


const RoutesMain = () => {

    return(
        <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/register" element={ <Register />} />

            <Route path="/user" element={ <ProtectedPages />} />
        </Routes>
    )
}

export default RoutesMain