//print odd numbers in an array
var a = function(a){
	for(var i=0;i<a.length;i++){
		if(a[i]%2==1){
			console.log(a[i]);
		}
	}
}
let arr=[1,2,3,4,5,6];

//a(arr);

//sum of all numbers in an array
var b = function(arr){
	let sum=0;
	for(var i=0;i<arr.length;i++){
		sum = sum + arr[i];
	}
	console.log(sum);
}
let numArr=[1,2,3,4,5,6];

//b(numArr);

//return all prime numbers in an array
var primNUm = function(arr){
	var factorsCount=0;
	var primeArr=[];
	for(var i=0;i<arr.length;i++){
		for(var j=1;j<=arr[i];j++){
			if(arr[i]%j==0){
				factorsCount = factorsCount + 1;
			}
			if(factorsCount>2){
				break;
			}
		}
		if(factorsCount==2){
			primeArr.push(arr[i]);
		}
		factorsCount=0;
	}
	console.log(primeArr);
}
let ar1=[2,3,4,5,6,7,8,9];
//primNUm(ar1);

//return all pallindromes in an array
//strings

let pall= function (str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

let strArr=["race car","not a palindrome","A man, a plan, a canal. Panama"];

let pallArr = [];
for(let i=0;i<strArr.length;i++){
	if(pall(strArr[i])){
		pallArr.push(strArr[i]);
	}
}
//console.log(pallArr);


