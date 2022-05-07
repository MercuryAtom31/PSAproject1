let sub1 = document.getElementById("subt1");
sub1.style.textDecoration = "underline";

function updated() {
    var count= document.getElementById("counter");
    count.innerHTML=++upto;
    if(upto===185490)
    {
        clearInterval(counts);
    }
}
let counts=setInterval(updated);
let upto=0;

const para = document.createElement("p");
const node = document.createTextNode("Rats are taking over the city at an astronomical rate. We aren't sure how these rats are multiplying, however it is a serious matter that everyone should be very careful and should stay inside of their homes as much as possible, as well as set up many traps in case the rats try to infiltrate your homes.");
document.getElementById("para1").style.width = "35%";
para.appendChild(node);

const element = document.getElementById("para1");
const child = document.getElementById("p1");
element.insertBefore(para,child);


function hideButton(){
    var x = document.getElementsByClassName("allCounter");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
  }
}