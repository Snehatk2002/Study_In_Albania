import { useEffect, useState } from "react";
import API from "../services/api";
import CourseCard from "../components/CourseCard";

function Courses() {

  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  // FETCH COURSES

  useEffect(() => {

    API.get("/courses")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  // FILTER COURSES

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-5">

      <h1 className="text-center fw-bold mb-5">
        Courses in Albania
      </h1>

      {/* SEARCH BAR */}

      <div className="row justify-content-center mb-5">

        <div className="col-md-6">

          <input
            type="text"
            className="form-control shadow"
            placeholder="Search Courses..."
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </div>

      {/* COURSE CARDS */}

      <div className="row">

        {filteredCourses.length > 0 ? (

          filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))

        ) : (

          <h4 className="text-center text-muted">
            No Courses Found
          </h4>

        )}

      </div>

    </div>
  );
}

export default Courses;