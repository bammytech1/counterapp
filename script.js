const count = document.querySelector(".count");
const sub = document.querySelector(".substract");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");



sub.addEventListener("click",(e)=>{
    count.innerHTML--;
    setcolor()
});

reset.addEventListener("click",(e)=>{
    count.innerHTML = 0;
    setcolor()
});

add.addEventListener("click",(e)=>{
    count.innerHTML ++;
    setcolor()
});


function setcolor(){
    if(count.innerHTML > 0){
        count.style.color = "green";
    }else if (count.innerHTML < 0){
        count.style.color = "orange";
} else {
    count.style.color = "white";
}};