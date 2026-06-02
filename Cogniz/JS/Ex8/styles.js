document
.getElementById(
"registerBtn"
)
.onclick =
function(){

alert(
"Registered Successfully"
);

};

document
.getElementById(
"filterCategory"
)
.onchange =
function(){

console.log(
this.value
);

};

document
.getElementById(
"searchBox"
)
.addEventListener(

"keydown",

function(){

console.log(
this.value
);

}

);