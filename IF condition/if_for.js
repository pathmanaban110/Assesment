// write  a function & object &for loop sum of array
var detail={
    name:'pathmanaban',
    value:23,
    arr:[1,2,3,4,5,6,7],
    add: function () { //create a function and get the value in object using  this  key
        console.log(this.name)
        sum=0 //starting value 0
        for(i=0;i<this.arr.length;i++){               
           sum=sum+this.arr[i];//store the value in sum
           //console.log(sum) store and print the value one by one
            }

       console.log(sum);//print the total value
    }
}
console.log(detail.name)
console.log(detail.value)//call the object and key
console.log(detail.add())//call the function

//In Array sum of value 20 > print the name else remove the value
function checkvalue(array) {
    let value1=sum_of_Array(array)
    if (20>value1){
        array.push('patham');
    }
    else{
        array.pop()     
    }
    console.log(array)
}
function sum_of_Array(array) {
    sum1=0;
    for(i=0;i<array.length;i++){
        sum1=sum1+array[i];
        return sum1;
    }
    
}

let array=[1,2]
console.log(checkvalue(array))

//max value

let arr3=[1,23,4,67,46,75]
function findmax(arr3){
    let length=arr3.length;
    let max=0;
    for (i=0;i<length;i++)
    {
        if(arr3[i]>max)
        {
            max=arr3[i];
        }
    }
    return max;
}

console.log(findmax(arr3))



// In 5 dimentional Array store the value greater than 15 
 var arr4=[23,6,78,86,9]
function get_value(arr4) {
    let len=arr4.length;
    check_value=15;
    a=[]
    for(i=0;i<len;i++){
        if(arr4[i]>15)//condition
         a.push(arr4[i])//add value >15
    }
    console.log(a)
}

console.log(get_value(arr4))