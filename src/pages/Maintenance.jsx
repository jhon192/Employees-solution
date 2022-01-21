import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Maintenance = () => {
  return (
    <div>
      <Navbar />
        <div className="d-flex justify-content-around">
            <Card url="/departament" title="Departamento" logo="https://fp.uoc.fje.edu/wp-content/uploads/2019/07/como-mejorar-la-gestion-de-cobros-y-pagos-en-tu-empresa.jpg" content="klk compai Departamento" />
            <Card url="/studies" title="Estudios" logo="https://1.bp.blogspot.com/-6JCt5JNirrw/W7QkjsKyVfI/AAAAAAAAGyU/DhVQtcZgMxUZFMYqhWrava5BQE5qFGdJACLcBGAs/s1600/ESTUDIO%2BADMINISTRATIVO.jpg" content="klk compai Estudios" />
            <Card url="/employee" title="Empleados" logo="https://www.processmaker.com/wp-content/uploads/2021/04/employee-onboarding-768x684.jpg" content="klk compai Empleados" />
        </div>
      <Footer />
    </div>
  );
};

export default Maintenance;
