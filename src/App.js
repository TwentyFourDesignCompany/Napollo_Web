import React from "react";
// ROOT ROUTES
import routes from "./routes/index";
import { Route, Switch } from "react-router-dom";
import './App.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RenderRoutes = (route) => {
  document.title = route.title || "Napollo";

  return (
    <Route
      path={route.path}
      exact
      render={(props) => <route.component {...props} />}
    ></Route>
  );
};
function App() {
  return (
    // <Container>
    <>
      <Switch>
        {routes.map((route, index) => (
          <RenderRoutes {...route} key={index} />
        ))}
      </Switch>
      <ToastContainer/>
      </>
    // </Container>
  );
}

export default App;
