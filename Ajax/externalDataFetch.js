//API is implemented in website 
//APIs are language independent
 
document.getElementById("get_jokes").addEventListener("click",loadjokes);

function loadjokes(){
  let xhr = new XMLHttpRequest();
  xhr.open("Get","https://api.chucknorris.io/jokes/random",true)
 
  xhr.onload = function(){
    if(this.status ===200 ){
      console.log(this.responseText); //get data
      
      let jsonobj = JSON.parse(this.responseText); //convert to jason obj
      console.log (jsonobj);

      console.log(jsonobj.value); //value of json obj

      //document.write(jsonobj.value);
      document.getElementById("output").innerHTML = jsonobj.value;
    }

  }
  xhr.send();
}