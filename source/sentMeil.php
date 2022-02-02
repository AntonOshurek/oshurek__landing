<?php



if (isset($_POST)) {

  print("<br>Email: " . $_POST['emeil']);
  print("<br>Сообщение: " . $_POST['title']);
  print("<br>Сообщение: " . $_POST['text']);

  $meil = $_POST['emeil'];

    $to = "<oshurekweb@gmail.com>" ; 

    $subject = $_POST['title']; 

    $message = $_POST['text'];

    $headers  = "Content-type: text/html; charset=windows-1251 \r\n"; 
    $headers .= "From: " . $meil; 
    $headers .= "Reply-To: reply-to@example.com\r\n"; 

    mail($to, $subject, $message, $headers); 
}

?>
