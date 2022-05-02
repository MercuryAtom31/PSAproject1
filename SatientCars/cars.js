var a = setInterval(casNum,getRandTime());
let num = 10324;
let cas = document.getElementById("casualties");

function casNum(){
    num += Math.floor(Math.random()*20);
    cas.textContent = num;
}

function getRandTime(){
    return Math.floor(Math.random() * (10000) )
}