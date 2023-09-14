//array inside array
var arr= [10,12, ["a","b","c"],8,9];
console.log(arr); // [10, 12, Array(3), 8, 9]
console.log(arr[2]) // ['a', 'b', 'c']

//accessing array element inside array 
console.log(arr[2][2]) ;// c
console.log(arr[2][0]) ;// a 

// Nested array accessing
var arr=[5,4,["a","b",[1,2,"word1","word2",3,4],"c","d"],3,2,1];
console.log(arr[2][2][3]) // word2

//object inside array
var arr=[5,4,[["a","b"],{"word1":"Shoaib","word2":"Rochi"},],3,2,1];
console.log(arr[2][1].word2); // Rochi

//Nested object accessing
var obj = {item1:"i1",item2:"i2",item3:{i3i0:"i1 of item3",i3i1:"i2 of item3"}}
obj.item3.i3i0 // 'i1 of item3'