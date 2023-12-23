import {Pool, QueryResult} from "pg";

export const pool =  new Pool({
user:"postgres",
host: "localhost",
database: "Practica-Xpress",
password: "admin",
port: 5432,
});

// export const query = async (
//   text: string,
//   params?: any[]
// ): Promise <QueryResult> => {
//   const result = await pool.query(text,params);
//   return result.rows[0]
// }