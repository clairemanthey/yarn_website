let expandedDetails  = document.getElementById("details_more");
let expandedAttributes = document.getElementById("attributes_more");
let details = document.getElementById("details_prod");
let attributes = document.getElementById("attribute_prod");


expandedDetails.addEventListener("click", () => {
	details.classList.toggle("show");
});

expandedAttributes.addEventListener("click", () => {
	attributes.classList.toggle("show");
});

