let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};

function portBtn() {
    alert("Maaf, demi menjaga privasi data perusahaan saya tidak bisa menampilkan project ini lebih dalam");
}

/* Animasi Scroll */
window.addEventListener('scroll', reveal);

    function reveal(){
      var reveals = document.querySelectorAll('.reveal');

      for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
		var revealbot = reveals[i].getBoundingClientRect().bottom;
        var revealpoint = 200;
		var revealbawah = 400;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
		if(revealbot < windowheight - revealbawah){
			reveals[i].classList.remove('active');
		}
      }
    }


window.addEventListener('scroll', kiri);

    function kiri(){
      var kiris = document.querySelectorAll('#kiri');

      for(var i = 0; i < kiris.length; i++){

        var windowheight = window.innerHeight;
        var kiritop = kiris[i].getBoundingClientRect().top;
        var kiribot = kiris[i].getBoundingClientRect().bottom;
        var kiripoint = 150;
        var kiribawah = 400;

        if(kiritop < windowheight - kiripoint){
          kiris[i].classList.add('active');
        }
        else{
			kiris[i].classList.remove('active');
        } 

		if(kiribot < windowheight - kiribawah){
			kiris[i].classList.remove('active');
		}
      }
    }


window.addEventListener('scroll', kanan);

    function kanan(){
      var kanans = document.querySelectorAll('#kanan');

      for(var i = 0; i < kanans.length; i++){

        var windowheight = window.innerHeight;
        var kanantop = kanans[i].getBoundingClientRect().top;
        var kananbot = kanans[i].getBoundingClientRect().bottom;
        var kananpoint = 150;
        var kananbawah = 400;

        if(kanantop < windowheight - kananpoint){
          kanans[i].classList.add('active');
        }
        else{
			kanans[i].classList.remove('active');
        } 

		if(kananbot < windowheight - kananbawah){
			kanans[i].classList.remove('active');
		}
      }
    }

    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const carouselChildrens = [...carousel.children];
    let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
    // Insert copies of the last few cards to beginning of carousel for infinite scrolling
    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });
    // Insert copies of the first few cards to end of carousel for infinite scrolling
    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });
    // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
    });
    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        // Records the initial cursor and scroll position of the carousel
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }
    const dragging = (e) => {
        if(!isDragging) return; // if isDragging is false return from here
        // Updates the scroll position of the carousel based on the cursor movement
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }
    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }
    const infiniteScroll = () => {
        // If the carousel is at the beginning, scroll to the end
        if(carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        }
        // If the carousel is at the end, scroll to the beginning
        else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }
        // Clear existing timeout & start autoplay if mouse is not hovering over carousel
        clearTimeout(timeoutId);
        if(!wrapper.matches(":hover")) autoPlay();
    }
    const autoPlay = () => {
        if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
        // Autoplay the carousel after every 2500 ms
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    }
    autoPlay();
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    

    function toggleFlip(element) {
        element.classList.toggle('flipped');
    }


    // More butttons
    let loadedItems = 4;
const itemsPerLoad = 4;
const portfolioBoxes = document.querySelectorAll('.portfolio-box');
const moreButton = document.querySelector('.more-button');
const closeButton = document.querySelector('.close-button');

function loadMore() {
    for (let i = loadedItems; i < loadedItems + itemsPerLoad && i < portfolioBoxes.length; i++) {
        portfolioBoxes[i].classList.remove('hidden');
    }
    
    loadedItems = Math.min(loadedItems + itemsPerLoad, portfolioBoxes.length);
    
    if (loadedItems >= portfolioBoxes.length) {
        moreButton.classList.add('hidden');
    }
    
    closeButton.classList.remove('hidden');
}

function showLess() {
    for (let i = portfolioBoxes.length - 1; i >= itemsPerLoad; i--) {
        portfolioBoxes[i].classList.add('hidden');
    }
    
    loadedItems = itemsPerLoad;
    
    moreButton.classList.remove('hidden');
    closeButton.classList.add('hidden');
}
// Initial setup
portfolioBoxes.forEach((box, index) => {
    if (index >= itemsPerLoad) {
        box.classList.add('hidden');
    }
});

if (portfolioBoxes.length <= itemsPerLoad) {
    moreButton.classList.add('hidden');
}

function showModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
    setTimeout(() => {
        modal.classList.add("show", "fade-in");
    }, 10);
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.remove("show");
    modal.classList.add("fade-out");
    setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("fade-out");
    }, 300);
}

// Event listener untuk menutup modal saat mengklik di luar
window.onclick = function(event) {
    if (event.target.classList.contains('modal') || event.target.classList.contains('modalb2')) {
        closeModal(event.target.id);
    }
}