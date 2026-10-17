<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $startDate = htmlspecialchars($_POST['startDate']);
    $endDate = htmlspecialchars($_POST['endDate']);
    $villa = htmlspecialchars($_POST['villa']);
    $message = htmlspecialchars($_POST['message']);

    // Your email address
    $to = 'booking@theacevillas.com';
    $subject = "Contact Form Submission by $name";

    $email_body = "
    You have received a new message from your contact form:

    Name: $name
    Email: $email
    Phone: $phone
    Start Date: $startDate
    End Date: $endDate
    Villa: $villa
    Message: $message
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