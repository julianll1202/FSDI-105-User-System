/*JavaScript vs JQuery*/

/*Select by ID*/
document.getElementById("userEmail"); //JS
$("#userEmail"); //JQuery

/*Select by tag*/
/*
let inputs = document.getElementsByTagName("input");
for(let i=0; i<inputs.length; i++) {
    inputs[i].style.display="none";
}
*/
$("input").hide(); //hide all the elements with the input tag


/*Select by class name*/
$(".input-container").remove();//Remove all the elements from the class
