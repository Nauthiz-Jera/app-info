import React from "react";
import { BootStrapper } from "@workshop/app-components";
import { routes } from "./pages/routes";

export default function Root() {
  return <BootStrapper routes={routes} />;
}
