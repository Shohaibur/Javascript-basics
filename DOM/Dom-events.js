//Events of javascript
// there are many events according to needs

//Onclick 
function message(){
  console.log("Mouse over button");  //print Mouse over button each time in console
}

//Using Eventlistener
document.getElementById("sample-btn").addEventListener('click',messagefunc) ; //('nameOfEvent',functionName without parenthesis)
function messagefunc(){ 
  console.log("Button clicked"); //Button clicked output in console every time clicked
}

// Like 'click' ebent , there are many events such as: 'dblclick'
//Note: When using js events in html the event name start with on if.e. onclick, ondblclick but in js : 'click','dblclick'