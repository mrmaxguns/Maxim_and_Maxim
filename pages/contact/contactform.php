<?php

if (isset($_POST['submit'])) {
  $mail = $_POST['mail'];
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $mailTo = "mrmaxguns@gmail.com";
  $headers = "From: ".$mail;
  $txt = "New client! ".$name." has sent you a message\n\n".$message."\n\n"."Reply to: ".$mail;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: index.html?mailsend");
}

?>
