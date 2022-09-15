const KEY = "user";
function saveUser(newUser){
    let oldData=readUsers(); //returns the users array
    oldData.push(newUser); //adds the new user to the last position
    let val=JSON.stringify(oldData); //converts the object to a string
    console.log(val); //prints the sring
    localStorage.setItem(KEY,val); //stores the user in string format in localStorage
}

function readUsers(){
    //get values from localStorage
    let data=localStorage.getItem(KEY);
    console.log(data);
    if(!data){//is it not data?
        //create an empty array
        return [];
    }else{  //if it is data
        let list=JSON.parse(data)//retun the string to object
        return list;
    }
  
}