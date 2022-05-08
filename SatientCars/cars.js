var a = setInterval(casNum,getRandTime());
let cas = document.getElementById("casualties");
let num = 10324
let mode = 1;

let img = document.querySelector('#car');
img.addEventListener('click', () =>{
    img.style.filter='blur(0px)';
});

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
    return Math.floor(Math.random() * (4000) )
}

function change(){
    if(mode==0){
        let col = document.getElementById('wrapper');
        col.style.color='aliceblue';
        col.style.backgroundColor='black';

        document.getElementById('part2').style.backgroundColor='rgb(26, 26, 46)';
        

        document.body.style.backgroundImage = 'url(Images/alley-night.jpg)';

        mode=1;
    }
    else if(mode==1){
        let col = document.getElementById('wrapper');
        col.style.color='black';
        col.style.backgroundColor='aliceblue';

        document.getElementById('part2').style.backgroundColor='rgb(198, 198, 255)';

        document.body.style.backgroundImage = 'url(Images/alley-day.jpg)';

        mode=0;
    }
}