var message="Hello Java Script"; 
var name="Nicu";
var message1="Hello "+name+"!";
var timeout=2000;
var isNight=false;
var isMorning=true;
var test=null;

var date=new Date();
var hour=date.getHours();
console.log(hour);

if (hour>=20 || hour<=6) {
  alert("Noapte buna!");
}
else if (hour>6 && hour<=11) {
  alert("Buna dimineata!");
}
else if(hour<=17) {
  alert("Buna ziua!");
}
else {
  alert("Buna seara!");
}

setTimeout(sayHello,timeout);
function sayHello() {
  // alert(message1);
  console.log(message1);
  
}