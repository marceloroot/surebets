import { Routes, Route } from "react-router-dom";

import { PrivateRoutes } from "../layouts/DefaultLayout/intex";


import { Login } from "../pages/Auth";
import { Home } from "../pages/Home";
import { Recovery } from "../pages/RecoveryPassword";

export function Router() {
  return (
  
    <Routes>
       <Route path="/" element={<PrivateRoutes />}> 
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route> 

     <Route path="/recovery" element={<Recovery />} />
      <Route path="/login" element={<Login />} /> 
    </Routes>
    
  );
}