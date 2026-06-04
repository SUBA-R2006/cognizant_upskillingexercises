let seats = 10;

const event = {

    name:"Music Festival",

    category:"Music"

};

function register(
name="Guest"
){

    console.log(name);

}

const {

    name,

    category

} = event;

console.log(
name,
category
);

const events = [

    "Music",

    "Sports"

];

const clonedEvents =

[...events];

console.log(
clonedEvents
);