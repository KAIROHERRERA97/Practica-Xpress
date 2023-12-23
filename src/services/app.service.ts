import { pool } from "../config/database";

class AppConsultas {
  async BuscarEstudiante() {
    const query = "select * from estudiante";
    const response = await pool.query(query);
    return response.rows;
  }

  async EliminarEstudiante(id: any) {
    const query = "delete from estudiante where id =" + id;
    await pool.query(query);
    return {
      message: "Eliminacion correcta",
    };
  }

  async CrearEstudiante(nombre: any, escuela: any) {
    const query = `insert into estudiante(nombre, escuela) values ('${nombre}', '${escuela}')`;
    await pool.query(query);
    return {
      message: "Se creó correctamente",
    };
  }

  async ActualizarEstudiante(id: any, nombre?: any, escuela?: any) {
    let query = "";
    if (nombre) {
      query = `update estudiante set  nombre='${nombre}' where id =${id}`;
    } else if (escuela) {
      query = `update estudiante set escuela='${escuela}' where id =${id}`;
    } else {
      query = `update estudiante set  nombre='${nombre}',escuela='${escuela}' where id =${id}`;
    }
    await pool.query(query);
    return {
      message: "Actualización correcta",
    };
  }
}

export const appConsultas = new AppConsultas();
