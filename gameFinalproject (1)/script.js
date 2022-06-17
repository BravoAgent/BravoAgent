/*setInterval(divCreator, 15000)

function divCreator(){
  //alert("hi")
  const div = document.createElement("DIV")
  div.className = "bubble";
  div.id = "bubble";
    var randomStartMargin = Math.floor(Math.random()*1)+100;
  div.style.margin =  randomStartMargin%
  document.body.appendChild(div); 
  
};
*/


for (i = 1; i<= 10; i++){
  append()
}

function append(){
  
  //alert("hi")
  const div  = document.createElement("DIV")
  div.id = "bubble"+i
  div.className = "bubble"
  document.body.appendChild(div)
}

setInterval(clock, 1000)


  

function clock(){
var d = new Date();
var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();
  document.getElementById("clock").innerHTML = hours + ":" + minutes+":"+seconds;
}