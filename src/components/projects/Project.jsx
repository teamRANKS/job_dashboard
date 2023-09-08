import React from "react";
import "./project.css";
import { frontendprojectdata } from "../../projectdummydata";
import { backendprojectdata } from "../../projectdummydata";
import { FaDownload } from "react-icons/fa";

const Project = () => {
  return (
    <section id="project">
      <h2>Projects</h2>
      <div className="container project_container">
        {frontendprojectdata.map((val) => (
          <article className="project">
            <div className="project_head">
              <h3>Fronted</h3>
            </div>
            <ul className="project_list">
              <li>
                <div>
                  <h4>{val.Name}</h4>
                  <small className="text-light">{val.Description}</small>
                </div>
              </li>
              <a href={val.File} download className="primary-btn">
                <FaDownload />
              </a>
            </ul>
          </article>
        ))}
        {backendprojectdata.map((val) => (
          <article className="project">
            <div className="project_head">
              <h3>Backend</h3>
            </div>
            <ul className="project_list">
              <li>
                <div>
                  <h4>{val.Name}</h4>
                  <small className="text-light">{val.Description}</small>
                </div>
              </li>
              <a href={val.File} download className="primary-btn">
                <FaDownload />
              </a>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project;
