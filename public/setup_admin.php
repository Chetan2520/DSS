<?php
// Automatic Database Setup & Admin User Seeder Script
// Location on server: /public_html/php_backend/api/setup_admin.php
// Digital Success Solutions (DSS)

header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset=UTF-8");

// Database configuration
$host = "localhost";
$db_name = "digitals_dss_db";
$username = "digitals_dss_user";
$password = "DSS_Password_2026!"; // Update DB password if required

$response_message = "";
$status = "info";

try {
    // Connection to MySQL
    $pdo = new PDO("mysql:host=$host;charset=utf8mb4", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);

    // Create database if not existing
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `$db_name` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    $pdo->exec("USE `$db_name`");

    // Create admin_users table
    $tableSql = "CREATE TABLE IF NOT EXISTS `admin_users` (
        `id` INT AUTO_INCREMENT PRIMARY KEY,
        `username` VARCHAR(100) NOT NULL UNIQUE,
        `password` VARCHAR(255) NOT NULL,
        `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";
    $pdo->exec($tableSql);

    // Default Credentials
    $defaultUser = "seoexpert@dss";
    $defaultPass = "dss@seo@141";
    $hashedPass = password_hash($defaultPass, PASSWORD_BCRYPT);

    // Check if default user already exists
    $stmt = $pdo->prepare("SELECT id FROM `admin_users` WHERE `username` = :username");
    $stmt->execute(['username' => $defaultUser]);
    $userExists = $stmt->fetch();

    if ($userExists) {
        // Update password for default user
        $updateStmt = $pdo->prepare("UPDATE `admin_users` SET `password` = :password WHERE `username` = :username");
        $updateStmt->execute(['password' => $hashedPass, 'username' => $defaultUser]);
        $response_message = "✅ Admin Table Ready! Default user (<code>seoexpert@dss</code>) password has been updated.";
    } else {
        // Insert default user
        $insertStmt = $pdo->prepare("INSERT INTO `admin_users` (`username`, `password`) VALUES (:username, :password)");
        $insertStmt->execute(['username' => $defaultUser, 'password' => $hashedPass]);
        $response_message = "✅ Database & Admin User Setup Successfully! Default User: <code>seoexpert@dss</code>";
    }

    $status = "success";

} catch (PDOException $e) {
    $response_message = "⚠️ Database Note: " . htmlspecialchars($e->getMessage());
    $status = "warning";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DSS Admin Auto Setup</title>
    <style>
        * { box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        body { background-color: #0b0f19; color: #f3f4f6; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; }
        .card { background: #111827; border: 1px solid #1f2937; border-radius: 16px; padding: 32px; max-width: 520px; width: 100%; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5); text-align: center; }
        .icon { width: 64px; height: 64px; background: #0078f020; color: #0078f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; margin: 0 auto 20px; }
        h1 { font-size: 22px; font-weight: 700; margin-bottom: 8px; color: #fff; }
        p { color: #9ca3af; font-size: 14px; line-height: 1.6; margin-bottom: 24px; }
        .box { background: #1f2937; border-left: 4px solid #0078f0; padding: 16px; border-radius: 8px; text-align: left; font-size: 14px; margin-bottom: 24px; word-break: break-all; }
        code { background: #374151; padding: 2px 6px; border-radius: 4px; font-family: monospace; color: #60a5fa; }
        .btn { display: inline-block; width: 100%; background: #0078f0; color: white; text-decoration: none; padding: 12px 20px; border-radius: 10px; font-weight: 600; font-size: 15px; transition: background 0.2s; }
        .btn:hover { background: #0056b3; }
        .credentials { background: #00000040; border: 1px solid #374151; border-radius: 10px; padding: 14px; text-align: left; font-size: 13px; margin-bottom: 20px; }
        .credentials div { margin-bottom: 6px; }
        .credentials div:last-child { margin-bottom: 0; }
    </style>
</head>
<body>
    <div class="card">
        <div class="icon">⚡</div>
        <h1>DSS Admin Setup (`php_backend/api/`)</h1>
        <p>Database & Admin User Initialization Page</p>
        
        <div class="box">
            <?php echo $response_message; ?>
        </div>

        <div class="credentials">
            <div><strong>Server Path:</strong> <code>/public_html/php_backend/api/</code></div>
            <div><strong>Admin URL:</strong> <code>https://digitalsuccesssolutions.in/adminsurendraseo</code></div>
            <div><strong>Username:</strong> <code>seoexpert@dss</code></div>
            <div><strong>Password:</strong> <code>dss@seo@141</code></div>
        </div>

        <a href="https://digitalsuccesssolutions.in/adminsurendraseo" class="btn">Go to Admin Login &rarr;</a>
    </div>
</body>
</html>
