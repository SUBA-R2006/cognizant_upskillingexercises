function addEvent(name){

    console.log(
        `${name} Added`
    );

}

function registerUser(name){

    console.log(
        `${name} Registered`
    );

}

function filterEventsByCategory(
    events,
    callback
){

    return events.filter(callback);

}

function registrationCounter(){

    let total = 0;

    return function(){

        total++;

        return total;

    };

}

const count =
registrationCounter();

console.log(count());

console.log(count());

const events = [

    {category:"Music"},

    {category:"Sports"}

];

const result =
filterEventsByCategory(

events,

event =>
event.category==="Music"

);

console.log(result);