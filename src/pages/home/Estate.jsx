import { useEffect, useState } from "react";

const Estate = () => {
  const [estates, setEstate] = useState([]);

  useEffect(() => {
    fetch("estate.json")
      .then((res) => res.json())
      .then((data) => setEstate(data));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {estates.map((estate) => (
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure></figure>
          <div className="card-body">
            <h2 className="card-title">
              {estate.estate_title}
              <div className="badge badge-secondary">{estate.status}</div>
            </h2>
            <p>{estate.description}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn">View More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Estate;
