import { pool } from "../config/database";

class AppConsultas {
  

  async BuscarEstudiante(){
    const query = "select * from estudiante";
    const response = await pool.query(query);
    return response.rows;
   }

   async EliminarEstudiante(id:any){
    const query = "delete from estudiante where id ="+ id;
    await pool.query(query);
    return{
      message: "Eliminacion correcta",
    };
   }

   async CrearEstudiante(nombre:any, escuela:any){
    // const query = "delete from estudiante where id ="+ id;
    // const query = "insert into estudiante(nombre, escuela) values ('', '') " + nombre, escuela;
    // await pool.query(query);
    return{
      message: "Se creó correctamente",
    };
   }
}

export const appConsultas = new AppConsultas();