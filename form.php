

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $password = filter_var($_POST['password'], FILTER_SANITIZE_STRING);

    // Perform validation
    if (filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($password)) {
        // Success: Display the validated data
        echo "<h1>Form Submitted Successfully</h1>";
        echo "<p>Email: " . htmlspecialchars($email) . "</p>";
        echo "<p>Password: " . htmlspecialchars($password) . "</p>";
    } else {
        // Error: Invalid input
        echo "<



