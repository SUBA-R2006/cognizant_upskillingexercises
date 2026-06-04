const container =
document.querySelector(
"#eventContainer"
);

const card =
document.createElement(
"div"
);

card.className =
"eventCard";

card.innerHTML = `

<h3>Music Festival</h3>

<p>Seats Available</p>

`;

container.appendChild(
card
);

function updateUI(){

    card.innerHTML =

    "<h3>Registered</h3>";

}