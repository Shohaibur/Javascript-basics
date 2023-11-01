//more on dom events

document.getElementById('sample-btn').addEventListener('click',message);

function message(e){
  let val = e;
  val=e.target; //call the target event listener
  val=e.target.id; //call the event id

  val=e.timeStamp; //when event is clicked shoes time after load the page (ms)
  val=e.type; //shoes tye of event

  val=e.clientY //shoes clicked pixel y axis point of the page
  val=e.clientX //for X axis

  val=e.offsetY; //Y pixel measure of button
  val=e.offsetX; //X axis

  console.log(val); 
}

//apply on page
document.querySelector('.container').addEventListener('mousemove',message);
document.querySelector('.container').style.background="red";
function message(f){
  let mess = f;
  mess = f.offsetX;
  mess  = f.offsetY;
  mess=this;
  this.style.background = `#${f.offsetX}`; //generate color based on x axis of moving mouse pinter

  console.log(f.offsetX);
  console.log(f.offsetY);
  console.log(mess);
}

//work on form
document.querySelector("#rndmid").addEventListener('focus',test); //focus=form field clicked
function test(t){
  console.log("focused worked");
  this.style.background="pink"; //form field changed to pink on click

}


document.querySelector("#rndmid").addEventListener('keyup',test2);
function test2(){
  console.log(this.value);
  document.getElementById("demoid").innerText=this.value; //PRINT TYPED VALUE ON HTML PAGE

}


