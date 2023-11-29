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
  xhr.onprogress = function(){
    console.log(this.readyState); // shows readystate progress point
  }

  //onload (status check)
  // HTTP statuses
        // 200: "OK"
        // 403: "Forbidden"
        // 404: "Not Found"
  xhr.onload = function(){
         if(this.status === 200){
      console.log(this.status);
      console.log(this.responseText); //fetch data from data source
      document.getElementById("output").innerHTML=`${this.responseText}`;

    }
  }

  // ReadyState use
  // readyState Values
         // 0: request not initialized
         // 1: server connection established
         // 2: request received
         // 3: processing request
         // 4: request finished and response is ready
  xhr.onreadystatechange = function(){
   // console.log(this.readyState) //comment out because onprogress func
    if (this.status===200 && this.readyState ===4){
            console.log(this.responseText);

    }
  }

xhr.send(); //call function
}