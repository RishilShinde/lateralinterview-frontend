import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
    <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
      lateralinterview
    </Link>
  </nav>
);

export default Navbar;
