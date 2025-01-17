import { NavLink } from "react-router";
import type { Route } from "./+types/about";
import { About } from "~/about/about";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About Page" }, { name: "description", content: "About!" }];
}

export default function Home() {
  return <About />;
}
