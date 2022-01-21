import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DeptTables from "../components/DeptTables";

const Deptarment = ({ Dept, deleteDept }) => {
  return (
    <div>
      <Navbar />
      <DeptTables Dept={Dept} deleteDept={deleteDept} />
      <Footer />
    </div>
  );
};

export default Deptarment;
