<?php
    require "config.php";
    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    var_dump($obj);

    // Parameter
    $username = $obj->username;
    $password = sha1($obj->password);
    $password_con = sha1($obj->password_con);
    $email = $obj->email;
    $firstname = $obj->firstname;
    $lastname = $obj->lastname;
    $displayname = $obj->displayname;
    $dob = $obj->dob;
    $sex = $obj->sex;
    $likedogcat = $obj->likedogcat;

    // SQL
    if($password == $password_con){
        mysqli_query($con, "INSERT INTO user (UserName,Password,FirstName,LastName,DisplayName,Sex,DateOfBirth,Email,LikeDogCat) VALUES ('$username', '$password','$firstname', '$lastname',' $displayname', '$sex', '$dob', '$email', '$likedogcat')") or die(mysqli_error($con));
    }
    
    
?>