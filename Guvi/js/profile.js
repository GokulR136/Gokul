function pfun(){
    let uname1=document.forms["myform2"]["uname1"].value;
    let email1=document.forms["myform2"]["email1"].value;
    let mob1=document.forms["myform2"]["mob1"].value;
    let gen1=document.forms["myform2"]["gen1"].value;
    let date1=document.forms["myform2"]["date1"].value;
    let upswd1=document.forms["myform2"]["upswd1"].value;
    let upswd2=document.forms["myform2"]["upswd2"].value;

    if(uname1=='' && upswd1=='' && upswd2=='' && email1=='' && mob1=='' && date1=='' && gen1==''){
        alert("Profile page not found");
    }
}
$(document).ready(function(){
    $("#profile").click(function(){
        $.ajax({
            method: "POST",
            url :"/guvi/php/profile.php",
            data: $("profileform").serialize(),
            success: function(data){
                console.log(data);
            }
        })
    })
})
