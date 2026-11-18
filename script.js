console.log("Well, Well, Well......");

//mobile nav bar toggle....

const menuBtn = document.querySelector("#menu");
const mobileNav = document.querySelector("#mobile-nav");

menuBtn.addEventListener("click", show);

function show(){
	mobileNav.classList.toggle("visible");
}


//code for animated text reveal..
let reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
	let windowHeight = window.innerHeight;

	reveals.forEach(function (element){
		let elementTop = element.getBoundingClientRect().top;

		if(elementTop < windowHeight - 100){
        element.classList.add("active")
	}
		});
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


//close navbar when the outside is clicked..

// document.addEventListener("click", noRevealNav);

// function noRevealNav(e){
//    if(!mobileNav.contains(e.target)){
//       mobileNav.classList.remove("visible");
//    }
// }

//portfolio category buttons....

const buttons = document.querySelectorAll(".buttons input");
const projects = document.querySelectorAll(".images figure");

//function for filtering the projects..

function filterProject(category){
	projects.forEach(function(project){
       let showProject;

       if(category === "all"){
       	showProject =
       	project.dataset.featured === "true";
       } else{
       	showProject = project.dataset.category === category;
       }

       project.classList.toggle("hidden", !showProject);
	});

	//update active button....

	buttons.forEach(function(button){

		button.classList.toggle("active", button.dataset.filter === category);

	});
}

// adding event listener.....

buttons.forEach(function(button){
	button.addEventListener("click", function(){
		const category = button.dataset.filter;

		filterProject(category);
	});
});

filterProject("all");


//code for whatsapp integration..
let whatsButton = document.querySelectorAll("#whatsapp");


whatsButton.forEach(function(btn) {
	btn.addEventListener("click", function(){
		let phoneNumber = "2349068001346";
		let message = `Good day, I'm interested in ...... .`
      
      let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
      window.open(url, "_blank");

	})
})
