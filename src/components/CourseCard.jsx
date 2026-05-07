function CourseCard({ course }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow border-0 h-100 p-3">
        <h4>{course.name}</h4>
        <p>Duration: {course.duration}</p>
        <p>University: {course.university}</p>
      </div>
    </div>
  );
}

export default CourseCard;