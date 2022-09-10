
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
//get the values from the inputs

function register(){
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

    //clear inputs
    $("input").val("");
}
function init(){
    //hook event
}