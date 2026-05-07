function UniversityCard({ university }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow h-100 border-0">
        <img
          src={university.image}
          className="card-img-top"
          height="220"
        />

        <div className="card-body">
          <h4>{university.name}</h4>
          <p className="text-muted">{university.location}</p>
          <p>{university.description}</p>
        </div>
      </div>
    </div>
  );
}

export default UniversityCard;