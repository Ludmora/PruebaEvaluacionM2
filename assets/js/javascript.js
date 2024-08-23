window.addEventListener("scroll",function(){
var header = document.querySelector ("nav");
header.classList.toggle("navFijo",window.scrollY>0);

});