class Event{

    constructor(
        name,
        category,
        seats
    ){

        this.name = name;
        this.category = category;
        this.seats = seats;

    }

}

Event.prototype
.checkAvailability =
function(){

    return this.seats > 0;

};

const event1 =
new Event(
"Music Festival",
"Music",
10
);

console.log(
event1.checkAvailability()
);

console.log(
Object.entries(event1)
);