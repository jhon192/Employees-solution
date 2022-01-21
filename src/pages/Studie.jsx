import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StudiesTables from "../components/StudiesTables";

const Studie = ({ Studies, deleteStudies }) => {
  return (
    <div>
      <Navbar />
      <StudiesTables Studies={Studies} deleteStudies={deleteStudies} />
      <Footer />
    </div>
  );
};

export default Studie;
