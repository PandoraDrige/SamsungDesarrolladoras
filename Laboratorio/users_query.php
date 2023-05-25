<?php
//DDBB connection
$config = parse_ini_file('.env');
$servername = $config['DB_HOST'];
$username = $config['DB_USER'];
$password =$config['DB_PASSWORD'];
$dbname = $config['DB_NAME'];

$connection = new mysqli($servername, $username, $password, $dbname);

if($connection -> connect_error){
    die ("Connection failed:" . $connection-> connect_error);
}

// Obtener usuarios registrados
$sql = "SELECT * FROM Users";
$result = mysqli_query($connection, $sql);

if (mysqli_num_rows($result) > 0) {
    echo '<table class="table  mt-4">';
    echo '<thead><tr><th>Id</th><th>Nombre</th><th>Primer Apellido</th><th>Segundo Apellido</th><th>Nombre usuario </th><th>Email</th></tr></thead>';
    echo '<tbody>';
    while ($row = mysqli_fetch_assoc($result)) {
        echo '<tr><td>'.$row["Id"].'</td><td>'.$row["Name"].'</td><td>'.$row["Surname"].'</td><td>'.$row["SecondSurname"].'</td><td>'.$row["AccountName"].'</td><td>'.$row["Email"].'</td></tr>';
    }
    echo '</tbody>';
    echo '</table>';
} else {
    echo '<div class="alert alert-info mt-4">No hay usuarios registrados</div>';
}

mysqli_close($connection);
?>