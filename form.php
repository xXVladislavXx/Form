<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $password = $_POST['password'];
    $city = $_POST['city'];
    

    $to = $email;
    $subject = 'Form Submission';
    $message = "Hello $name,\n\nThank you for submitting the form!\n";
    $message .= "Your information:\n";
    $message .= "Name: ".$name."\n";
    $message .= "Email: ".$email."\n";
    $message .= "Phone: ".$tel."\n";
    $message .= "Password: ".$password."\n";
    $message .= "City: ".$city."\n";
    $headers = 'From: sergatyijvlad1999@gmail.com'; 

    if (mail($to, $subject, $message, $headers)) {
        echo 'Form submitted successfully. Email sent to '.$email.'.';
    } else {
        echo 'Failed to send email.';
    }
} else {
    echo 'Invalid request method.';
}
?>
