const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 6358;

// Configura los detalles de conexión a tu base de datos
const connection = mysql.createConnection({
    host: 'containers-us-west-105.railway.app',
    user: 'root',
    password: 'CDXmmBk75y0KDE15OdtU',
    database: 'Comentarios',
});

// Establece la conexión
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos exitosa!');

    // Realiza una consulta para obtener todos los comentarios
    connection.query('select * from Comentarios order by id desc', (err, results, fields) => {
        if (err) {
            console.error('Error al obtener los comentarios:', err);
            return res.status(500).json({ error: 'Error al obtener los comentarios' });
        }

        return res.status(200).json(results);
    });
});

// insertar contenido en la base
export function insertarComentario(contenidoComentario) {
    const query = 'INSERT INTO Comentarios (contenido, fecha) VALUES (?, NOW())';
    const values = [contenidoComentario];

    connection.query(query, values, (err, result) => {
        if (err) {
            console.error('Error al insertar el comentario:', err);
            return;
        }
        console.log('Comentario insertado correctamente!');
    });
}

// Ruta para obtener todos los comentarios desde la base de datos
export function cargarComentarios() {

    connection.query('SELECT * FROM Comentarios', (err, results, fields) => {
        if (err) {
            console.error('Error al obtener los comentarios:', err);
            return;
        }
        console.log(results);

    });
}

export function actualizarLikes(idComentario, likes) {
    app.post('/actualizar-likes', (req, res) => {
        const query = `UPDATE Comentarios SET likes = ${likes} WHERE ID_Comentarios = ${idComentario};`;

        connection.query(query, (err, result) => {
            if (err) {
                console.error('Error al actualizar los likes:', err);
                return res.status(500).json({ error: 'Error al actualizar los likes' });
            }

            res.json({ message: 'Likes actualizados correctamente en el servidor' });
        });
    });
}