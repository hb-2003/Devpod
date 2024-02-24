import "./App.css";
// import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesList from "./router";
import AuthLayout from "./layout/AuthLayout";
import PrivateLayout from "./layout/PrivateLayout";
import PublicLayout from "./layout/PublicLayout";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const App = () => {
  // const navigate = useNavigate();
  // const token = localStorage.getItem("TOKEN");
  // useEffect(() => {
  //   if (localStorage.getItem("TOKEN")) {
  //     dispatch(userActions.userDetail());
  //   }
  // }, [dispatch, localStorage.getItem("TOKEN")]);

  const renderRoutes = () => {
    const isLogin = true;

    const renderRoute = (Component, layout, isPrivate) => {
      if (Component) {
        switch (layout) {
          case "private":
            return isLogin && isPrivate ? (
              <PrivateLayout>
                <Component />
              </PrivateLayout>
            ) : (
              <Navigate to="/" />
            );
          case "auth":
            return !isLogin ? (
              <Navigate to="/" />
            ) : (
              <AuthLayout>
                <Component />
              </AuthLayout>
            );
          case "public":
          default:
            return (
              <PublicLayout>
                <Component />
              </PublicLayout>
            );
        }
      }
      return null;
    };

    return RoutesList.map((route) => (
      <Route
        key={route.name}
        path={route.path}
        element={renderRoute(route.component, route.layout, route.isPrivate)}
      />
    ));
  };

  // useEffect(() => {
  //   if (isLoggedOutSuccess) {
  //     navigate("/signin");
  //   }
  // }, [isLoggedOutSuccess]);

  // useEffect(() => {
  //   dispatch(userActions.userDetail());
  // }, []);

  return (
    <div className="App">
      <Routes>{renderRoutes()}</Routes>
    </div>
  );
};

export default App;
