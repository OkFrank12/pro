import { createBrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
const Layout = loadable(() => import("../components/common/Layout"));
const Register = loadable(() => import("../Pages/Auth/Register"));
const Login = loadable(() => import("../Pages/Auth/Login"));
const Resetpassword = loadable(() => import("../Pages/Auth/ResetPassword"));
const ChangePassword = loadable(() => import("../Pages/Auth/ChangePassword"));
const MessagePage = loadable(() => import("../Pages/screen/MessagePage"));
const AlternatePage = loadable(() => import("../Pages/screen/AlternatePage"));
const NewProfile = loadable(() => import("../components/alternate/NewProfile"));
const Settings = loadable(() => import("../components/alternate/Settings"));
const Projects = loadable(() => import("../components/alternate/Projects"));
const Campaign = loadable(() => import("../components/alternate/Campaign"));
const CheckOutPage = loadable(
  () => import("../components/alternate/CheckOutPage")
);
const ErrorScreen = loadable(() => import("../error/js/Error"));
const DetailedScreen = loadable(() => import("../Pages/screen/DetailedScreen"));
const MessageTwo = loadable(() => import("../Pages/screen/MessageTwo"));

export const mainRoute = createBrowserRouter([
  {
    path: "/profile",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <NewProfile />,
      },
      {
        index: true,
        path: "/profile/settings",
        element: <Settings />,
      },
      {
        index: true,
        path: "/profile/projects",
        element: <Projects />,
      },
      {
        index: true,
        path: "/profile/launch",
        element: <Campaign />,
      },
    ],
  },
  {
    path: "/",
    element: <AlternatePage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/:token/verify",
    element: <Login />,
  },
  {
    path: "/reset-password",
    element: <Resetpassword />,
  },
  {
    path: "/change-user-password",
    element: <ChangePassword />,
  },
  {
    path: "/:token/reset-user-password",
    element: <ChangePassword />,
  },
  {
    path: "/message",
    element: <MessagePage />,
  },
  {
    path: "/check-out-page/:id",
    element: <CheckOutPage />,
  },
  {
    path: "/detailed/:id",
    element: <DetailedScreen />,
  },
  {
    path: "*",
    element: <ErrorScreen />,
  },
  {
    path: "/message-two",
    element: <MessageTwo />,
  },
]);
