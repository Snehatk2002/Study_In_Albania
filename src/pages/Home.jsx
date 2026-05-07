import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function Home() {

  const [universities, setUniversities] = useState([]);

  useEffect(() => {

    API.get("/universities")
      .then((res) => {
        setUniversities(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  const features = [
    {
      icon: "🎓",
      title: "Top Universities",
      text: "Globally recognized universities with modern campuses.",
    },
    {
      icon: "💰",
      title: "Affordable Education",
      text: "Quality education with affordable tuition fees.",
    },
    {
      icon: "🌍",
      title: "International Community",
      text: "Friendly and welcoming environment for global students.",
    },
  ];

  return (
    <div>

      {/* HERO SECTION */}

      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
        className="d-flex align-items-center"
      >

        <div className="container text-center text-white">

          <h1
            className="fw-bold"
            style={{
              fontSize: "70px",
              letterSpacing: "2px",
            }}
          >
            Study in Albania
          </h1>

          <p
            className="lead mt-4 mx-auto"
            style={{
              maxWidth: "750px",
              fontSize: "22px",
            }}
          >
            Explore world-class universities,
            affordable education, and exciting
            student life opportunities in Albania.
          </p>

          <div className="mt-5">

            <Link
              to="/universities"
              className="btn btn-warning btn-lg px-5 py-3 me-3 rounded-pill shadow"
            >
              Explore Universities
            </Link>

            <Link
              to="/courses"
              className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill"
            >
              View Courses
            </Link>

          </div>

        </div>

      </div>

      {/* WHY STUDY */}

      <div className="container py-5">

        <div className="text-center mb-5">

          <h2 className="fw-bold display-5">
            Why Choose Albania?
          </h2>

          <p className="text-muted fs-5 mt-3">
            A perfect combination of education,
            culture, affordability, and opportunity.
          </p>

        </div>

        <div className="row g-4">

          {features.map((item, index) => (

            <div className="col-md-4" key={index}>

              <div
                className="card border-0 shadow-lg text-center p-5 h-100"
                style={{
                  borderRadius: "25px",
                  transition: "0.4s",
                }}
              >

                <div
                  style={{
                    fontSize: "70px",
                  }}
                >
                  {item.icon}
                </div>

                <h3 className="fw-bold mt-4">
                  {item.title}
                </h3>

                <p className="text-muted mt-3">
                  {item.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* FEATURED UNIVERSITIES */}

      <div
        className="py-5"
        style={{
          background: "#f8f9fa",
        }}
      >

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold display-5">
              Featured Universities
            </h2>

            <p className="text-muted fs-5 mt-3">
              Discover leading universities in Albania
            </p>

          </div>

          <div className="row">

            {universities.slice(0, 3).map((u) => (

              <div className="col-md-4 mb-4" key={u.id}>

                <div
                  className="card border-0 shadow-lg h-100 overflow-hidden"
                  style={{
                    borderRadius: "25px",
                  }}
                >

                  <img
                    src={u.image}
                    className="card-img-top"
                    style={{
                      height: "260px",
                      objectFit: "cover",
                    }}
                    alt=""
                  />

                  <div className="card-body p-4">

                    <h3 className="fw-bold">
                      {u.name}
                    </h3>

                    <p className="text-muted mt-2">
                      📍 {u.location}
                    </p>

                    <p className="mt-3">
                      {u.description}
                    </p>

                    <Link
                      to="/universities"
                      className="btn btn-primary rounded-pill px-4 mt-2"
                    >
                      Explore
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* ABOUT SECTION */}

      <div className="container py-5">

        <div className="row align-items-center g-5">

          <div className="col-lg-6">

            <img
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
              className="img-fluid shadow-lg"
              style={{
                borderRadius: "30px",
              }}
              alt=""
            />

          </div>

          <div className="col-lg-6">

            <span className="badge bg-primary p-3 mb-3">
              Study Destination
            </span>

            <h2 className="fw-bold display-6 mb-4">
              Albania – A Modern Education Hub
            </h2>

            <p className="text-muted fs-5">
              Albania provides excellent academic
              opportunities, affordable living,
              vibrant culture, and internationally
              recognized degrees for students.
            </p>

            <ul className="mt-4 fs-5">
              <li className="mb-2">
                Affordable tuition fees
              </li>

              <li className="mb-2">
                European-standard education
              </li>

              <li className="mb-2">
                Modern campuses & facilities
              </li>

              <li className="mb-2">
                Friendly student environment
              </li>
            </ul>

            <Link
              to="/about"
              className="btn btn-warning btn-lg rounded-pill px-5 mt-4"
            >
              Learn More
            </Link>

          </div>

        </div>

      </div>

      {/* CTA */}

      <div
        className="py-5 text-center text-white"
        style={{
          background:
            "linear-gradient(135deg, #0d6efd, #6610f2)",
        }}
      >

        <div className="container">

          <h1 className="fw-bold display-5">
            Start Your Future Today
          </h1>

          <p className="lead mt-4">
            Join thousands of students building
            their careers in Albania.
          </p>

          <Link
            to="/courses"
            className="btn btn-light btn-lg rounded-pill px-5 py-3 mt-3 shadow"
          >
            Explore Courses
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Home;