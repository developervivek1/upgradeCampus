
// on scroll navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
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