<?php
// send-mail.php

// CORS Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit;
}

// Receive JSON data
$data = json_decode(file_get_contents("php://input"), true);

// Basic Validation
if (empty($data['email']) || empty($data['name'])) {
    echo json_encode(["status" => "error", "message" => "Name and Email are required"]);
    exit;
}

// Recipient Email
$to = "sumitkumarsahu141@gmail.com"; 
$formType = isset($data['formType']) ? htmlspecialchars($data['formType']) : "New Website Inquiry";
$subject = "[$formType] New Inquiry from: " . htmlspecialchars($data['name']);

// Build Email Body
$body = "
<html>
<head>
    <title>New Inquiry</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { padding: 20px; border: 1px solid #eee; border-radius: 10px; }
        .header { background: #0078f0; color: white; padding: 10px 20px; border-radius: 5px 5px 0 0; }
        .row { margin: 10px 0; border-bottom: 1px solid #f9f9f9; padding-bottom: 5px; }
        .label { font-weight: bold; color: #555; width: 150px; display: inline-block; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>$formType</h2>
        </div>
        <div class='row'><span class='label'>Full Name:</span> " . htmlspecialchars($data['name']) . "</div>
        <div class='row'><span class='label'>Email:</span> " . htmlspecialchars($data['email']) . "</div>
";

if (!empty($data['phone'])) {
    $body .= "<div class='row'><span class='label'>Phone:</span> " . htmlspecialchars($data['phone']) . "</div>";
}

if (!empty($data['company'])) {
    $body .= "<div class='row'><span class='label'>Company:</span> " . htmlspecialchars($data['company']) . "</div>";
}

if (!empty($data['budget'])) {
    $body .= "<div class='row'><span class='label'>Budget:</span> " . htmlspecialchars($data['budget']) . "</div>";
}

if (!empty($data['services'])) {
    $body .= "<div class='row'><span class='label'>Services:</span> " . htmlspecialchars($data['services']) . "</div>";
}

$body .= "
        <div class='row'>
            <span class='label'>Message:</span><br>
            <p>" . nl2br(htmlspecialchars($data['message'])) . "</p>
        </div>
    </div>
</body>
</html>
";

// Headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: DSS Website <noreply@digitalsuccesssolutions.in>" . "\r\n";

// Send Email
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["status" => "success", "message" => "Email sent successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Failed to send email"]);
}
?>