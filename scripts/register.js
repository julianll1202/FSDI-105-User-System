
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
    //checks if any property of the object is empty
    if(aUser.userName == "" || aUser.userLastName=="" || aUser.email == ""|| aUser.password== ""|| aUser.gender==""||aUser.age == ""|| aUser.address==""|| aUser.phone==""|| aUser.color==""|| aUser.paymentMethod==""){
        //if it is, alert the user
        alert("Please fill out all the form");
        return false;
    }else{
        return true;
    }
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
        //clear inputs
        $("input").val("");
    }
    //clear inputs
    
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
}

window.onload=init;