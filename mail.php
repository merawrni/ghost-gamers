<?php

    $to = $_REQUEST["email"];
    $subject = 'Gracias por tu compra';
    $message = 'Hola, gracias por comprar en nuestra tienda, deberas realizar tu pago al número de cuenta: \n 7186 6062 02 9450518609 en Banamex.';
    $headers = 'From: ventas@ghostgamers.com' . "\r\n" .
        'Reply-To: ventas@ghostgamers.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    mail($to, $subject, $message, $headers);

    $response = [ 'status' => "OK", 'mensaje' => "Mensaje enviado satisfactoriamente" ];
    header('Content-type: application/json');
    echo json_encode( $response );
?>
