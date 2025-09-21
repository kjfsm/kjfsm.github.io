import type { RouteConfig } from "@react-router/dev/routes";

export default [
  {
    path: "/",
    file: "routes/_index.tsx",
  },
  {
    path: "/tourabu/tantou-cp",
    file: "routes/tourabu.tantou-cp.tsx",
  },
] satisfies RouteConfig;
