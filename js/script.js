const hamberger = document.querySelector('header .navbar-toggler');
const navbarMenu = document.querySelector('header .navbar-collapse');
const overlay = document.querySelector('header .overlay');
const body = document.querySelector('body');
const limenu = document.querySelectorAll('header .navbar-nav li');

// on scroll navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}


// mega menu
 document.addEventListener("DOMContentLoaded", function(){
      /////// Prevent closing from click inside dropdown
      document.querySelectorAll('.dropdown-menu').forEach(function(element){
          element.addEventListener('click', function (e) {
              e.stopPropagation();
          });
      })
  }); 
  // DOMContentLoaded  end


// hamberger menu
hamberger.addEventListener('click',()=>
{
    if(!navbarMenu.classList.contains('show'))
    {
      overlay.classList.add('active');
      body.style.overflow="hidden";
    }
})

overlay.addEventListener('click',()=>
{
  if(navbarMenu.classList.contains('show'))
  {
    navbarMenu.classList.remove('show');
    overlay.classList.remove('active');
    body.style.overflow="auto";
  }
})

// limenu.forEach(elem => {
//   elem.addEventListener('click',(e)=>
//   {
//     let navlink = e.target.closest('li').querySelector('.nav-link');
//     let active_navlink = e.target.closest('ul').querySelector('.nav-link.show');
//     if(!navlink.classList.contains('show'))
//     {
//       active_navlink.classList.remove('show');
//       navlink.classList.add('show');
//     }
//   })
// });