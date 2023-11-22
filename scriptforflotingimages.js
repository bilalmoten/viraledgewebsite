document.addEventListener('scroll', function() {
    let scrolledHeight = window.scrollY;
    let parallaxImages = document.querySelectorAll('.parallax-image');

    // Adjust the speed factor as needed
    let speed = 0.5;

    parallaxImages.forEach(function(image, index) {
        image.style.transform = 'translate3d(0px, ' + -(scrolledHeight * speed * (index + 1)) + 'px, 0px)';
    });
});
