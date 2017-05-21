<?php
    require "config.php";
    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    var_dump($obj);

    $PostID = $obj->PostID;
    $TitleName = $obj->TitleName;
    $DateOfCreation = $obj->DateOfCreation;
    $Type = $obj->Type;
    $Content = $obj->Content;
    $Latitude = $obj->Latitude;
    $Longitude = $obj->Longitude;
    $Status = $obj->Status;
    $OwnerPost = $obj->OwnerPost;


    if($password == $password_con){
        mysqli_query($con, "INSERT INTO post (PostID,TitleName,DateOfCreation,Type,Content,Latitude,Longitude,Status,OwnerPost) VALUES ('
        $PostID', '$TitleName','$DateOfCreation', '$Type',' $Content', '$Latitude', '$Longitude', '$Status', '$OwnerPost')") or die(mysqli_error($con));
    }


?>
