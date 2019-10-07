
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value ="";
	var btnDelete =document.createElement("button");
	btnDelete.appendChild(document.createTextNode("Delete!"));
	li.appendChild(btnDelete);
	btnDelete.onclick=removeParent;
}

function createDelete(){
	var btnDelete =document.createElement("button");
	btnDelete.appendChild(document.createTextNode("Delete!"));
	listItems[i].appendChild(btnDelete);
	btnDelete.onclick =removeParent;
}


function addListAfterClick(){
	if(inputLength()>0){
		createListElement();
	}
}

function addListAfterEnter(event){
	if(inputLength() > 0 && event.keyCode===13){
		createListElement();
	}
}

//Either use this or eventListener
/*ul.onclick=function(event){
	var target = event.target;
	target.classList.toggle("done");
}*/

for(var i=0; i< listItems.length; i++)
{
	createDelete();
}

function removeParent(evt){
	return evt.target.parentNode.remove();
}

ul.addEventListener("click", function(event){
	event.target.classList.toggle("done");
})

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress", addListAfterEnter);


