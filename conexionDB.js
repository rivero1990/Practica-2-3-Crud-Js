import { createPool } from "mysql2/promise";

const pool = createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "charliecanela456$",
    database: "recaudacion_peliculas"
});


/**
 * Valores de cada una de las peliculas
 */
async function valoresPeliculas() {
    await agregarPeliculas("Infierno", 175, 55);
    await agregarPeliculas("Paraiso", 300, 125, true);
    await agregarPeliculas("Inundacion Mortal", 90, 23);
    await agregarPeliculas("Punto de Quiebre", 450, 155, true);
}


/**
 * Inserta los registros y los valores a la tabla de peliculas
 * @param {*} nombre Nombre de cada pelicula
 * @param {*} recaudacion_millones Recaudacion mundial de cada pelicula 
 * @param {*} ganancias_millones Ganancia final de cada pelicula
 * @param {*} secuela Dependiendo de la ganancia se realiza la secuela de la pelicula
 */
async function agregarPeliculas(nombre, recaudacion_millones, ganancias_millones, secuela = false) {
    let crearRegistro = await pool.query(
        `INSERT INTO peliculas (nombre, recaudacion_millones, ganancias_millones, secuela)
        VALUES (?, ?, ?, ?);`,
        [nombre, recaudacion_millones, ganancias_millones, secuela]
    );

    console.log(crearRegistro);
}


/**
 * Muestra los registros de la tabla 
 */
async function obtenerPeliculas() {
    let obtenerInfoPeliculas = await pool.query("SELECT * FROM peliculas");
    console.table(obtenerInfoPeliculas[0]);
}


/**
 * Obtiene y muestra un registro especifico en la tabla
 * @param {*} id Identifica un registro concreto en la tabla
 */
async function obtenerPeliculaPorId(id) {
    let peliculaId = await pool.query("SELECT * FROM peliculas WHERE datos_peliculas = ?", [id]);
    console.table(peliculaId[0]);
}


/**
 * Actulualiza los registros que no tenian una secuela aprobada por las ganancias
 * @param {*} datos_peliculas Id de las peliculas que seran actualizadas
 * @param {*} secuela Valor booleano de cada registro
 */
async function actualizarPeliculas(datos_peliculas, secuela) {
    let resultadoActualizar = await pool.query(`UPDATE peliculas SET secuela = ? WHERE datos_peliculas = ?;`, [secuela, datos_peliculas]);
    console.log(resultadoActualizar);
}

/**
 * Elimina los registros no actualizados 
 * @param {*} datos_peliculas Id especifico que sera eliminado
 */
async function eliminarPeliculas(datos_peliculas) {
    let resultadoEliminar = await pool.query("DELETE FROM peliculas WHERE datos_peliculas = ?;", [datos_peliculas]);
    console.log(resultadoEliminar);
}


(async () => {
    try {
        await valoresPeliculas(); 
        await obtenerPeliculas();
        await obtenerPeliculaPorId(1);
        await actualizarPeliculas(1, true)
        await actualizarPeliculas(3, true)
        await eliminarPeliculas(2)
        await eliminarPeliculas(4)
    } finally {
        pool.end();
    }
})();








