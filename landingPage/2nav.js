//nav scroll <--works!
var prevScrollpos = window.pageYOffset;
window.onscroll = function(){
var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-65px";
        }
    prevScrollpos = currentScrollPos;
};


//Responsive Menu toggle event listener <--DROPDOWN MENU WORKS CHERYL NEED TO STYLE
const menuToggleEl = document.querySelector(".menu-toggle");
function toggleMenuCallback(){
    var mobileNavEl = document.querySelector(".mobile-nav");
    mobileNavEl.classList.toggle('mobile-nav-visible');
}
menuToggleEl.addEventListener("click", toggleMenuCallback);


//Active nav item event listener <--doesn't work -- why?
const navEl = document.querySelector(".nav");
navEl.addEventListener("click", navClickCallback);
function navClickCallback(event) {
    var target = event.target;
    var activeNavItem = document.querySelector(".nav-active");

    if (activeNavItem) {
        activeNavItem.classList.remove("nav-active");
    }
    target.classList.add("nav-active");
}


//nav underline hover <--this does not work
// (function(){
//     const target = document.querySelector(".target");
//     const links = document.querySelectorAll(".navItemsContainer a");
//     const colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];
  
//     function mouseenterFunc() {
//         if (!this.parentNode.classList.contains("active")) {
//             for (let i = 0; i < links.length; i++) {
//                 if (links[i].parentNode.classList.contains("active")) {
//         links[i].parentNode.classList.remove("active");
//         }
//         links[i].style.opacity = "0.25";
//         }
     
//         this.parentNode.classList.add("active");
//         this.style.opacity = "1";
     
//         const width = this.getBoundingClientRect().width;
//         const height = this.getBoundingClientRect().height;
//         const left = this.getBoundingClientRect().left + window.pageXOffset;
//         const top = this.getBoundingClientRect().top + window.pageYOffset;
//         const color = colors[Math.floor(Math.random() * colors.length)];
   
//             target.style.width = `${width}px`;
//             target.style.height = `${height}px`;
//             target.style.left = `${left}px`;
//             target.style.top = `${top}px`;
//             target.style.borderColor = color;
//             target.style.transform = "none";
//         }
//     }

//     for (let i = 0; i < links.length; i++) {
//         links[i].addEventListener("click", (e) => e.preventDefault());
//         links[i].addEventListener("mouseenter", mouseenterFunc);
//     }

//     function resizeFunc() {
//         const active = document.querySelector(".navItemsContainer li.active");
    
//         if (active) {
//           const left = active.getBoundingClientRect().left + window.pageXOffset;
//           const top = active.getBoundingClientRect().top + window.pageYOffset;
    
//           target.style.left = `${left}px`;
//           target.style.top = `${top}px`;
//         }
//       }
    
//       window.addEventListener("resize", resizeFunc);

// })();

//scrollReveal <-this does not work
// (function scrollReveal() {
//     window.sr = ScrollReveal();
    
//     sr.reveal('.card-box', {
//       duration   : 600,
//       distance   : '20px',
//       easing     : 'ease-out',
//       origin     : 'bottom',
//       reset      : true,
//       scale      : 1,
//       viewFactor : 0,
//       afterReveal  : revealChildren,
//     }, 150);
    
//       var revealChildren = sr.reveal('.card-title2, .card-text', {
//       duration   : 500,
//       scale      : 1,
//       distance   : '20px',
//       origin     : 'bottom',
//       reset      : true,
//       easing     : 'ease-out',
//       viewFactor : 1,
//     }, 75);
//   })();