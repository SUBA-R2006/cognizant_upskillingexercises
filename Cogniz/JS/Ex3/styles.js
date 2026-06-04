const events = [

    {name:"Music Festival", seats:10},

    {name:"Sports Day", seats:0},

    {name:"Workshop", seats:15}

];

events.forEach(event => {

    if(event.seats > 0){

        console.log(event.name);

    }
    else{

        console.log(
            `${event.name} Full`
        );

    }

});

try{

    let seats = 0;

    if(seats <= 0){
        throw new Error(
            "No Seats Available"
        );
    }

}
catch(error){

    console.log(error.message);

}