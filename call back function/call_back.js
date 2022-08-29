//1.Using Callback Function
function add(num1,num2,cb1,cb2,cb3) {
    let sum=num1+num2;
    console.log("Sum Of Two Number"+sum);
    cb1(num1,num2)
    cb2(num1,num2)
    cb3(num1,num2)
}
function sub(num1,num2,cb) {
    let sum1=num1-num2;
    console.log("subtract Of Two Number"+sum1);
    
}
function mul(num1,num2,cb) {
    let sum2=num1*num2;
    console.log("Multiplicaton Of Two Number"+sum2);
    
}
function div(num1,num2) {
    let sum3=num1/num2;
    console.log("divisoin  Of Two Number"+sum3);
    
}

add(2,9,sub,mul,div)

//call Back Function
function add1(n1,n2,cb) {
    let Sum=n1+n2;
    console.log(Sum)
    cb(n1,Sum)
}

function mul2(n1,n2) {
    let value=n1*n2;
    console.log(value)
}

add1(2,2,mul2)


//array check the number is present or not javascript using for loop
function check(){
    var arr=[12,34,45,54,56,4,42,2,9,4]
    for(i=0;i<arr.length;i++);
    if(arr[i]=12){
      return true
    }
    else{
      return false
    }
}
var checkvalue=check()
console.log(checkvalue)