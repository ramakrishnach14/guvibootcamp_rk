
function second(a,b) {
	var opr1 = 10;
	var opr2 = 90;// body…
	if(a==1){
		return add(opr1,opr2);
	}
	if(a==2){
		return sub(opr1,opr2);
	}
	if(a==3){
		return mul(opr1,opr2);
	}
}

arr = [add,sub,mul];

let res;

res = second(1,arr); // 100
console.log(res);
res = second(2,arr); // -80
console.log(res);
res = second(3,arr); // 900
console.log(res);

function add(a,d){
	return a+d;
}
function sub(a,d){
	return a-d;
}
function mul(a,d){
	return a*d;
}
