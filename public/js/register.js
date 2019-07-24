$("button").click(function(){
    const user ={
        name: $("#name").val(),
        password: $("#password").val()
    }

    console.log(user.name, user.name.indexOf("@"))

    if(user.name.indexOf("@") >= 0 && user.password.length >= 8){
        $.post("./api/newUser", user).then(function(){
            console.log("Success");
            $("#name").val("");
            $("#password").val("")
        })
    } if(user.name.indexOf("@") >= 0 && user.password.length < 8){
        alert("Password must be over 8 character");
        $("#name").val("");
        $("#password").val("")
    } else{
        alert("Please enter a valid E-mail address");
        $("#name").val("");
        $("#password").val("")
    }
    
    
})