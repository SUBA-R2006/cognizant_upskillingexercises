document
.getElementById(
"registrationForm"
)

.addEventListener(

"submit",

function(event){

event.preventDefault();

const form =
this.elements;

const name =
form["name"].value;

const email =
form["email"].value;

if(
name === "" ||
email === ""
){

document
.getElementById(
"outputMsg"
)
.value =
"Fill all fields";

return;

}

document
.getElementById(
"outputMsg"
)
.value =
"Registration Successful";

}

);