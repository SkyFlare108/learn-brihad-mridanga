import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
    <header
      style={{
        padding: "1rem",
        borderBottom: "1px solid #222",
        textAlign: "center",
      }}
    >
      {/* Logo + Title */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src="/lbm-logo.png"
          alt="LBM Logo"
          style={{ height: "80px", width: "80px", marginBottom: "0.5rem" }}
        />
        <h1 style={{ margin: 0 }}>Learn Brihad Mridanga</h1>
      </div>

      {/* Nav buttons under the title */}
      <nav style={{ marginTop: "1rem" }}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ margin: "0 0.5rem" }}
        >
          About
        </NavLink>
        <NavLink
          to="/classes"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ margin: "0 0.5rem" }}
        >
          Classes
        </NavLink>
        <NavLink
          to="/payments"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ margin: "0 0.5rem" }}
        >
          Payments
        </NavLink>
      </nav>
    </header>
      <Outlet />
      <footer style={{ padding: "1rem", marginTop: "2rem", fontSize: "0.8rem", color: "#aaa" }}>
        © {new Date().getFullYear()} Learn Brihad Mridanga
      </footer>
    </div>
  );
}
