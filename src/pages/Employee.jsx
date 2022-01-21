import React from "react";
import Footer from "../components/Footer";
import Jobs from "../components/EmpTables";
import Navbar from "../components/Navbar";

const Employee = ({ Employees, Dept, deleteEmp }) => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
      <Jobs Employees={Employees} Dept={Dept} deleteEmp={deleteEmp}/>
      </div>
      <Footer />
    </div>
  );
};

export default Employee;
