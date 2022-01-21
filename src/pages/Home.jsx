import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Jobs from "../components/EmpTables";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Home = (prop) => {
  const { user } = useAuth0();

  return (
    <div>
      <Navbar />
      <div className="container-fluid mt-5">
        <div className="d-flex justify-content-around">
          <Card
            url="/maintenance"
            logo="https://img.interempresas.net/fotos/2131002.jpeg"
            title="Mantenimiento"
          />
          <Card
            url="/operator"
            logo="https://www.stanser.com/wp-content/uploads/2019/02/Que%CC%81-hace-un-operador-de-ma%CC%81quina-CNC.jpg"
            title="Operaciones"
          />
          <Card
            url="/report"
            logo="https://mmcb.b-cdn.net/media/attachments/a/0/a/7/34b57a5e71227f67afb049ad6de299c57072733a919ac8608b58a7554348/executive-summaries.jpg"
            title="Reportes"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
