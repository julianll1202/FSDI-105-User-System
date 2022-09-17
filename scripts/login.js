function login(){
    console.log("Logging in...");
    //get values from inputs
    let nameInput = $("#userName");
    let passwordInput = $("#userPassword");
    let userName = nameInput.val();
    let userPassword = passwordInput.val();

    //use a flag
    let flag=false;
    //get users from localStorage
    let users = readUsers();
    //compare credentials
    for(let i = 0; i < users.length; i++) {
        let userInfo=users[i];
        //if correct, redirect to users table
        if(userName == userInfo.email && userPassword == userInfo.password){
           flag=true;
           window.location="users.html";
           
        }else{
            
            flag=false;
        }
    }
    //if not, display error message
    if(!flag){
        $("#alert-error").removeClass("hide");
        $("#alert-error").text("Invalid credentials");
        setTimeout(function(){
            $("#alert-error").addClass("hide");
        }, 3000);
    }
}

function init(){
    $("#loginBtn").on("click",login);
}

window.onload=init;