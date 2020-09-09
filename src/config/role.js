import React from "react";

const Login = React.lazy(() => import("../views/pages/login/Login"));
const Register = React.lazy(() => import("../views/pages/register/Register"));
const Page404 = React.lazy(() => import("../views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("../views/pages/page500/Page500"));
const TheLayOut = React.lazy(() => import("../containers/Thelayout"));

const components = {
  login: {
    component: Login,
    url: "/login",
  },
  register: {
    component: Register,
    url: "/register",
  },
  page404: {
    component: Page404,
    url: "/page404",
  },
  page500: {
    component: Page500,
    url: "/page500",
  },
  home: {
    component: TheLayOut,
    url: "/home",
  },
};

export const allowRoute = {
  guest: {
    allow: [components.login],
    redirect: "/login",
  },
  member: {
    allow: [components.home, components.page404, components.page500],
    redirect: "/home",
  },
};
