let hourse=document.querySelector('.hours');
let minute=document.querySelector('.minutes');
let second=document.querySelector('.second');

function updateclick(){
   let today=new Date();
   let hrs=today.getHours();
   let min=today.getMinutes();
   let sec=today.getSeconds();
if(hrs<10){
    hrs='0'+hrs;
}
else{
    hrs=hrs;
}
if(min<10){
    min='0'+min;
}
else{
    min=min;
}
if(sec<10){
    sec='0'+sec;
}
else{
    sec=sec;
}
hourse.textContent=hrs;
minute.textContent=min;
second.textContent=sec;
}
setInterval(updateclick,1000);
updateclick();