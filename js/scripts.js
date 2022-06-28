$(document).ready(function () {
    var typed = new Typed('.typed',{
        strings : ["Web Developer", "iOS Developer"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
    
    var navigationOffset = document.getElementById('navigation').offsetHeight;
    $('.navbar-nav>li>a').on('click', function(){
        var collapse = document.getElementById('collapse').offsetHeight;
        var scroll= new SmoothScroll('a[href*="#"]',{
            speed: 300,
            offset: navigationOffset
        });
    });
    
});
