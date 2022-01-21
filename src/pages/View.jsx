import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Viewer from "../components/Viewer";

const View = (prop) => {
  const { Employees, Dept, putEmp, deleteJobs } = prop;

  return (
    <div>
      <Navbar />
      {Dept.map((dept) => (
        <Viewer Employees={Employees} dept={dept} putEmp={putEmp} deleteJobs={deleteJobs} />
      ))}
      <Footer />
    </div>
  );
};

export default View;
