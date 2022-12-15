<?php

$host = "localhost";
$username = "root";
$password = "";
$database = "eventdb";
$table = "messages";

//Connect to Database
$dbc = mysqli_connect($host, $username, $password, $database, 8080)
    or die("Unable to connect!");

if (!$dbc) {
    error_log('Connection error: ' . mysqli_connect_error());
}

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

if(empty($name)){
    echo '<script> alert("Whats your name?") </script>';
    die;
}
else if(empty($email)){
    echo '<script> alert("Your email please!") </script>';
    die;
}
else if(empty($subject)){
    echo '<script> alert("Subject must be filled out!") </script>';
    die;
}
else if(empty($message)){
    echo '<script> alert("You have to write something, right?") </script>';
    die;
}
else{
    $query = "INSERT INTO $table (name , email , subject , message ) 
    VALUES ('$name' , '$email' , '$subject' , '$message' )";
    mysqli_query($dbc, $query)
        or die("Error inserting email" . mysqli_error($dbc));
    echo ("Your message has been successfully sent!");
}

?>