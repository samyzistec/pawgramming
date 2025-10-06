import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),             // Ruta principal "/"
    route("analysis", "analysis/analysis.tsx")
] satisfies RouteConfig;