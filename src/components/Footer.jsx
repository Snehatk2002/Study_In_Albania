import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="sia-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="sia-footer-brand">
              Study<span>Albania</span>
            </div>
            <p style={{ maxWidth: "320px", fontSize: "0.9rem" }}>
              Your gateway to quality European education. Discover top
              universities and courses in Albania.
            </p>
          </div>

          <div className="col-lg-2 col-md-4">
            <h6 style={{ color: "#fff", fontWeight: 600, marginBottom: "1rem" }}>
              Navigate
            </h6>
            <ul className="sia-footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/universities">Universities</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4">
            <h6 style={{ color: "#fff", fontWeight: 600, marginBottom: "1rem" }}>
              Resources
            </h6>
            <ul className="sia-footer-links">
              <li><a href="#">Student Guide</a></li>
              <li><a href="#">Scholarships</a></li>
              <li><a href="#">Visa Info</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4">
            <h6 style={{ color: "#fff", fontWeight: 600, marginBottom: "1rem" }}>
              Contact
            </h6>
            <ul className="sia-footer-links">
              <li><a href="mailto:info@studyalbania.com">info@studyalbania.com</a></li>
              <li><a href="#">Tirana, Albania</a></li>
              <li><a href="#">+355 69 000 0000</a></li>
            </ul>
          </div>
        </div>

        <div className="sia-footer-bottom">
          © 2026 StudyAlbania. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;