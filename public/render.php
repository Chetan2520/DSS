<?php
$slug = isset($_GET['slug']) ? $_GET['slug'] : '';
if (empty($slug)) {
    header("Location: /blogs/");
    exit;
}

// Helper function to fetch URL contents using cURL or file_get_contents
function fetch_url($url) {
    if (function_exists('curl_init')) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $response = curl_exec($ch);
        curl_close($ch);
        return $response;
    } else {
        return @file_get_contents($url);
    }
}

// Fetch blog details from backend API
$apiUrl = "https://digitalsuccesssolutions.in/php_backend/api/read_single.php?slug=" . urlencode($slug) . "&t=" . time();
$response = fetch_url($apiUrl);

if ($response === false || empty($response)) {
    serve_404();
}

// Handle "Connected successfully" prefix if it exists
if (strpos($response, 'Connected successfully') !== false) {
    $response = trim(str_replace('Connected successfully', '', $response));
}

$blog = json_decode($response, true);
if (!$blog || !isset($blog['title'])) {
    serve_404();
}

// Find a template blog page to load
$templatePath = null;
$blogsDir = __DIR__ . '/blogs';
if (is_dir($blogsDir)) {
    $files = scandir($blogsDir);
    foreach ($files as $file) {
        if ($file === '.' || $file === '..') continue;
        $fullPath = $blogsDir . '/' . $file;
        if (is_dir($fullPath) && file_exists($fullPath . '/index.html')) {
            $templatePath = $fullPath . '/index.html';
            break;
        }
    }
}

if (!$templatePath || !file_exists($templatePath)) {
    // Fallback to root index.html if no blog template is found
    if (file_exists(__DIR__ . '/index.html')) {
        $templatePath = __DIR__ . '/index.html';
    } else {
        serve_404();
    }
}

$html = file_get_contents($templatePath);

// Replace SEO Meta Tags
$title = htmlspecialchars(isset($blog['meta_title']) && !empty($blog['meta_title']) ? $blog['meta_title'] : $blog['title']) . " | DSS";
$description = htmlspecialchars(isset($blog['meta_desc']) && !empty($blog['meta_desc']) ? $blog['meta_desc'] : "Read the latest digital marketing insights from Digital Success Solutions.");
$image = htmlspecialchars(isset($blog['image']) && !empty($blog['image']) ? $blog['image'] : "https://digitalsuccesssolutions.in/images/final-services.jpeg");
$canonical = "https://digitalsuccesssolutions.in/blogs/" . htmlspecialchars($slug) . "/";

// We will use regex to replace tags in the template html
// 1. Replace <title>...</title>
$html = preg_replace('/<title>.*?<\/title>/i', "<title>{$title}</title>", $html);

// 2. Replace meta description
if (preg_match('/<meta[^>]*name="description"[^>]*>/i', $html)) {
    $html = preg_replace('/(<meta[^>]*name="description"[^>]*content=")([^"]*)("[^>]*>)/i', "$1{$description}$3", $html);
} else {
    // If not found, insert before </head>
    $html = str_ireplace('</head>', '<meta name="description" content="' . $description . '" /></head>', $html);
}

// 3. Replace OpenGraph Tags
$html = preg_replace('/(<meta[^>]*property="og:title"[^>]*content=")([^"]*)("[^>]*>)/i', "$1" . htmlspecialchars($blog['title']) . "$3", $html);
$html = preg_replace('/(<meta[^>]*property="og:description"[^>]*content=")([^"]*)("[^>]*>)/i', "$1{$description}$3", $html);
$html = preg_replace('/(<meta[^>]*property="og:image"[^>]*content=")([^"]*)("[^>]*>)/i', "$1{$image}$3", $html);

// 4. Replace canonical link
if (preg_match('/<link[^>]*rel="canonical"[^>]*>/i', $html)) {
    $html = preg_replace('/(<link[^>]*rel="canonical"[^>]*href=")([^"]*)("[^>]*>)/i', "$1{$canonical}$3", $html);
} else {
    $html = str_ireplace('</head>', '<link rel="canonical" href="' . $canonical . '" /></head>', $html);
}

// Echo the modified HTML
echo $html;
exit;

function serve_404() {
    header("HTTP/1.1 404 Not Found");
    if (file_exists(__DIR__ . '/404/index.html')) {
        echo file_get_contents(__DIR__ . '/404/index.html');
    } else if (file_exists(__DIR__ . '/404.html')) {
        echo file_get_contents(__DIR__ . '/404.html');
    } else {
        echo "<h1>404 Blog Not Found</h1>";
    }
    exit;
}
?>
