let modalBtn = document.getElementById("submit-btn");
let body = document.getElementById("main_contact");
let modal = document.getElementById('contact_modal');
let modalClose = document.getElementById("close");
let footer = document.getElementById("footer")


modalBtn.addEventListener("click", () => {
	event.preventDefault()
	modal.style.display = "block";
	body.classList.add("blur")
	footer.classList.add("blur")
	
});

modalClose.addEventListener("click", () => {
	modal.style.display = "none";
	body.classList.remove("blur")
	footer.classList.remove("blur")

});

window.onclick = function(event){
	if(event.target == modal){
		modal.style.display = "none"
	body.classList.remove("blur")
	footer.classList.remove("blur")
	}
}

