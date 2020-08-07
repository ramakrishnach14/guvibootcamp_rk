//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.

function addFive(a){
	return a+5;
}


//Write a function called “getOpposite”.
//Given a number, return its opposite
function getOpposite(num){
	if(!(isNaN(num))){
		if(num>0){
			return -num;
		} else if(num==0){
			return 0;
		} else{
			return Math.abs(num);
		}

	} else{
		return -1;
	}
	
}

//console.log(getOpposite(0));

//Fill in your code that takes an number minutes and converts it to seconds

function toSeconds(min)
{
	return min*60;
}

//console.log(toSeconds(3));

//Create a function that takes a string and returns it as an integer.

function toInteger(a){
	return parseInt(a);
}

//console.log(toInteger('3'));

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.

let myint = 0;
function nextNumber(myint) {
	return myint = myint + 1 ;
}
let myNextint = nextNumber(myint)

//console.log(myNextint);

//Calculate the sum of numbers received in a comma delimited string

//console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
  // your code here
  var numArr = s.split(",");
  //console.log(numArr);
  let sum=0;
  for(var i=0;i<numArr.length;i++){
  	sum =sum + parseInt(numArr[i]);
  }
  return sum;
}

//Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
//console.log(ar);
function mergeArrays(ar1, ar2)
{
 	var result = [];

 	for(let el of ar1)
 	{
 		result.push(el);
 	}

 	for(let el of ar2)
 	{
 		result.push(el);
 	}

 	return result;
}

//Reverse a string

var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   // your code here  
   return s.split("").reverse().join("");
}
