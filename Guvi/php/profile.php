<?php
session_start();
$uname1=$_POST['uname1'];
$email1=$_POST['email1'];
$mob1=$_POST['mob1'];
$gen1=$_POST['gen1'];
$date1=$_POST['date1'];
$upswd1=$_POST['upswd1'];
$upswd2=$_POST['upswd2'];
if(!isset($_SESSION["uname1"])&&!isset($_SESSION["upswd1"])){
    header("Locationn:login.php")
}
 echo"Username        :  "$_SESSION['uname1'];
 echo"Email-id        :  "$_SESSION['uname1'];
 echo"Mobile number   :  "$_SESSION['uname1'];
 echo"Gender          :  "$_SESSION['uname1'];
 echo"Date of Birth   :  "$_SESSION['uname1'];

if(session_destroy(){
    header("Location:login.php");
})
?>
