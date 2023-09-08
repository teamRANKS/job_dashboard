import React, { useState } from "react";
import { jobsCard } from "../../dummydata";
import "./job.css";

const Card = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredJobs = jobsCard.filter((job) =>
    job.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <section className="Card">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search jobs"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="container grid2">
          {filteredJobs.map((val) => (
            <div className="items">
              <div className="price">
                <h1>{val.Name}</h1>
                <h3>{val.Vacancies}</h3>
                <h3>{val.Location}</h3>
                <h3>{val.Qualification}</h3>
                <h3>{val.Last_Date}</h3>
                <h3>{val.Batch}</h3>
                <h3>{val.Salary}</h3>
                <h3>{val.Experience}</h3>
              </div>
              <a href={val.link} target="blank" className="primary-btn">
                Apply NOW
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Card;
