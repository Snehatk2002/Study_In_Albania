import { useEffect, useState } from "react";
import API from "../services/api";
import UniversityCard from "../components/UniversityCard";

function Universities() {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    API.get("/universities").then((res) =>
      setUniversities(res.data)
    );
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">
        Universities in Albania
      </h1>

      <div className="row">
        {universities.map((u) => (
          <UniversityCard key={u.id} university={u} />
        ))}
      </div>
    </div>
  );
}

export default Universities;