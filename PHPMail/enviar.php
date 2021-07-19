<?php


require("class.phpmailer.php");
require("class.smtp.php");


// Valores enviados desde el formulario
if ( !isset($_POST["nombre"]) || !isset($_POST["email"]) || !isset($_POST["telefono"]) || !isset($_POST["mensaje"]) ) {
    echo "Es necesario completar todos los datos del formulario";
}

if($_POST["nombre"]==""){
    echo "ingresa el nombre";
}




$nombre = $_POST["nombre"];
$email = $_POST["email"];
$telefono = $_POST["telefono"];

// $asunto = $_POST["asunto"];
$mensaje = $_POST["mensaje"];

$destino = "sistemas@constructoreslogar.com";


// Datos de la cuenta de correo utilizada para enviar via SMTP
$smtpHost = "mail.constructoreslogar.com";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario = "sistemas@constructoreslogar.com";  // Mi cuenta de correo
$smtpClave = "Master_1869";  // Mi contrasena




$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 587; 
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";

// VALORES A MODIFICAR //
$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;


$mail->From = $email; // Email desde donde env�o el correo.
$mail->FromName = $nombre;
$mail->AddAddress($destino); // Esta es la direcci�n a donde enviamos los datos del formulario

$mail->Subject = "Formulario desde el Sitio Web"; // Este es el titulo del email.
$mensajeHtml = nl2br($mensaje);
$mail->Body = "
<html> 

<body> 

<h1>Recibiste un nuevo mensaje desde el formulario de contacto</h1>

<p>Informacion enviada por el usuario de la web:</p>

<p>nombre: {$nombre}</p>

<p>email: {$email}</p>

<p>telefono: {$telefono}</p>



<p>mensaje: {$mensaje}</p>

</body> 

</html>

<br />"; // Texto del email en formato HTML
$mail->AltBody = "{$mensaje} \n\n "; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

$estadoEnvio = $mail->Send(); 
if($estadoEnvio){
    
    header("Location:https://www.constructoreslogar.com/");
} else {
    echo "Ocurrio un error inesperado.";
}







?>

