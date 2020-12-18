var button = document.getElementById("enter"); 
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	//adds li element with input text to the ul
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.classList.add("listText");
	li.addEventListener("click", function() {
		li.classList.toggle("done");
	})
	ul.appendChild(li);

	//creates button inside li element

	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("DELETE"));
	btn.classList.add("trash");
	btn.addEventListener("click", 
		function() {
			this.parentElement.remove();
		});
	li.appendChild(btn);

	//resets form with placeholder
	input.value = "";
}

	//callback function with conditions for click listener
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

	//callback function with conditions for keypress listener
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) { 
		createListElement();//need to specify keycode 
	}
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);




