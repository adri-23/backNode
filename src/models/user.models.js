import { pool } from "../database/database.js";

const userModel = {
  listarUsuarios: async () => {
    try {
      pool.query("SELECT * FROM `cat_usuario`", function (err, rows, fields) {
        //return rows;
        console.log("Data:", rows, fields, err);
      });
      /*const connection = await mysql.createPool(pool.mysql);
      const query = "SELECT * FROM cat_usuario ";
      const [result] = await connection.execute(query);
      await connection.end();
      /* const connection = await pool();
      const query = "SELECT * FROM cat_usuario ";
      const [rows] = await connection.execute(query);
      connection.end(); // Cerrar la conexión después de ejecutar la consulta

      console.log(rows);
      return rows;*/
    } catch (err) {
      console.log(err);
      return [];
    }
  },
};

export default userModel;
