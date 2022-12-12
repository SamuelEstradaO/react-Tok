import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useNavigate } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import SignIn from "./users/SignIn";
import { logOut } from "./store/user";
import Videos from "./videos/Videos";
import VideosForm from "./videos/VideosForm";
import VideoShow from "./videos/VideoShow";
import Profile from "./users/Profile";
import HomePage from "./Home";
import { ThemeProvider } from "styled-components";
import theme, { Layout } from "./theme";

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

let UsuariosOutlet = () => {
  let user = useSelector(state => state.user.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let doLogOut = () => {
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
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/usuarios" element={<UsuariosOutlet />}>
                  <Route path="" element={<NotImplemented />} />
                  <Route path="login" element={<SignIn />} />
                  <Route path="registro" element={<NotImplemented />} />
                  <Route path="miperfil" element={<Profile />} />
                  <Route path=":id/videos" element={<NotImplemented />} />
                </Route>
                <Route path="/videos">
                  <Route path="" element={<Videos />} />
                  <Route path="nuevo" element={<VideosForm />} />
                  <Route path=":id" element={<VideoShow />} />
                </Route>
                <Route path="*" element={<Error404 />} />

              </Routes>
            </Layout>

          </ThemeProvider>

        </PersistGate>

      </Provider>

    </BrowserRouter>
  );
}

export default App;
