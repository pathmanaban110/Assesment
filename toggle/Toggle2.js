let clikbtn=document.getElementById("clickBTN")
let para=document.getElementById("print")

clikbtn.addEventListener('click',toggle)

function toggle() {
    if(para.classList.contains('printclass')){
        para.classList.remove('printclass');
        para.innerHTML='default';
        para.classList.add('print-int-class')
        clikbtn.innerHTML='Show Me';
    }else{
        para.classList.remove('print-int-class')
        para.innerHTML="PATHMANABAN";
        para.classList.add('printclass');
        clikbtn.innerHTML='Name Shown';
    }
    
}
