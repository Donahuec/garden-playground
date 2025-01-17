import { NavLink } from "react-router";

export function About() {
  return (
    <main>
      <h1>About</h1>
      <NavLink to="/" end>
        Home
      </NavLink>
    </main>
  );
}
