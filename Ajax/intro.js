// Ajax = asynchronous javascript and XML
// Get data without loading the page

document.getElementById('get_data').addEventListener('click',loadData2);

// function loadData(){
//   document.write("Button working")
// }

function loadData2(){
  // xml http request obj (XHR)
  let xhr = new XMLHttpRequest(); //class
  console.log(xhr);

  //open (fetch data from data file)
  xhr.open("Get","data.txt",true);
  
  //onload (status check)
  xhr.onload = function(){
    if(this.status === 200){
      console.log(this.status);
      console.log(this.responseText); //fetch data from data source
      document.getElementById("output").innerHTML=`${this.responseText}`;

    }
  }

xhr.send(); //call function
}