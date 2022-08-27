var a=[];
var b=[];
//2.Use For Each and sum of array
let arr = [{a:1,b:2},{a:4,b:5},{a:6,b:90},{a:8,b:8},{a:7,b:90}]
arr.forEach((item,index) => {
  a.push(item.a);
  b.push(item.b);
});

console.log(a);
sum=0;
for(i=0;i<a.length;i++){
  sum=sum+a[i];
}
console.log(sum)

console.log(b)
sum2=0;
for(i=0;i<b.length;i++){
  sum2=sum2+b[i];
}
console.log(sum2)