document.getElementById('menu-icon').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default behavior of the button
  // Your button's functionality here
});

/*==============================Toggle icon navbar================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

/*==============================Active Link Section ================================*/
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let hight = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + hight) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });


  /*==============================Sticky Navbar================================*/

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /*==============================remove toggle icon and navbar whenlink scroll section================================*/


  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};


 
 
/*==============================Scroll Reveal================================*/
ScrollReveal({
  //  reset: true,
   distance:'80px',
   duration:2000,
   delay:200
  });

  ScrollReveal().reveal('.home-content.heading,.my_skill,.heading h3 ,.contact h2 ,.about-content h2', { origin:'top'});
  ScrollReveal().reveal('.home-img .services-container,.portfolio-box, .contact form ', { origin:'bottom'});
  ScrollReveal().reveal('.home-content h1 , .about-img,.skill-container', { origin:'bottom'});
  ScrollReveal().reveal('.home-content p , .about-content ', { origin:'right'});
  ScrollReveal().reveal('.skill-container  ', { origin:'left'});

/*==============================typed js ================================*/

const typed = new Typed('.multiple-text',{
  strings:['Programmer','Frontend Developer','Backend Developer'],
  typespeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true



});




/*==============================button section================================*/
var animateButton = function (e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  e.target.classList.add('animate');
  setTimeout(function () {
    e.target.classList.remove('animate');
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}


