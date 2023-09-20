/*-- Navigation Functionality --*/

let nav = document.getElementById("primary_nav");
/*let navToggle = document.getElementById("hdiv");*/
let navToggle = document.getElementById("drop-down");
let xOne = document.getElementById("hdiv_one");
let xTwo = document.getElementById("hdiv_two");
let xThree = document.getElementById("hdiv_three");



navToggle.addEventListener("click", () => {

  let visibility = nav.getAttribute("data-visible"); 
  
  if(visibility === "false"){
    nav.setAttribute("data-visible", true);
    
    xOne.classList.add("nav_drop-down-X-one");
    xTwo.classList.remove("hdiv");
    xTwo.classList.add("nav_drop-down-X-two");
    xThree.classList.remove("hdiv");
    xThree.classList.add("nav_drop-down-X-three");

    
  } else{
    nav.setAttribute("data-visible", false); 
    
    xOne.classList.remove("nav_drop-down-X-one");
    xTwo.classList.add("hdiv");
    xTwo.classList.remove("nav_drop-down-X-two");
    xThree.classList.add("hdiv");
    xThree.classList.remove("nav_drop-down-X-three");
  
  }
});

/*-- Shopping Bag Functionality --*/

let shoppingBtn = document.getElementById("shopping_bag-icon");
let bagDisplay = document.getElementById("bag_hover");
/*
shoppingBtn.addEventListener("mouseover", () =>{
  bagDisplay.classList.add("visible")
});

shoppingBtn.addEventListener("mouseout", () => {
  bagDisplay.classList.remove("visible")
})

bagDisplay.addEventListener("mouseover", () => {

})
*/