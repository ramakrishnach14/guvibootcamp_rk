//sum of all numbers in an array

let arr=[1,2,3,4,5,6,7,8];
let sumArr = arr.reduce((a,b)=>a+b,0);
//console.log(sumArr);

//print odd numbers in an array
let oddArr = (arr)=>{
	var odd=[];
	for(var i=0;i<arr.length;i++){
		if(arr[i]%2==1){
			odd.push(arr[i]);
		}
	}
	return odd;	
}
console.log(oddArr(arr));