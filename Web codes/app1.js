 var x = document.getElementById("lgs");
 var y = document.getElementById("lg1");
var lgq= document.getElementById("lgq");
lgq.addEventListener("click", function(){ 
	localStorage.setItem("auth", "ss");
});


var vv=localStorage.getItem("auth");


// localStorage.removeItem("key");
console.log(vv);
if(vv=="ss")
{
	x.style.display = "block";
	
}
else{
	y.innerHTML="LOGIN NEEDED"
 	x.style.display = "none";
}
localStorage.removeItem("auth");
var lgso = document.getElementById("logout");
lgso.addEventListener("click", function () {
    
});