import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.25rem 1rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        backgroundColor: "#2c3e50",
      }}
    >
      {/* Logo + Title */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/new-lbm-logo.png"
          alt="LBM Logo"
          style={{ height: "60px", width: "70px", marginRight: "0.5rem" }}
        />
        <h1 style={{ margin: 0, color: "#f1c232", fontSize: "1.5rem" }}>Learn Brihad Mridanga</h1>
      </div>

      {/* Nav buttons */}
      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ margin: "0 0.5rem", color: "white" }}
        >
          About
        </NavLink>
        <NavLink
          to="/registration"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ margin: "0 0.5rem", color: "white" }}
        >
          Registration
        </NavLink>
        <NavLink
          to="/schedule"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ margin: "0 0.5rem", color: "white" }}
        >
          Schedule
        </NavLink>
        <NavLink
          to="/payments"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ margin: "0 0.5rem", color: "white" }}
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
