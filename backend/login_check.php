<?php
    require "config.php";

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    var_dump($obj);

    $username = $obj->username;
    $password = sha1($obj->password);

    $query = mysqli_query($con, "SELECT * FROM user WHERE UserName='$username' AND Password='$password'");
    $result = mysqli_fetch_array($query, MYSQLI_ASSOC);
    if($result){
        echo "success";
    } else {
        echo "failed";
    }
    
?>