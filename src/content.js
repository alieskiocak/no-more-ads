if (document.getElementById("leftbans")){
	var left = document.getElementById("leftbans");
	var parentLeft = left.parentNode;
	parentLeft.removeChild(left);
}

if (document.getElementById("rightbans")){
	var right = document.getElementById("rightbans");
	var parentRight = right.parentNode;
	parentRight.removeChild(right);
}

var element = document.querySelector('div.trc_rbox_container');
element.parentElement.removeChild(element);