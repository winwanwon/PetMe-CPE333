<?php 
include "config.php";
$username = $_POST["username"];
$password = sha1($_POST["password"]);
$query = mysqli_query($con, "SELECT * FROM user WHERE username='$username' AND password='$password");
$result = mysqli_fetch_array($query, MYSQLI_ASSOC);
if($result){
    echo "1";
} else {
    echo "0";
}

?>