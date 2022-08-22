//questin one
var std_details={
    std_Name: 'Anand',
    std_roll_num:002,
    Std_Age:22,
    std_Grade:5.33,
     get_Name: function  () {
         return this.std_Name;
      },
    get_final: function(){
        var sum=this.std_Grade*2;
        return sum;

    }
 }

 console.log(std_details.get_Name());
 console.log(std_details.get_final());

//questin two 
var calculator={
    Area:function(L,W){
        let ans=L*W;
        return ans;
    },
    perimeater:function(L,W){
        let res=(L+W)+2;
        return res;
    }
}

console.log("Area :",calculator.Area(6,7));
console.log("Perimeater:",calculator.perimeater(6,7));

//Question Three forward
var Arr=[1,2,3,4,5,6,7,8,9,10]
for(i=0;i<Arr.length;i++){
console.log(Arr[i])}

//reverse
var Arr_2=[1,2,3,4,5,6,7,8,9,10]
for( i=Arr_2.length-1;i>=0;i--){
console.log(Arr_2[i])}

//sum off Array

var arr4=[1,2,3,4,5,53,4,5]
sum=0;
for(i=0;i<arr4.length;i++){
    sum=sum+arr4[i];
}
console.log(sum)

//return the value each number double
var Arr5=[1,2,3,4,5,6,7,8,9,10]
for(i=0;i<Arr.length;i++){
console.log(Arr[i]*2)}

//multiplication of Array
var arr5=[1,2,3,4,5]
value=1
for(i=0;i<arr5.length;i++){
    value=value*arr5[i];
}
console.log(value)

//max number in the array

var arr6=[34,12,454,56,34,775]
console.log(Math.max(...arr6))


//Prime number
function isPrime(num) {
    var prime = num != 1;
    for(var i=2; i<num; i++) {
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

console.log(isPrime(7))