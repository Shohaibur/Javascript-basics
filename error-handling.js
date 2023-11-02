console.log("Before error");

try{
  test();
}
catch(err){
  console.log(err.message); //print the error (message style) then execute next code
  console.log(err.name); // print error type/name

} finally{
  console.log("Finally code block"); //always execute regardless try catch
}

console.log("After error");

//exercise

let a =15;
try{
  if (a>5) throw "too big";
  else if (a<20) throw "too small";


}catch(err2){
  console.log(err2);

} finally{
  console.log("This line executes anyway");
}