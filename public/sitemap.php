<?php
header("Content-Type: application/xml; charset=utf-8");

$baseUrl = 'https://digitalsuccesssolutions.in';

$routes = [
    ['url' => '', 'priority' => 1.0],
    ['url' => '/about-us', 'priority' => 0.8],
    ['url' => '/contact-us', 'priority' => 0.8],
    ['url' => '/lets-connect', 'priority' => 0.8],
    ['url' => '/portfoliopage', 'priority' => 0.8],
    ['url' => '/blogs', 'priority' => 0.8],
    ['url' => '/website-development-company-in-india', 'priority' => 0.9],
    ['url' => '/ecommerce-development-company-in-indore', 'priority' => 0.9],
    ['url' => '/graphic-designing-services-in-indore', 'priority' => 0.9],
    ['url' => '/performance-marketing-agency-in-indore', 'priority' => 0.9],
    ['url' => '/social-media-marketing-company-in-indore', 'priority' => 0.9],
    ['url' => '/seo-company-in-indore', 'priority' => 0.9],
    ['url' => '/influencer-marketing-agency-in-indore', 'priority' => 0.9],
    ['url' => '/privacy-policy', 'priority' => 0.5],
    ['url' => '/terms-and-conditions', 'priority' => 0.5],
];

echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";

foreach ($routes as $route) {
    $slash = ($route['url'] === '') ? '' : '/';
    echo "  <url>\n";
    echo "    <loc>" . $baseUrl . $route['url'] . $slash . "</loc>\n";
    echo "    <lastmod>" . date('Y-m-d') . "</lastmod>\n";
    echo "    <changefreq>weekly</changefreq>\n";
    echo "    <priority>" . $route['priority'] . "</priority>\n";
    echo "  </url>\n";
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

// Fetch dynamic blogs
$apiUrl = "https://digitalsuccesssolutions.in/php_backend/api/read.php?t=" . time();
$response = fetch_url($apiUrl);

if ($response !== false && !empty($response)) {
    // Handle "Connected successfully" prefix if it exists
    if (strpos($response, 'Connected successfully') !== false) {
        $response = trim(str_replace('Connected successfully', '', $response));
    }
    
    $blogs = json_decode($response, true);
    if (is_array($blogs)) {
        foreach ($blogs as $blog) {
            $slug = isset($blog['slug']) && !empty($blog['slug']) ? $blog['slug'] : null;
            if (!$slug && isset($blog['title'])) {
                $slug = strtolower(preg_replace('/[^a-z0-9]+/i', '-', $blog['title']));
                $slug = trim($slug, '-');
            }
            if ($slug) {
                $date = isset($blog['createdAt']) ? date('Y-m-d', strtotime($blog['createdAt'])) : date('Y-m-d');
                echo "  <url>\n";
                echo "    <loc>" . $baseUrl . "/blogs/" . $slug . "/</loc>\n";
                echo "    <lastmod>" . $date . "</lastmod>\n";
                echo "    <changefreq>weekly</changefreq>\n";
                echo "    <priority>0.7</priority>\n";
                echo "  </url>\n";
            }
        }
    }
}

echo '</urlset>';
?>
