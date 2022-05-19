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

        uniaoCores.innerHTML=`rgb(
            ${rangeInput[0].value},
            ${rangeInput[1].value},
            ${rangeInput[2].value})`;

        if(
            rangeInput[0].value < 145 && 
            rangeInput[1].value < 145 && 
            rangeInput[2].value < 145){
                uniaoCores.style.color="white";
        }
            else{uniaoCores.style.color="black";}
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

        uniaoCores.innerHTML=`rgb(
            ${rangeInput[0].value},
            ${rangeInput[1].value},
            ${rangeInput[2].value})`;

        if(
            rangeInput[0].value < 145 && 
            rangeInput[1].value < 145 && 
            rangeInput[2].value < 145){
                uniaoCores.style.color="white";
        }
            else{uniaoCores.style.color="black";}
})
rangeInput[2].addEventListener("change",()=>{
    corAtual[2].style.backgroundColor = `rgb(0,0,${rangeInput[2].value})`;
    corAtual[2].innerHTML=rangeInput[2].value;
    uniaoCores.style.backgroundColor = `rgb(
        ${rangeInput[0].value},
        ${rangeInput[1].value},
        ${rangeInput[2].value})`;

    uniaoCores.innerHTML=`rgb(
            ${rangeInput[0].value},
            ${rangeInput[1].value},
            ${rangeInput[2].value})`;
    
    if(
        rangeInput[0].value < 145 && 
        rangeInput[1].value < 145 && 
        rangeInput[2].value < 145){
            uniaoCores.style.color="white";
    }
        else{uniaoCores.style.color="black";}
})

// ================================================================================================== //

const btnRelogio = document.querySelectorAll(".btns button");
const contador = document.querySelector(".relogio div.contador");
const tempoCronometro = document.querySelectorAll(".relogio .contador span");
const btnContador = document.querySelector(".contador button");


var btnAtivo = 0;

let cAtivo=0;
let m=0, s=0, ms=0;
var cronometro = ()=>{
    ms+=1;

    if(ms===100){s+=1; ms=0;}
    else if(s===60){m+=1; s=0;}

    m===0?tempoCronometro[0].innerHTML=``:tempoCronometro[0].innerHTML=`${m}:`;
    s<10 && s>0?tempoCronometro[1].innerHTML=`0${s}`:tempoCronometro[1].innerHTML=s;
    ms<10 && ms>0?tempoCronometro[2].innerHTML=`0${ms}`:tempoCronometro[2].innerHTML=ms;
}

var temporizador;


var contadorHoras = (h1, m2, s3)=>{
    setInterval(()=>{
        let moment = new Date();

        moment.getHours()<10? h1.innerHTML = `0${moment.getHours()}:`: h1.innerHTML = `${moment.getHours()}:`;
        moment.getMinutes()<10? m2.innerHTML = `0${moment.getMinutes()}`:m2.innerHTML = `${moment.getMinutes()}`;
        moment.getSeconds()<10? s3.innerHTML = `0${moment.getSeconds()}`:s3.innerHTML = `${moment.getSeconds()}`;
},1000)}



btnRelogio[0].addEventListener("click", ()=>{
    if(btnAtivo===2 || btnAtivo===0){
        clearInterval(temporizador);
        cAtivo = 0;
        m=0, s=0, ms=0;

        tempoCronometro[0].innerHTML=``;
        tempoCronometro[1].innerHTML=`${s}`;
        tempoCronometro[2].innerHTML=`${ms}`;


        btnRelogio[1].style.backgroundColor="black";
        btnRelogio[1].querySelector("svg").style.backgroundColor="black";
        btnRelogio[1].querySelector("svg").style.color="#00dffc";

        btnRelogio[0].style.backgroundColor="white"
        btnRelogio[0].querySelector("svg").style.backgroundColor="white";
        btnRelogio[0].querySelector("svg").style.color="red";

        btnAtivo=1;
        
        btnRelogio[0].style.backgroundColor="white"
        btnRelogio[0].querySelector("svg").style.backgroundColor="white";
        btnRelogio[0].querySelector("svg").style.color="red";

        let horas = [
            document.createElement("div"),
            document.createElement("span"),
            document.createElement("span"),
            document.createElement("span")
        ];
        
        horas[0].setAttribute("class", "contadorHoras");
        horas[3].setAttribute("class", "segundos");

        horas[0].appendChild(horas[1]);
        horas[0].appendChild(horas[2]);
        horas[0].appendChild(horas[3]);

        contador.appendChild(horas[0]);
        contadorHoras(horas[1],horas[2],horas[3]);
        /*
        moment.getHours()<10? horas[1].innerHTML = `0${moment.getHours()}:`: horas[1].innerHTML = `${moment.getHours()}:`;
        moment.getMinutes()<10? horas[2].innerHTML = `0${moment.getMinutes}`:horas[2].innerHTML = `${moment.getMinutes()}`;
        moment.getSeconds()<10? horas[3].innerHTML = `0${moment.getSeconds()}`:horas[3].innerHTML = `${moment.getSeconds()}`;
        */
}})

btnRelogio[1].addEventListener("click", ()=>{
    if(btnAtivo===1 || btnAtivo ===0){
        document.querySelector(".contadorHoras").remove();
        btnRelogio[0].style.backgroundColor="black";
        btnRelogio[0].querySelector("svg").style.backgroundColor="black";
        btnRelogio[0].querySelector("svg").style.color="#00dffc";
        
        btnRelogio[1].style.backgroundColor="white"
        btnRelogio[1].querySelector("svg").style.backgroundColor="white";
        btnRelogio[1].querySelector("svg").style.color="red";

        btnAtivo=2;
        
        btnRelogio[1].style.backgroundColor="white"
        btnRelogio[1].querySelector("svg").style.backgroundColor="white";
        btnRelogio[1].querySelector("svg").style.color="red";

}});

window.addEventListener("load",()=>{
    if( btnAtivo === 1 || btnAtivo === 0 ){
        
        btnRelogio[1].style.backgroundColor="white"
        btnRelogio[1].querySelector("svg").style.backgroundColor="white";
        btnRelogio[1].querySelector("svg").style.color="red";

}})

btnContador.addEventListener("click",()=>{
    cAtivo+=1;

    if(cAtivo===2){
        cAtivo = 0;
        clearInterval(temporizador);
}
    else if(cAtivo===1){
        temporizador = setInterval(cronometro,10);
    }
    
})