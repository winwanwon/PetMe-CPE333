<?php
    require "config.php";
   
    $query = mysqli_query($con, "SELECT * FROM post") or die(mysqli_error($con));
    $arr = array();
    while($result = mysqli_fetch_array($query, MYSQLI_ASSOC)){
        array_push($arr, $result);
    }
    echo json_encode($arr);
?>
