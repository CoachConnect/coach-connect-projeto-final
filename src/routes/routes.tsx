import { Routes, Route } from "react-router-dom";
import { AdminPage } from "../pages/AdminPage";
import Home from "../pages/Home";
import ProtectedPages from "../pages/ProtectedPages";
import Register from "../pages/RegisterPage";
import { AdminProvider } from "../context/AdminContext";
import UserPage from "../pages/UserPage";
import AboutUs from "../pages/AboutUs";
import { UserContext, UserProvider } from "../context/UserContext";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/register" element={<Register />} />


    return(
        <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/aboutUs" element={ <AboutUs />}/>
            <Route path="/register" element={ <Register />} />

            <Route path="/user/personal" element={ <ProtectedPages />} >
                <Route index element={ 
                <AdminProvider>
                    <AdminPage />
                 </AdminProvider>
                }/>               
            </Route>
            <Route path="/user/dashboard" element={ <ProtectedPages />}>
                
                <Route
                  index
                  element={
                    <AdminProvider>
                      <AdminPage />
                    </AdminProvider>}                        
                   />
            </Route>
        </Routes>
    )
}

     



export default RoutesMain;
