// Fetch Api uses javascript promise'

document.getElementById("get_data");
addEventListener("click",getData);
// function getData(){
//   console.log("Button clicked")
// }

//call fetch api
function getData(){
  fetch("https://api.chucknorris.io/jokes/random")
  //fetch returns a promise so use .then
 
  // .then(function(response){
  //   // console.log(response); //various info from server to work with
  //   console.log(response.json()); //we work with json info
  // })
  // .then(function(data){
  //   console.log(data);
  // })
  // .catch(function(err){
  //   console.log(err);
  // })

  //Arrow function syntax : let test = (parameter1 => {function body});
  .then (response => response.json())
  .then (data => {console.log(data)})
  .then (err =>{console.log(err);})
}

