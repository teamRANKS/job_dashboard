import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Job from "./components/jobDashboard/job";
import Header from "./components/header/Header";
import Project from "./components/projects/Project";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Job />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
