const events = [];

events.push({

    name:"Music Festival",
    category:"Music"

});

events.push({

    name:"Baking",
    category:"Education"

});

const musicEvents =
events.filter(

event =>
event.category==="Music"

);

console.log(musicEvents);

const formatted =
events.map(

event =>
`Workshop on ${event.name}`

);

console.log(formatted);