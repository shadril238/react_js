//shadril238
let count=0;
let saveEl=document.getElementById("save-el");
let countEl=document.getElementById("count-el");

function increment(){
    count+=1;
    countEl.innerText=count;
}

function save(){
    let countStr=count + " - ";
    saveEl.innerText+=countStr;
    countEl.innerText=0;
    count=0;
}