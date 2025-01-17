import type { Route } from "./+types/colors";
import { Colors } from "../colors/colors";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Color Theme Testing" },
    { name: "description", content: "Testing the color scheme" },
  ];
}

export default function Index() {
  return <Colors />;
}
