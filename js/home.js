function hello(){
	alert('hello');
	return false;
}

function changeColor(section){
	console.log("change color" + section);

	document.getElementById(section).style.backgroundColor = (section =='div1') ? '#000' : '#777';
	
	
}


/*

function changeColor(section){
	console.log("change color" + section);

	var color = "";
	if (section == "div1"){
		color ="#000";
	}else{
		color = "#444";
	}

	document.getElementById(section).style.backgroundColor = color;
	
	
}


*/
