//1.Global Variable
var array=[12,23,34,221,342,342,46,23,55,24]//globalVariable

function add(){//inside the function we can accses the value but out side the function can't
    array.push(10,20)
    console.log('Array Push-->',array)
}
function pop(){
    array.pop()
    console.log("Array Pop-->",array)
}
add(array)
pop(array)
console.log(array)
