<?php
// PHP Backend Login API
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$input = json_decode(file_get_contents('php://input'), true);

$username = isset($input['username']) ? trim($input['username']) : '';
$password = isset($input['password']) ? trim($input['password']) : '';

// Default credentials
$DEFAULT_USER = "seoexpert@dss";
$DEFAULT_PASS = "dss@seo@141";

if (empty($username) || empty($password)) {
    echo json_encode(["status" => "error", "message" => "Username and password are required."]);
    exit;
}

if ($username === $DEFAULT_USER && $password === $DEFAULT_PASS) {
    echo json_encode([
        "status" => "success",
        "message" => "Login successful!",
        "token" => md5("dss_admin_token_" . time()),
        "user" => [
            "username" => $DEFAULT_USER
        ]
    ]);
    exit;
}

// Database check fallback if database exists
$host = "localhost";
$db_name = "digitals_dss_db";
$db_user = "digitals_dss_user";
$db_pass = "DSS_Password_2026!";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8mb4", $db_user, $db_pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);

    $stmt = $pdo->prepare("SELECT * FROM `admin_users` WHERE `username` = :username LIMIT 1");
    $stmt->execute(['username' => $username]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        echo json_encode([
            "status" => "success",
            "message" => "Login successful!",
            "token" => md5("dss_admin_token_" . time()),
            "user" => [
                "username" => $user['username']
            ]
        ]);
        exit;
    }
} catch (Exception $e) {
    // Ignore DB error if default check failed
}

echo json_encode(["status" => "error", "message" => "Invalid username or password."]);
exit;
