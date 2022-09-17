
//object constructor
function User(userName, userLastName, email, password, gender, age, address, phone, color, paymentMethod){
    this.userName = userName;
    this.userLastName = userLastName;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.age = age;
    this.address = address;
    this.phone = phone;
    this.color = color;
    this.paymentMethod = paymentMethod;

}

function isValid(aUser){
    let valid=true;
    $("input").removeClass("input-error");

    //checks if any property of the object is empty
    if(aUser.email == ""){
        //if it is, alert the user
        valid=false;
        displayError("Please enter an email");
        $("#userEmail").addClass("input-error");
    }
    if(aUser.userName == ""){
        //if it is, alert the user
        valid=false;
        displayError("Please enter a name");
        $("#userName").addClass("input-error");
    }
    if(aUser.password.length==0){
        //if it is, alert the user
        valid=false;
        displayError("Please enter a password");
        $("#userPassword").addClass("input-error");
    }
    if(aUser.phone == ""){
        //if it is, alert the user
        valid=false;
        displayError("Please enter a phone number");
        $("#userPhone").addClass("input-error");
    }

    return valid
}

function register(){
    //get the values from the inputs
    let txtName = $("#userName").val();
    let txtLastName = $("#userLastName").val();
    let txtEmail = $("#userEmail").val();
    let txtPassword = $("#userPassword").val();
    let txtAge = $("#userAge").val();
    let txtGender = $("#userGender").val();
    let txtAddress = $("#userAddress").val();
    let txtColor = $("#userColor").val();
    let txtPhone = $("#userPhone").val();
    let txtPayment = $("#userPayment").val();

    
    //create object User
    let newUser = new User(txtName, txtLastName, txtEmail,txtPassword,txtGender,txtAge,txtAddress, txtPhone, txtColor, txtPayment);
    console.log(newUser);

    //validate the user
    if(isValid(newUser)){
        //store the user
        saveUser(newUser);
        //hide error notification
        hideError();
        //clear inputs
        $("input").val("");
    }
    //clear inputs
    
}

function validatePass(){
    displayError("Validating ...");
    let inputPass=$("#userPassword"); //gets the input from #userPassword
    let password=inputPass.val(); // gets the value

    //checks the length of the password
    if(password.length < 6){
        inputPass.css("background-color","#ff9898");
        displayError("Password is too short");
    }else{
        displayError("Password is long enough");
        inputPass.css("background-color","#98ff9a");
        hideError();
    }
}

function hideError(){
    $("#alert-error").addClass("hide");
}

function displayError(msg){
    //displays the alert 
    $("#alert-error").removeClass("hide");
   $("#alert-error").text(msg); 
}

function init(){
    //hook event
    $("#btnSave").on("click", register);
    $("h1").on("click", function(){
        $("nav").hide();
    });
    $(".form-container").hide();
    $("#show-btn").on("click", function(){
        $(".form-container").slideDown(500);
    })

    $("#close-btn").on("click", function(){
        $(".form-container").slideUp(500);
    });

    $("#userPassword").keyup(validatePass);
}

window.onload=init;