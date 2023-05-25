<?php
// Getting data of the form
if ($_POST) {
    $nombre = $_POST['name'];
    $apellido = $_POST['surname'];
    $segundoApellido = $_POST['secondSurname'];
    $nombreUsuario = $_POST['accountName'];
    $email = $_POST['email'];
    $password = $_POST['password'];
}

//Validate data

// Validación de longitud de password
if (strlen($password) < 4 || strlen($password) > 8) {
    echo '<div class="alert alert-danger mt-4">La longitud de la contraseña debe ser entre 4 y 8 caracteres</div>';
} else {
    //DDBB connection
    $config = parse_ini_file('.env');
    $servername = $config['DB_HOST'];
    $username = $config['DB_USER'];
    $password = $config['DB_PASSWORD'];
    $dbname = $config['DB_NAME'];

    $connection = new mysqli($servername, $username, $password, $dbname);

    if ($connection->connect_error) {
        die("Connection failed:" . $connection->connect_error);
    }

    // Check if user already exists
    $sql = "SELECT * FROM Users WHERE Email='$email'";
    $result = mysqli_query($connection, $sql);
    if (mysqli_num_rows($result) > 0) {
        echo '<div class="alert alert-danger mt-4">El email ya está registrado</div>';
    } else {
        // Check if user already exists
        $sql = "SELECT * FROM Users WHERE AccountName='$nombreUsuario'";
        $result = mysqli_query($connection, $sql);

        if (mysqli_num_rows($result) > 0) {
            echo '<div class="alert alert-danger mt-4">El nombre de usuario ya está registrado</div>';
        } else {
            //Insert data
            $insert = "INSERT INTO Users (AccountName, Name, Surname, SecondSurname, Email, Password) VALUES ('$nombreUsuario','$nombre','$apellido','$segundoApellido','$email','$password')";

            mysqli_query($connection, $insert);

            // // Redirect to index.html 
            echo"Success";
        }
    }
    mysqli_close($connection);
}



?>