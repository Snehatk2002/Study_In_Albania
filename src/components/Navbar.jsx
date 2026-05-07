import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">

      <div className="container">

        {/* LOGO */}

        <Link className="navbar-brand fw-bold fs-4" to="/">
          🎓 Study Albania
        </Link>

        {/* TOGGLE BUTTON */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

          <span className="navbar-toggler-icon"></span>

        </button>

        {/* NAVBAR LINKS */}

        <div
          className="collapse navbar-collapse"
          id="nav"
        >

          <ul className="navbar-nav ms-auto text-center">

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                to="/universities"
              >
                Universities
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                to="/courses"
              >
                Courses
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                to="/about"
              >
                About
              </Link>
            </li>

            <li className="nav-item mt-2 mt-lg-0 ms-lg-3">

              <Link
                className="btn btn-warning rounded-pill px-4"
                to="/admin"
              >
                Admin
              </Link>

            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;