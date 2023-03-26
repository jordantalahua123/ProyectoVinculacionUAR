/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var belectro = document.getElementById("electro");
var bmeca = document.getElementById("meca");
var bsoftware = document.getElementById("soft");
var baeronautica = document.getElementById("aero");
var delectro = document.getElementById("delectro");
var dmeca = document.getElementById("dmeca");
var daero = document.getElementById("daero");
var dsoft = document.getElementById("dsoft");

belectro.addEventListener("click", function() {
    delectro.style.display = "block";
    dmeca.style.display = "none";
    daero.style.display = "none";
    dsoft.style.display = "none";
});

bmeca.addEventListener("click", function() {
    delectro.style.display = "none";
    dmeca.style.display = "block";
    daero.style.display = "none";
    dsoft.style.display = "none";
});

bsoftware.addEventListener("click", function() {
    delectro.style.display = "none";
    dmeca.style.display = "none";
    daero.style.display = "none";
    dsoft.style.display = "block";
});

baeronautica.addEventListener("click", function() {
    delectro.style.display = "none";
    dmeca.style.display = "none";
    daero.style.display = "block";
    dsoft.style.display = "none";
});
