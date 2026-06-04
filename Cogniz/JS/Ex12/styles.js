const userData = {

    name:"Suba",

    email:"suba@gmail.com"

};

setTimeout(()=>{

fetch(
"https://jsonplaceholder.typicode.com/posts",

{

method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:JSON.stringify(
userData
)

}

)

.then(response =>
response.json()
)

.then(data =>

console.log(
"Success",
data
)

)

.catch(error =>

console.log(
"Failure",
error
)

);

},2000);