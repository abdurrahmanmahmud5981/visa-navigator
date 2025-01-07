import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllVisas from "../pages/AllVisas";
import AddVisa from "../pages/AddVisa";
import MyAddedVisas from "../pages/MyAddedVisas";
import MyVisaApplications from "../pages/MyVisaApplications";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import PrivateRoute from "./PrivateRoute";
import SingleDetails from "../pages/SingleDetails";
import NotFound from "../pages/NotFound";
import VisaGuidelines from "../pages/VisaGuidelines";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://visa-navigatore-server.vercel.app/visas-collection"),
      },
      {
        path: "allVisas",
        element: <AllVisas />,
        loader: () => fetch("https://visa-navigatore-server.vercel.app/allVisas"),
      },
      {
        path: "visaGuidelines",
        element: <VisaGuidelines />,
      },
      {
        path: "addVisa",
        element: (
          <PrivateRoute>
            <AddVisa />
          </PrivateRoute>
        ),
      },
      {
        path: "myAddedVisas",
        element: (
          <PrivateRoute>
            <MyAddedVisas />
          </PrivateRoute>
        ),
      },
      {
        path: "myVisaApplications",
        element: (
          <PrivateRoute>
            <MyVisaApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "single-details/:id",
        element: (
          
            <SingleDetails />
       
        ),
        loader: ({ params }) =>
          fetch(`https://visa-navigatore-server.vercel.app/visas-collection/${params?.id}`),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgotPassword",
        element: <ForgotPassword />,
      },
    ],
  },

  { path: "*", element: <NotFound/> },
]);

export default routes;
