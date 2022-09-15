function displayUsers(usersArray){
    //travel through the array
    for(let i=0; i<usersArray.length; i++){
        //get the user
        let userInfo=usersArray[i];
        console.log(userInfo);
        //creat an html row template
        let tmp = `
            <tr>
                <td>${userInfo.userName}</td>
                <td>${userInfo.userLastName}</td>
                <td>${userInfo.email}</td>
                <td>${userInfo.password}</td>
                <td>${userInfo.age}</td>
                <td>${userInfo.gender}</td>
                <td>${userInfo.phone}</td>
                <td>${userInfo.address}</td>
                <td>${userInfo.paymentMethod}</td>
                <td style="background-color:${userInfo.color};"></td>
            </tr>
        `;
        //append the row into the table
        $("#usersTable").append(tmp);
    }
    
}
function init(){
    console.log("Listing...");
    let users = readUsers();
    displayUsers(users);
}

window.onload = init;