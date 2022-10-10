import Analisys from "../components/analisys/Analisys";
import Appointment from "../components/appointment/Appointment";
import Config from "../components/config/Config";
import Details from "../components/details/Details";
import Entry from "../components/entry/Entry";
import Layout from "../components/layout/Layout";
import Login from "../components/login/login";
import Query from "../components/query/Query";
import SecretRoute from "./SecretRoute";

import {
  createBrowserRouter
} from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SecretRoute Element ={Layout} Ch={Analisys}/> ,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/config",
        element: <SecretRoute Element ={Layout} Ch={Config}/>,
    },
    {
        path: "/query",
        element: <SecretRoute Element ={Layout} Ch={Query}/>,
    },
    {
        path: "/entry",
        element: <SecretRoute Element ={Layout} Ch={Entry}/>,
    },
    {
        path: "/appointment",
        element: <SecretRoute Element ={Layout} Ch={Appointment}/>,
    },
    {
        path: "/entrydetailse/:id",
        element: <SecretRoute Element ={Layout} Ch={Details}/>,
    }
  ]);

  export default router;