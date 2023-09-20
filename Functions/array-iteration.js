console.log("array-iteration-forEach file contents:")

// Array iteration using forEach
var colors=["Red","Yellow","Blue"];
var numbers=[3,1,4,6];

// default parameter to be set:
// parameter 1 : items
// parameter 2 : index
// parameter 3 : whole array

let printEverything= function(randomParamName, hey,abc){ //parameters name doesn't matter
 alert(randomParamName,hey,abc); //default parameters in order will be executed (items,index and whole array)

}
colors.forEach(printEverything);

// Array iteration using Mapping

function addSomething(items,index,array){
  return `Here is ${items} which is a color`;
}
let arr_res = colors.map(addSomething);
alert(arr_res); //returns array with each items one by one

//generate an array where the square numbers of numbers variables will be printed
let sqr_numbers = numbers.map(function(item){
  return item*item;
})
alert(sqr_numbers);
