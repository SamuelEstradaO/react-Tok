import React from 'react';
import { Routes, Route, Link, Outlet, Navigate } from 'react-router-dom';

import SignIn from "../users/SignIn";
import Videos from "../videos/Videos";
import VideosForm from "../videos/VideosForm";
import VideoShow from "../videos/VideoShow";
import Profile from "../users/Profile";
import HomePage from "../Home";
import SignUp from "../users/SignUp";
import { useSelector } from 'react-redux';

let NotImplemented = () => {
    return (<>
      <Link to='/videos'>Ir a videos</Link>
      <h1>Esta página aún no está lista</h1>
    </>)
}

let Error404 = () => {
return (<>
    <Link to='/'>Regresar a inicio</Link>
    <h1>Esta página no existe - 404</h1>
</>)
}

let AppRoutes = props => {
    let user = useSelector(state=> state.user.user);
    return(
        <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/usuarios" element={user?<Navigate to='/videos'/> : <Outlet />}>
                  <Route path="" element={<NotImplemented />} />
                  <Route path="login" element={<SignIn />} />
                  <Route path="registro" element={<SignUp />} />
                </Route>
                <Route path='' element={user? <Outlet /> : <Navigate to='/usuarios/login'/>}>
                <Route path="usuarios/miperfil" element={<Profile />} />
                <Route path="usuarios/:id/videos" element={<NotImplemented />} />
                <Route path="/videos">
                  <Route path="" element={<Videos />} />
                  <Route path="nuevo" element={<VideosForm />} />
                  <Route path=":id" element={<VideoShow />} />
                </Route>
                </Route>
                
                <Route path="*" element={<Error404 />} />

              </Routes>
    )
}

export default AppRoutes;
