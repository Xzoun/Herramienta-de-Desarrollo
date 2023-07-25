const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 3000;

// Configura los detalles de conexión a tu base de datos en Railway
const connection = mysql.createConnection({
    host: 'containers-us-west-105.railway.app',
    user: 'root',
    password: 'CDXmmBk75y0KDE15OdtU',
    database: 'Comentarios',
});

// Ruta para obtener todos los comentarios desde la base de datos
app.get('/obtener-comentarios', (req, res) => {
    connection.query('SELECT * FROM Comentarios', (err, results, fields) => {
        if (err) {
            console.error('Error al obtener los comentarios:', err);
            return res.status(500).json({ error: 'Error al obtener los comentarios' });
        }

        return res.status(200).json(results);
    });
});

// Ruta para insertar un nuevo comentario en la base de datos
app.post('/insertar-comentario', (req, res) => {
    const { contenidoComentario } = req.body;
    const query = 'INSERT INTO Comentarios (contenido, fecha) VALUES (?, NOW())';
    const values = [contenidoComentario];

    connection.query(query, values, (err, result) => {
        if (err) {
            console.error('Error al insertar el comentario:', err);
            return res.status(500).json({ error: 'Error al insertar el comentario' });
        }

        return res.status(200).json({ message: 'Comentario insertado correctamente' });
    });
});

// Ruta para actualizar los likes de un comentario en la base de datos
app.post('/actualizar-likes', (req, res) => {
    const { idComentario, likes } = req.body;
    const query = `UPDATE Comentarios SET likes = ${likes} WHERE ID_Comentarios = ${idComentario};`;

    connection.query(query, (err, result) => {
        if (err) {
            console.error('Error al actualizar los likes:', err);
            return res.status(500).json({ error: 'Error al actualizar los likes' });
        }

        res.json({ message: 'Likes actualizados correctamente en el servidor' });
    });
});

app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});