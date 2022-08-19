//sum of Two Number

function add(num1,num2){
   let addition=num1 +num2 ;
   return addition;
}
let Add=add(34,67);
console.log("Sum Of Two Number :",Add);

//sum of three Number

function add_3(num1,num2,num3){
   let addition_3=num1+num2+num3;
   return addition_3;
}
let Add_3=add_3(23,45,56);
console.log("Sum of Three NUmber:",Add_3);

//multiplication of two number
function multi(num1,num2){
   let multiplication=num1*num2;
   return multiplication;
}
let Multi=multi(4,6);
console.log("Multiplication of two number:",Multi);

//multiplication of three number
function multi_3(num1,num2,num3) {
   let multiplication_3=num1*num2*num3;
   return  multiplication_3;   
}

let Multi_3=multi_3(23,45,56);
console.log("Multiplication of Three Number :",Multi_3);

//cube of number
function cube(num1) {
   let Cube=num1*num1*num1;
   return Cube;   
}
let cube_result=cube(45);
console.log("Cube of Number:" ,cube_result);

//Area of Square
function squre(value1) {
   let squre_res=value1*value1;
   return squre_res;   
}
let Result=squre(45);
console.log("Area of Square:",Result);

//Area Of Rectangle
function rec(length,width) {
   let Rectangale=length*width;
   return Rectangale;
} 
let Rec=rec(23,34)
console.log("Area of Rectangle :",Rec)

//dimentional of square  
function dimentional(t) {
   let d_for=t*2;
   return d_for;
}
let Dai=dimentional(5)
console.log("Dimentional of Square :",Dai)

//perimeater of Square
function perimeater(a){
   let per=a*4;
   return per;
}
let Per=perimeater(12);
console.log("Perimeater of Square :",Per);

//simple Interest
function simple_interest(p,r,t) {
   let SI=(p*r*t)/100;
   return SI;
}
let si=simple_interest(3,5,8);
console.log("Simple Interest :",si)

//componet Interest
function Cmp(p,r,t) {
   let cmp_res=p*(Math.pow((1+r/100),t));
   return cmp_res
}

let ci=Cmp(1200,3,5);
console.log("Componet Interest :",ci);