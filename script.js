const colors = ["green","red","rgba(133,122,200)","#f15025","blue","cyan","pink"];

const btn1 = document.getElementById('btn1');
const color = document.querySelector('.color');

btn1.addEventListener('click',function(){
    
    const randomNumber =  getrandomnumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
});

function getrandomnumber(){
    return Math.floor (Math.random()*colors.length);
}

