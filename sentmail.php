<?php  
 
if(isset($_POST['submit'])) {
 $mailto = "ogunledunoluwatobi@gmail.com";  //My email address
 //getting customer data
 $name = $_POST['name']; //getting customer name
 $subject = $_POST['subject']; //getting subject line from client

 
 //Email body I will receive
 $message = "Client Name: " . $name . "\n"
 . "Client Message: " . "\n" . $_POST['message'];
 
 
 //Email headers
 $headers = "From: " . $fromEmail; // Client email, I will receive
 
 //PHP mailer function
 
  $result1 = mail($mailto, $subject, $message, $headers); // This email sent to My address
 
  //Checking if Mails sent successfully
 
  if ($result1 && $result2) {
    $success = "Your Message was sent Successfully!";
  } else {
    $failed = "Sorry! Message was not sent, Try again Later.";
  }
 
}
 
?>
