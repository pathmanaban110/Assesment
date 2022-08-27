let button=document.getElementById("btn");
let para=document.getElementById("btnpara");

button.addEventListener('click',printname);


function printname() {
    para.innerHTML='pathmanaban';
    para.style.backgroundColor='blue';
    para.style.padding='1rem';
    para.style.textAlign='center';
    para.style.fontFamily='arial';
    button.innerHTML='Name shown';
}


