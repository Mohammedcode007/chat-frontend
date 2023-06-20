import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import MainLayout from "../layouts/main";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/auth",
      element: <MainLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
        { path: "reset-password", element: <ResetPasswordPage /> },
        { path: "new-password", element: <NewPasswordPage /> },
        {path: "verify", element: <VerifyPage /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "settings", element: <Setting /> },
        { path: "group", element: <GroupPage /> },
        { path: "call", element: <CallPage /> },
        { path: "conversation", element: <Conversation /> },
        { path: "chats", element: <Chats /> },
        // { path: "contact", element: <Contact /> },
        { path: "profile", element: <Profile /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp")),
);

const Setting = Loadable(
  lazy(() => import("../pages/dashboard/Setting")),
);
const GroupPage = Loadable(
  lazy(() => import("../pages/dashboard/Group.js")),
);
const CallPage = Loadable(
  lazy(() => import("../pages/dashboard/Call")),
);
const LoginPage = Loadable(
  lazy(() => import("../pages/Auth/Login")),
);
const RegisterPage = Loadable(
  lazy(() => import("../pages/Auth/Register")),
);
const ResetPasswordPage = Loadable(
  lazy(() => import("../pages/Auth/ResetPassword")),
);
const NewPasswordPage = Loadable(
  lazy(() => import("../pages/Auth/NewPassword")),
);
const VerifyPage = Loadable(
  lazy(() => import("../pages/Auth/Verify")),
);
const Chats = Loadable(lazy(() => import("../pages/dashboard/Chats")));

// const Contact = Loadable(lazy(() => import("../sections/dashboard/Contact")));

const Conversation = Loadable(
  lazy(() => import("../pages/dashboard/Conversation"))
);
const Profile = Loadable(
  lazy(() => import("../pages/dashboard/Settings/Profile"))
);
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
