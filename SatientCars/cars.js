var a = setInterval(casNum,getRandTime());
let cas = document.getElementById("casualties");
let num = 10324
let mode = 0;
/*if(localStorage.getItem('deaths') != null){
    let num = localStorage.getItem('casualties');
    cas.textContent = num;
    window.alert(num);
}
else if(localStorage.getItem('deaths') == null){
    let num = 10324
}*/


function casNum(){
    num += Math.floor(Math.random()*20);
    cas.textContent = num;
    //localStorage.setItem('casualties',num);
}

function getRandTime(){
    return Math.floor(Math.random() * (7000) )
}

function change(){
    if(mode==0){
        let col = document.getElementById('wrapper');
        col.style.color='aliceblue';
        col.style.backgroundColor='black';
        mode=1;
    }
    else if(mode==1){
        let col = document.getElementById('wrapper');
        col.style.color='black';
        col.style.backgroundColor='aliceblue';
        mode=0;
    }
}