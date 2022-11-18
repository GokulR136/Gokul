<?php

$uname=$_POST['uname'];
$upswd=$_POST['upswd'];

if(!empty($uname) || !empty($upswd) )
{
    $host="localhost";
    $dbusername="root";
    $dbpassword="";
    $dbname="project";

    $conn=new mysqli ($host, $dbusername,$dbpassword, $dbname);
    if(mysqli_connect_error()){
        die('Connection Error('.mysqli_connect_errno().')'.mysqli_connect_error());
    }
    else{
        $INSERT="INSERT Into login(uname,upswd)values(?,?)";

        $stmt=$conn->prepare($INSERT);
        $stmt->bind_param("ss",$uname,$upswd);
        $stmt->execute();
        $stmt->close();
    }
}
else{
    echo"All field are required";
    die();
}
?>