// Ajax code
// fetch json data from external file
// convert json data to js object
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        // document.write(data);
        jsonData(data);

    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();

function jsonData(json_obj){
// console.log(json_obj);
  var json_js_obj = JSON.parse(json_obj);
  console.log(json_js_obj);  // converts Js object

  for (x in json_js_obj.persons){
     console.log(x); // Json data t objects
    var persons = json_js_obj.persons;

    for (y in persons[x]){
      console.log(persons[x][y]); // values of different property's objects value
     // console.log(persons[x])

    }
   // console.log(persons[x])

  }

}