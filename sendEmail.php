<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = htmlspecialchars(trim($_POST["full_name"]));
    $phone = htmlspecialchars(trim($_POST["phone"]));
    $email_address = htmlspecialchars(trim($_POST["email_address"]));
    $msg = htmlspecialchars(trim($_POST["msg"]));

    $to = "bhadouriarudra665@gmail.com";  // Replace with your email address
    $subject = "New Contact Form Submission";
    $message = "Name: $full_name\nPhone: $phone\nEmail: $email_address\nMessage: $msg";
    $headers = "From: $email_address";

    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request method.";
}
?>