//print value from 1 to 10 but when 5, print 'Value of j is 5'
var j=1;
while(j<=10){
  if(j==5){
    console.log("value if j is "+j)

  }else{console.log(j);
    }
      j++;
}


//sum of 1 to 10
//only while  
var i=1;
var k=0;

while(i<=10){
  k=k+i;
  i++;

}
console.log("Summation from 1 to 10 is "+k)

// while-if condition
var i=1;
var k=0; // k is NaN so, need to assign k=0;
while(i<=10){
  
  k=i+k;
  if(i==10){
    console.log("Summation of 1 to 10 is "+k)
  }else{}
  i++;
  }