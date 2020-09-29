
//This file is of no use at the moment, just thinking to use ajax

var name =document.getElementById('bar').value;
console.log(name);
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
if(this.readyState== 4 && this.status == 200){
  console.log(this.responseText);
	}
};
xhttp.setRequestHeader({'Content-Type': 'application/json'});
xhttp.open('POST', 'http://localhost:5000/seer', true);
xhttp.send(JSON.stringify({'name' : name}));