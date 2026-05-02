<?php
// Permitir que cualquier aplicación consulte esta API
header("Content-Type: application/json");

// Datos de prueba para el administrador del torneo de fútbol
$usuario_valido = "felipe_admin";
$password_valida = "futbol2026";

// Capturar lo que el usuario escribe (lo recibiremos desde Postman)
$input = json_decode(file_get_contents("php://input"), true);

$usuario_ingresado = $input['usuario'] ?? '';
$password_ingresada = $input['password'] ?? '';

// Validar credenciales
if ($usuario_ingresado === $usuario_valido && $password_ingresada === $password_valida) {
    // Respuesta si todo está bien
    echo json_encode([
        "status" => "success",
        "mensaje" => "Autenticación satisfactoria",
        "usuario" => $usuario_ingresado
    ]);
} else {
    // Respuesta si los datos son incorrectos
    http_response_code(401);
    echo json_encode([
        "status" => "error",
        "mensaje" => "Error en la autenticación"
    ]);
}
?>