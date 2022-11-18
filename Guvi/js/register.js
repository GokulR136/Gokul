function rfun(){
    let uname1=document.forms["myform2"]["uname1"].value;
    let email1=document.forms["myform2"]["email1"].value;
    let mob1=document.forms["myform2"]["mob1"].value;
    let gen1=document.forms["myform2"]["gen1"].value;
    let date1=document.forms["myform2"]["date1"].value;
    let upswd1=document.forms["myform2"]["upswd1"].value;
    let upswd2=document.forms["myform2"]["upswd2"].value;

    if(uname1==null || uname1==""){
        document.getElementById("errorBox").innerHTML="enter the username!";
        return false;
    }

    if(email1==null || email1==""){
        document.getElementById("errorBox").innerHTML="enter the email!";
        return false;
    }
    
    if(mob1==null || mob1==""){
        document.getElementById("errorBox").innerHTML="enter the mobile number!";
        return false;
    }

    if(gen1==null || gen1==""){
        document.getElementById("errorBox").innerHTML="enter the gender!";
        return false;
    }
    
    if(date1==null || date1==""){
        document.getElementById("errorBox").innerHTML="enter the date of birth!";
        return false;
    }

    if(upswd1==null || upswd1==""){
        document.getElementById("errorBox").innerHTML="enter the password!";
        return false;
    }

    if(upswd2==null || upswd2==""){
        document.getElementById("errorBox").innerHTML="enter the confirm password!";
        return false;
    }

    if(upswd1!=upswd2){
        document.getElementById("errorBox").innerHTML="password doesn't match!";
        return false;
    }
    if(uname1!='' && upswd1!='' && upswd2!='' && email1!='' && mob1!='' && date1!='' && gen1!=''){
        alert("Registration successful");
    }
}
$(document).ready(function(){
    $("#register").click(function(){
        $.ajax({
            method: "POST",
            url :"/guvi/php/register.php",
            data: $("myform2").serialize(),
            success: function(data){
                console.log(data);
            }
        })
    })
})
