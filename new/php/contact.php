<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$email = $_POST["email"];

if(isset($email)) {
  $email = stripcslashes($email);
  $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
  try {
    $mail->isSendMail();

    //Recipients
    $mail->setFrom(''.$email, 'Intrested Website Visitors');
    $mail->addAddress('jbnetgroup@outlook.com');

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'From Website';
    $mail->Body    = 'The visitor with email: <b>  ' . $email . ' showed intrest </b>';
    $mail->AltBody = 'Intrested visitor';

    $mail->send();
    echo '200';
  } catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
  }
}
?>
