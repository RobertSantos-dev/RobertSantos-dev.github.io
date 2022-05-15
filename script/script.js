const corAtual = document.querySelectorAll(".corAtual");
var rangeInput = document.querySelectorAll(".medidor input");
var uniaoCores = document.querySelector(".uniaoCores");

rangeInput[0].addEventListener("change",()=>{
    corAtual[0].style.backgroundColor = `rgb(${rangeInput[0].value},0,0)`;
    corAtual[0].innerHTML=rangeInput[0].value;
    uniaoCores.style.backgroundColor = `rgb(
        ${rangeInput[0].value},
        ${rangeInput[1].value},
        ${rangeInput[2].value})`;
})
rangeInput[1].addEventListener("change",()=>{
    corAtual[1].style.backgroundColor = `rgb(0,${rangeInput[1].value},0)`;
    corAtual[1].innerHTML=rangeInput[1].value;
    if(rangeInput[1].value>159){
        corAtual[1].style.color="black";
    }
    else{corAtual[1].style.color="white"}
    uniaoCores.style.backgroundColor = `rgb(
        ${rangeInput[0].value},
        ${rangeInput[1].value},
        ${rangeInput[2].value})`;
})
rangeInput[2].addEventListener("change",()=>{
    corAtual[2].style.backgroundColor = `rgb(0,0,${rangeInput[2].value})`;
    corAtual[2].innerHTML=rangeInput[2].value;
    uniaoCores.style.backgroundColor = `rgb(
        ${rangeInput[0].value},
        ${rangeInput[1].value},
        ${rangeInput[2].value})`;
})

// ================================================================================================== //