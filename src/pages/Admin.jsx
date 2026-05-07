import { useEffect, useState } from "react";
import API from "../services/api";

function Admin() {

  const [universities, setUniversities] = useState([]);
  const [courses, setCourses] = useState([]);

  const [university, setUniversity] = useState({
    name: "",
    location: "",
    description: "",
    image: "",
  });

  const [course, setCourse] = useState({
    name: "",
    duration: "",
    university: "",
  });

  // FETCH DATA

  const fetchData = async () => {

    const uniRes = await API.get("/universities");
    const courseRes = await API.get("/courses");

    setUniversities(uniRes.data);
    setCourses(courseRes.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ADD UNIVERSITY

  const addUniversity = async () => {

    if (
      !university.name ||
      !university.location ||
      !university.description ||
      !university.image
    ) {
      alert("Please fill all university fields");
      return;
    }

    await API.post("/universities", university);

    alert("University Added");

    setUniversity({
      name: "",
      location: "",
      description: "",
      image: "",
    });

    fetchData();
  };

  // DELETE UNIVERSITY

  const deleteUniversity = async (id) => {

    await API.delete(`/universities/${id}`);

    alert("University Deleted");

    fetchData();
  };

  // ADD COURSE

  const addCourse = async () => {

    if (
      !course.name ||
      !course.duration ||
      !course.university
    ) {
      alert("Please fill all course fields");
      return;
    }

    await API.post("/courses", course);

    alert("Course Added");

    setCourse({
      name: "",
      duration: "",
      university: "",
    });

    fetchData();
  };

  // DELETE COURSE

  const deleteCourse = async (id) => {

    await API.delete(`/courses/${id}`);

    alert("Course Deleted");

    fetchData();
  };

  return (
    <div className="container py-5">

      <h1 className="text-center mb-5 fw-bold">
        Admin Panel
      </h1>

      <div className="row">

        {/* UNIVERSITY SECTION */}

        <div className="col-md-6">

          <div className="card shadow border-0 p-4">

            <h3 className="mb-4">
              Add University
            </h3>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="University Name"
              value={university.name}
              onChange={(e) =>
                setUniversity({
                  ...university,
                  name: e.target.value,
                })
              }
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Location"
              value={university.location}
              onChange={(e) =>
                setUniversity({
                  ...university,
                  location: e.target.value,
                })
              }
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Image URL"
              value={university.image}
              onChange={(e) =>
                setUniversity({
                  ...university,
                  image: e.target.value,
                })
              }
            />

            <textarea
              className="form-control mb-3"
              placeholder="Description"
              value={university.description}
              onChange={(e) =>
                setUniversity({
                  ...university,
                  description: e.target.value,
                })
              }
            />

            <button
              className="btn btn-primary"
              onClick={addUniversity}
            >
              Add University
            </button>

            <hr />

            <h5 className="mb-3">
              Universities
            </h5>

            {universities.map((u) => (

              <div
                key={u.id}
                className="d-flex justify-content-between align-items-center mb-2"
              >

                <span>{u.name}</span>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteUniversity(u.id)}
                >
                  Delete
                </button>

              </div>

            ))}

          </div>

        </div>

        {/* COURSE SECTION */}

        <div className="col-md-6">

          <div className="card shadow border-0 p-4">

            <h3 className="mb-4">
              Add Course
            </h3>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Course Name"
              value={course.name}
              onChange={(e) =>
                setCourse({
                  ...course,
                  name: e.target.value,
                })
              }
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Duration"
              value={course.duration}
              onChange={(e) =>
                setCourse({
                  ...course,
                  duration: e.target.value,
                })
              }
            />

            <input
              type="text"
              className="form-control mb-3"
              placeholder="University"
              value={course.university}
              onChange={(e) =>
                setCourse({
                  ...course,
                  university: e.target.value,
                })
              }
            />

            <button
              className="btn btn-success"
              onClick={addCourse}
            >
              Add Course
            </button>

            <hr />

            <h5 className="mb-3">
              Courses
            </h5>

            {courses.map((c) => (

              <div
                key={c.id}
                className="d-flex justify-content-between align-items-center mb-2"
              >

                <span>{c.name}</span>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteCourse(c.id)}
                >
                  Delete
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Admin;