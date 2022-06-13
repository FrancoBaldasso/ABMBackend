const getConnection = require("./db");

const addEmployee = async (nombre, departmento, direccion) => {
  const connection = await getConnection();
  return connection.execute(
    "INSERT INTO EMPLEADO (nombre,departmento,direccion) values (?,?,?)",
    [nombre, departmento, direccion]
  );
};

const getAllEmployees = async () => {
  const connection = await getConnection();
  return connection.execute(
    "select e.id,e.nombre,d.nombre departmento,e.direccion from empleado e,departmento d where e.departmento=d.id order by e.id");
};

const getEmployee = async (id) => {
  const connection = await getConnection();
  return connection.execute(
    "select e.id,e.nombre,d.nombre departmento,e.direccion from empleado e,departmento d where e.departmento=d.id and e.id=?",
    [id]
  );
};

const updateAddress = async (id, direccion) => {
  const connection = await getConnection();
  return connection.execute("update empleado set direccion=? where id=?", [
    direccion,
    id,
  ]);
};

const deleteEmployee = async (id) => {
  const connection = await getConnection();
  return connection.execute("delete from empleado where id=?", [id]);
};

const getAllDepartments = async () => {
  const connection = await getConnection();
  return connection.execute("select id,nombre from departmento");
};

module.exports = {
  addEmployee,
  getAllEmployees,
  getEmployee,
  updateAddress,
  deleteEmployee,
  getAllDepartments,
};
