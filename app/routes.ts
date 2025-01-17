import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("about", "routes/about.tsx"),
  route("colors", "routes/colors.tsx"),
] satisfies RouteConfig;
