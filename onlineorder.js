function big(){
	var className = arguments[0].getAttribute("class");
	document.getElementsByClassName(className)[2].style.display = 'block';
}
function small(){
	var className = arguments[0].getAttribute("class");
	document.getElementsByClassName(className)[2].style.display = 'none';
}
function check(){
	var className = arguments[0].getAttribute("class");
	document.getElementsByClassName(className)[1].style.opacity = '1';
}
function uncheck(){
	var className = arguments[0].getAttribute("class");
	document.getElementsByClassName(className)[1].style.opacity = '0.7';
}