import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { v4 as uuid } from "uuid";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import AddEmp from "./components/AddEmp";
import View from "./pages/View";
import axios from "axios";
import Settings from "./pages/Settings";
import Edit from "./components/Edit";
import EditCat from "./components/EditCat";
import Maintenance from "./pages/Maintenance";
import Deptarment from "./pages/Deptarment";
import Studie from "./pages/Studie";
import Employee from "./pages/Employee";
import AddDept from "./components/AddDept";
import AddStudies from "./components/AddStudies";
import EditStudies from "./components/EditStudies";
import Operator from "./pages/Operator";
import Report from "./pages/Report";

const App = () => {
  const [Employees, setEmployees] = useState([]);
  const [Studies, setStudies] = useState([]);
  const [Dept, setDept] = useState([]);

  const { user } = useAuth0();

  //#region request methods

  const getStudies = () => {
    axios("http://128.199.11.216/api/studies")
      .then((result) => {
        result.data.map((value) => {
          setStudies((x) => [
            ...x,
            {
              id: value.id,
              employeeid: value.employeeid,
              studiename: value.studiename,
            },
          ]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDept = () => {
    axios("http://128.199.11.216/api/departments")
      .then((result) => {
        result.data.map((value) => {
          setDept((x) => [
            ...x,
            {
              id: value.id,
              DeptoName: value.DeptoName,
            },
          ]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getEmp = () => {
    axios
      .get("http://128.199.11.216/api/employees")
      .then((result) => {
        result.data.map((value) => {
          setEmployees((x) => [
            ...x,
            {
              id: value.id,
              nombres: value.nombres,
              apellidos: value.apellidos,
              deptoid: value.deptoid,
              sexo: value.sexo,
              cedula: value.cedula,
              direccion: value.direccion,
              telcasa: value.telcasa,
              telmobil: value.telmobil,
              salariobase: value.salariobase,
              descuento: value.descuento,
              salarioneto: value.salarioneto,
            },
          ]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postEmp = (e) => {
    e.preventDefault();
    const {
      Nombre,
      Apellido,
      Sexo,
      Cedula,
      Direccion,
      telefonoCasa,
      telefonoMovil,
      salarioBase,
      descuento,
      salarioNeto,
      deptoid,
    } = e.target;

    let data = {
      nombres: Nombre.value,
      apellidos: Apellido.value,
      sexo: Sexo.value,
      cedula: Cedula.value,
      direccion: Direccion.value,
      telcasa: telefonoCasa.value,
      telmobil: telefonoMovil.value,
      salariobase: salarioBase.value,
      descuento: descuento.value,
      salarioneto: salarioNeto.value,
      deptoid: parseInt(deptoid.value),
    };

    axios({
      method: "post",
      url: "http://128.199.11.216/api/employees",
      data: data,
    })
      .then((result) => {
        console.log(result.data);
        setTimeout(() => {
          window.location.href = "/employee";
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(data);
  };

  const postDept = (e) => {
    e.preventDefault();
    const { NombreDept } = e.target;
    axios
      .post("http://128.199.11.216/api/departments", {
        DeptoName: NombreDept.value,
      })
      .then((result) => {
        window.location.replace("/departament");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postStudies = (e) => {
    e.preventDefault();
    const { NombreStudies, deptoid } = e.target;
    axios
      .post("http://128.199.11.216/api/studies", {
        studiename: NombreStudies.value,
        employeeid: deptoid.value,
      })
      .then((result) => {
        window.location.replace("/studies");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const putEmp = (e, id) => {
    e.preventDefault();

    const {
      Nombre,
      Apellido,
      Sexo,
      Cedula,
      Direccion,
      telefonoCasa,
      telefonoMovil,
      salarioBase,
      descuento,
      salarioNeto,
      deptoid,
    } = e.target;

    let data = {
      nombres: Nombre.value,
      apellidos: Apellido.value,
      sexo: Sexo.value,
      cedula: Cedula.value,
      direccion: Direccion.value,
      telcasa: telefonoCasa.value,
      telmobil: telefonoMovil.value,
      salariobase: salarioBase.value,
      descuento: descuento.value,
      salarioneto: salarioNeto.value,
      deptoid: parseInt(deptoid.value),
    };

    axios
      .put(`http://128.199.11.216/api/employees/${id}`, data)
      .then((result) => {
        window.location.replace("/employee");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const putDept = (e, id) => {
    e.preventDefault();
    const { EditDept } = e.target;
    let data = {
      DeptoName: EditDept.value,
    };
    axios
      .put(`http://128.199.11.216/api/departments/${id}`, data)
      .then((result) => {
        window.location.replace("/departament");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const putStudies = (e, id) => {
    e.preventDefault();
    const { NombreStudies, studiesid } = e.target;
    let data = { studiename: NombreStudies.value, employeeid: studiesid.value };
    axios
      .put(`http://128.199.11.216/api/studies/${id}`, data)
      .then((result) => {
        window.location.replace("/studies");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteEmp = (id, data) => {
    const validate = window.confirm(
      "Are you sure you want to delete this job?"
    );
    if (validate) {
      axios({
        method: "DELETE",
        url: `http://128.199.11.216/api/employees/${id}`,
        data: data,
      })
        .then((result) => {
          window.location.replace("/employee");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const deleteDept = (id, data) => {
    const validate = window.confirm(
      "Are you sure you want to delete this job?"
    );
    if (validate) {
      axios({
        method: "DELETE",
        url: `http://128.199.11.216/api/departments/${id}`,
        data: data,
      })
        .then((result) => {
          window.location.replace("/departament");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const deleteStudies = (id, data) => {
    const validate = window.confirm(
      "Are you sure you want to delete this job?"
    );
    if (validate) {
      axios({
        method: "DELETE",
        url: `http://128.199.11.216/api/studies/${id}`,
        data: data,
      })
        .then((result) => {
          window.location.replace("/studies");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //#endregion

  useEffect(() => {
    getEmp();
    getDept();
    getStudies();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home Employees={Employees} Dept={Dept} />
        </Route>
        <Route path="/AddEmp">
          <AddEmp postEmp={postEmp} Dept={Dept} />
        </Route>
        <Route path="/AddDept">
          <AddDept postDept={postDept} />
        </Route>
        <Route path="/AddStudies">
          <AddStudies postStudies={postStudies} Dept={Dept} />
        </Route>
        <Route path="/edit/:id">
          <Edit Employees={Employees} Dept={Dept} putEmp={putEmp} />
        </Route>
        <Route path="/editDept/:id">
          <EditCat Employees={Employees} Dept={Dept} putDept={putDept} />
        </Route>
        <Route path="/editStudies/:id">
          <EditStudies Studies={Studies} Dept={Dept} putStudies={putStudies} />
        </Route>
        <Route path="/view/:id">
          <View Employees={Employees} Dept={Dept} />
        </Route>
        <Route path="/settings">
          <Settings Dept={Dept} postDept={postDept} deleteDept={deleteDept} />
        </Route>
        <Route path="/maintenance">
          <Maintenance Employees={Employees} Dept={Dept} />
        </Route>
        <Route path="/departament">
          <Deptarment Dept={Dept} deleteDept={deleteDept} />
        </Route>
        <Route path="/studies">
          <Studie
            Studies={Studies}
            postStudies={postStudies}
            deleteStudies={deleteStudies}
          />
        </Route>
        <Route path="/employee">
          <Employee Employees={Employees} Dept={Dept} deleteEmp={deleteEmp} />
        </Route>
        <Route path="/operator">
          <Operator Employees={Employees} Dept={Dept} />
        </Route>
        <Route path="/report">
          <Report Employees={Employees} Dept={Dept} />
        </Route>
        <Route path="/*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
