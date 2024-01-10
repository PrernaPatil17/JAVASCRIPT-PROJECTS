const hexcolor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn1 = document.getElementById("btn1");
const color = document.querySelector(".color");

btn1.addEventListener("click",function(){
   let hex = "#";

   for(let i = 0 ; i<6;i++){
    hex += hexcolor[hexrandomnumber()];
   }

   color.textContent= hex;
   
   document.body.style.backgroundColor = hex;
});

function hexrandomnumber(){
    return Math.floor(Math.random()*hexcolor.length);
}