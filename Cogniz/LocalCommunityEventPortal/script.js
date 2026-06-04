console.log("Welcome to the Community Portal");

window.onload = () => {
    alert("Page Loaded Successfully");
};

/* Event Data */

class Event {

    constructor(name, category, seats) {
        this.name = name;
        this.category = category;
        this.seats = seats;
    }

}

Event.prototype.checkAvailability = function () {
    return this.seats > 0;
};

const events = [

    new Event("Music Festival", "Music", 10),
    new Event("Sports Day", "Sports", 0),
    new Event("Workshop", "Education", 15)

];

/* Array Methods */

events.push(
    new Event("Baking Workshop", "Education", 20)
);

const musicEvents =
    events.filter(event =>
        event.category === "Music"
    );

console.log(musicEvents);

const formatted =
    events.map(event =>
        `Workshop on ${event.name}`
    );

console.log(formatted);

/* Display Events */

const container =
    document.querySelector("#eventContainer");

function renderEvents(list) {

    container.innerHTML = "";

    list.forEach(event => {

        if(event.seats <= 0){
            return;
        }

        const card =
            document.createElement("div");

        card.className =
            "eventCard";

        card.innerHTML = `
            <h3>${event.name}</h3>
            <p>Category: ${event.category}</p>
            <p>Seats: ${event.seats}</p>
            <button onclick="registerUser('${event.name}')">
                Register
            </button>
        `;

        container.appendChild(card);

    });

}

renderEvents(events);

/* Registration */

function registerUser(eventName){

    try{

        const event =
            events.find(
                e => e.name === eventName
            );

        if(!event.checkAvailability()){
            throw new Error("No Seats Available");
        }

        event.seats--;

        renderEvents(events);

        alert(
            `Registered for ${eventName}`
        );

    }
    catch(error){

        alert(error.message);

    }

}

/* Form */

document
.getElementById("registrationForm")
.addEventListener("submit",
function(e){

    e.preventDefault();

    document.getElementById("outputMsg")
    .value =
    "Registration Successful";

});

/* Phone Validation */

function validatePhone(){

    const phone =
    document.getElementById("phone").value;

    if(phone.length !== 10){
        alert("Invalid Phone Number");
    }

}

/* Fee Display */

function showFee(){

    const type =
    document.getElementById("eventType").value;

    let fee = 0;

    if(type === "Music")
        fee = 100;

    else if(type === "Sports")
        fee = 200;

    else if(type === "Workshop")
        fee = 150;

    document.getElementById("feeDisplay")
    .innerText =
    "Fee : ₹" + fee;

    localStorage.setItem(
        "preferredEvent",
        type
    );

}

/* Retrieve Storage */

window.addEventListener("load",()=>{

    const saved =
    localStorage.getItem(
        "preferredEvent"
    );

    if(saved){
        document.getElementById("eventType")
        .value = saved;
    }

});

/* Clear Storage */

function clearStorage(){

    localStorage.clear();
    sessionStorage.clear();

    alert(
        "Preferences Cleared"
    );

}

/* Confirmation */

function confirmRegistration(){

    alert(
        "Form Submitted Successfully"
    );

}

/* Character Count */

document
.getElementById("feedback")
.addEventListener(
"keyup",
function(){

document.getElementById("charCount")
.innerText =
this.value.length;

});

/* Double Click Image */

document
.querySelectorAll(".galleryImg")
.forEach(img=>{

img.ondblclick = ()=>{

img.style.width = "300px";

};

});

/* Video */

function videoReady(){

document.getElementById("videoMsg")
.innerText =
"Video ready to play";

}

/* Before Unload */

window.onbeforeunload =
function(){

return "Unsaved changes may be lost";

};

/* Geolocation */

function findLocation(){

const options = {

enableHighAccuracy:true,
timeout:5000

};

navigator.geolocation
.getCurrentPosition(

position => {

document.getElementById("location")
.innerText =
`Latitude :
${position.coords.latitude}

Longitude :
${position.coords.longitude}`;

},

error => {

alert(error.message);

},

options

);

}

/* Search */

document
.getElementById("searchBox")
.addEventListener(
"keydown",
function(){

const keyword =
this.value.toLowerCase();

const filtered =
events.filter(event =>
event.name.toLowerCase()
.includes(keyword)
);

renderEvents(filtered);

});

/* Filter */

document
.getElementById("filterCategory")
.onchange =
function(){

const category =
this.value;

if(category==="All"){

renderEvents(events);

}
else{

const filtered =
events.filter(event =>
event.category===category
);

renderEvents(filtered);

}

};

/* Fetch API */

fetch(
"https://jsonplaceholder.typicode.com/posts"
)
.then(response =>
response.json()
)
.then(data =>
console.log(data)
)
.catch(error =>
console.log(error)
);

/* Async Await */

async function loadEvents(){

try{

console.log(
"Loading..."
);

const response =
await fetch(
"https://jsonplaceholder.typicode.com/posts"
);

const data =
await response.json();

console.log(data);

}
catch(error){

console.log(error);

}

}

loadEvents();

/* Object Entries */

events.forEach(event=>{

console.log(
Object.entries(event)
);

});

/* jQuery */

$("#registerBtn").click(function(){

$(".eventCard").fadeOut()
.fadeIn();

});

/* Framework Benefit */

console.log(
"React/Vue provide reusable components and better state management."
);