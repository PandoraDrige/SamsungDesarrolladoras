<?php
// Getting data of the form
if ($_POST){
    $nombre = $_POST['name'];
    $apellidos = $_POST['surname'];
    $email = $_POST['email'];
}

//DDBB connection
$config = parse_ini_file('.env');
$servername = $config['DB_HOST'];
$username = $config['DB_USER'];
$password =$config['DB_PASSWORD'];
$dbname = $config['DB_NAME'];

$connection = new mysqli($servername, $username, $password, $dbname);

if($connection -> connect_error){
    die ("Connection failed:" . $conn-> connect_error);
}
try{
    //Insert data
    $insert = "INSERT INTO empleados VALUES ('$nombre','$apellidos','$email')";
    
    $connection->query($insert);
    
    $connection->close();
    
    // Redirect to success.html 
    header("Location: success.html");
    exit;

}catch (Exception $e){
    // Redirect to index.html 
    header("Location: index.html");
}


?>