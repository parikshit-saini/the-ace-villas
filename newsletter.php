<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = htmlspecialchars($_POST['email']);

    // Your email address
    $to = 'booking@theacevillas.com';
    $subject = "Newsletter Form Received a Mail";

    $email_body = "
    You have received a new message from your Newsletter form:
    Email: $email
    ";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $email_body, $headers)) {
        // Respond with success message
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
    } else {
        // Respond with failure message
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Email failed to send']);
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>