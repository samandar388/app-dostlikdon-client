import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./css/main.css";
import "./css/main.scss";
import {ToastContainer} from "react-toastify";
import AdminMenus from "./pages/AdminMenus";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route psth="/admin/menus" exact component={AdminMenus}/>
      </Switch>

        <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
