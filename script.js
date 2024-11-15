// Form submission and displaying comments
document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const message = event.target[2].value;
    
    const commentDisplay = document.getElementById("commentsDisplay");
    const comment = document.createElement("p");
    comment.textContent = `${name}: ${message}`;
    
    commentDisplay.appendChild(comment);
    
    event.target.reset();
});

// Image Carousel Functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.image-slider .slide');

function showNextSlide() {
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].classList.add('active');
}

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);
