import React from "react";

const targetTable = React.lazy(() => import("./views/pages/Table/TableTarget"));
const Users = React.lazy(() => import("./views/users/Users"));

const routes = [
  // { path: "/", exact: true, name: "Home" },
  // { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/", exact: true, name: "Table", component: targetTable },
  { path: "/users", exact: true, name: "Table", component: Users },
];

export default routes;
