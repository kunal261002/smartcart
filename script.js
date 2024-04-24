let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
	searchForm.classList.toggle('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
	loginForm.classList.toggle('active');
	searchForm.classList.remove('active');
	navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
	navbar.classList.toggle('active');
	searchForm.classList.remove('active');
	loginForm.classList.remove('active');
}

window.onscroll = () =>
{
	searchForm.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}



// Get all elements with class "btn" and attach click event listener to each
var buttons = document.getElementsByClassName("btn");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        // Get the corresponding hidden content element for the clicked button
        var hiddenContent = this.parentNode.querySelector(".hidden-content");
        if (hiddenContent) {
            // Toggle the display of hidden content
            if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
                hiddenContent.style.display = "block";
                this.innerText = "Read Less";
            } else {
                hiddenContent.style.display = "none";
                this.innerText = "Read More";
            }
        }
    });
}




var swiper = new Swiper(".product-slider", {
    loop: true, // Enables looping of slides
    spaceBetween: 20, // Space between slides in pixels
    autoplay: { // Autoplay settings
        delay: 7500, // Delay between slides in milliseconds
        disableOnInteraction: false, // Autoplay continues even if user interacts with the slider
    },
    breakpoints: { // Breakpoints for responsive design
        0: {
            slidesPerView: 1, // Number of slides per view at screen width <= 0px
        },
        768: {
            slidesPerView: 2, // Number of slides per view at screen width <= 768px
        },
        1020: {
            slidesPerView: 3, // Number of slides per view at screen width <= 1020px
        },
    },
});



