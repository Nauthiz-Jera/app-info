import { lazy } from "react";

const info = {
  path: "/info",
  Component: lazy(() => import("./index")),
};

export const routes = [info];
