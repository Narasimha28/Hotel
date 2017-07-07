var presentIndex = 0;
document.getElementsByClassName('gallery')[0].style.display = 'block';
nextAction();
function nextAction(){
	if(arguments.length===0){
		presentIndex = presentIndex+1;
	}
	else if(arguments[0].getAttribute("value") === "1"){
		presentIndex = presentIndex - 1;
	}
	else if(arguments[0].getAttribute("value") === "2"){
		presentIndex = presentIndex + 1;
	}
	else{
		presentIndex = presentIndex+1;
	}
	if(presentIndex >= document.getElementsByClassName('gallery').length){
		presentIndex = 0;
	}
	if(presentIndex < 0){
		presentIndex = document.getElementsByClassName('gallery').length-1;
	}
	for(i=0;i<document.getElementsByClassName('gallery').length;i++){
		document.getElementsByClassName('gallery')[i].style.display = 'none';
	}
	document.getElementsByClassName('gallery')[presentIndex].style.display = 'block';
	if(arguments.length===0){
		setTimeout(nextAction,2000);
	}
}