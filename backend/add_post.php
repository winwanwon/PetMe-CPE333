<?php
    require "config.php";
    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    var_dump($obj);

    $petname = $obj->PetName;
    $breed = $obj->Breed;
    $age = $obj->Age;
    $description = $obj->Description;
    $contact = $obj->Contact;
    $need = $obj->Need;
    $photo = $obj->Photo;
    
    if($petname&&$breed&&$age&&$description&&$contact&&$need&&$photo)
    mysqli_query($con, "INSERT INTO post (PetName,Breed,Age,Description,Contact,Need,Photo) VALUES ('$petname', '$breed',' $age', '$description', '$contact', '$need', '$photo')") or die(mysqli_error($con));



?>
