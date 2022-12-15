<?php

$host = "localhost";
$username = "root";
$password = "";
$database = "eventdb";
$table = "users";

//Connect to Database
$dbc = mysqli_connect($host, $username, $password, $database, 8080)
    or die("Unable to connect!");

if (!$dbc) {
    error_log('Connection error: ' . mysqli_connect_error());
}

$user_name = $_POST['username'];
$full_name = $_POST['fullname'];
$email = $_POST['email'];

$query = "SELECT email FROM $table WHERE email='$email'";
$result = $dbc->query($query);

if(empty($user_name) || empty($email) || empty($full_name)){
    echo '<script> alert("Fields cannot be empty") </script>';
    die;
}
else if ($result->num_rows > 0 ){
    echo 'This email has been already subscribed';
}
else{
    $query = "INSERT INTO $table (username, fullname, email) VALUES ('$user_name' , '$full_name' , '$email')";

    mysqli_query($dbc, $query)
        or die("Error inserting email" . mysqli_error($dbc));

    echo ("You have been successfully subscribed");
}

?>