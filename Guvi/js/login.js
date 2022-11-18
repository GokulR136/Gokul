function lfun(){
    let uname=document.forms["myform"]["uname"].value;
    let upswd=document.forms["myform"]["upswd"].value;

    if(uname==null || uname==""){
        document.getElementById("errorBox").innerHTML="enter the user name!!!";
        return false;
    }

    if(upswd==null || upswd==""){
        document.getElementById("errorBox").innerHTML="enter the password!!!";
        return false;
    }

    if(uname!='' && uname!=''){
        alert("Login successful");
    }
}
$(document).ready(function(){
    $("#login").click(function(){
        $.ajax({
            method: "POST",
            url :"Guvi/php/login.php",
            data: $("myform1").serialize(),
            success: function(data){
                console.log(data);
            }
        })
    })
})
$(document).ready(function(){
    $("#login").click(function(){
        $.ajax({
            method: "POST",
            url :"/guvi/php/login.php",
            data: $("myform").serialize(),
            success: function(data){
                console.log(data);
            }
        })
    })
})