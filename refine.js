let displayFilterBtn = document.getElementById("sm_refine_title");
let container = document.getElementById("filter_container");
let closeBtn = document.getElementById("open_filter")

displayFilterBtn.addEventListener("click", () => {
	let visibility = container.getAttribute("data-visible");

	if (visibility === "false"){
		container.setAttribute("data-visible", true);
		closeBtn.textContent = "X"
	}else{
		container.setAttribute("data-visible", false);
		closeBtn.textContent = ">"
	}
})


