const express = require('express'); 
const app = express();
const PORT = 3000;

// Middleware para procesar datos en formato JSON (necesario para Postman)
app.use(express.json()); 

// RUTA GET: Esta es la que vemos al abrir http://localhost:3000 en el navegador
app.get('/', (req, res) => {
    res.send('El servidor de Santa Fe está activo y funcionando correctamente ¡Vamos todavía!' );
});

// RUTA POST: Esta es la que probamos exclusivamente en Postman
app.post('/login', (req, res) => {
    const { usuario, password } = req.body;

    // Validación de credenciales
    if (usuario === 'felipe' && password === 'sena123') {
        res.status(200).json({ 
            mensaje: '¡Login exitoso!',
            usuario: usuario 
        });
    } else {
        res.status(401).json({ 
            mensaje: 'Usuario o clave incorrecta' 
        });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`=================================================`);
    console.log(`Servidor activo en http://localhost:${PORT}`);
    console.log(`Presiona Ctrl + C para detener el servidor`);
    console.log(`=================================================`);
});