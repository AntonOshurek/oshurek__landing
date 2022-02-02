<?php

  if (isset((object) $_REQUEST)) {
    $req = (object) $_REQUEST;

    print json_encode([
      'title'    => strtoupper($req->title),
      'text' => strtoupper($req->text),
      'emeil' => strtoupper($req->emeil)
    ]);

    $to = "<oshurekweb@gmail.com>" ;

    $subject = strtoupper($req->title);

    $message = strtoupper($req->title);

    $headers  = "Content-type: text/html; charset=windows-1251 \r\n";
    $headers .= "From: " . strtoupper($req->emeil);
    $headers .= "Reply-To: reply-to@example.com\r\n";

    mail($to, $subject, $message, $headers);
  }

?>
