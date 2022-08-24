//1.sum of Array Using While loop
function whileloop() {
    temp=0;
    i=0;
    while(i<arr.length){
    temp=temp+arr[i]//Store the value one by one
    i++;
    }
    console.log(temp)
}

let arr=[2,3,45,56,675,34,32]
whileloop(arr)//call the function

//2.Using Switch Case and for loop sum ,mul,add,div

function check_valu(arrval,num1,num2) {
     for(i=0;i<arrval.length;i++){
      switch (arrval[i]) {
        case 'Sum':
            var sum=num1+num2
            console.log(sum)
            break;
        case 'Sub':
            var sub=num1-num2
            console.log(sub)
            break;    
        case 'Mul':
            var mul=num1*num2
            console.log(mul)
            break;
        case 'Div':
            var div=num1/num2
            console.log(div)
            break;    
        default:
            console.log("NO Such Case")
            break;
      }
}    
}
let arrval=["Sum","Sub","Mul","Div"]
let num1=13;
let num2=34;
console.log( check_valu(arrval,1,4))