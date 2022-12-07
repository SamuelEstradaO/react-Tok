import { BrowserRouter, Routes, Route, Link, Outlet,  useParams, useNavigate } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import SignIn from "./users/SignIn";
import { logOut } from "./store/user";

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

let VideoShow = () => {
  let { id } = useParams();
  return (
    <>
      <p>{id}</p>
    </>
  )
}

let UsuariosOutlet = () => {
  let user = useSelector(state => state.user.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let doLogOut = ()=> {
    dispatch(
    logOut()
    )
    navigate('/usuarios/login')
  }

  return (
    <>
      {user && <button onClick={doLogOut}>Cerrar sesión</button>}
      <Outlet />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<NotImplemented />} />
          <Route path="/usuarios" element={<UsuariosOutlet />}>
            <Route path="" element={<NotImplemented />} />
            <Route path="login" element={<SignIn />} />
            <Route path="registro" element={<NotImplemented />} />
            <Route path=":id" element={<NotImplemented />} />
            <Route path=":id/videos" element={<NotImplemented />} />
          </Route>
          <Route path="/videos">
            <Route path="" element={<NotImplemented />} />
            <Route path="nuevo" element={<NotImplemented />} />
            <Route path=":id" element={<VideoShow />} />
          </Route>
          <Route path="*" element={<Error404 />} />

        </Routes>
      </Provider>

    </BrowserRouter>
  );
}

export default App;
