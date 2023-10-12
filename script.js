// Array to store the image filenames
const imageFilenames = [];

for (let i = 1; i <= 8; i++) {
  imageFilenames.push(`images/sc${i}.png`);
}


function openNav() {
    document.getElementById("sidebar").style.width = "250px"; //changes the width of the sidebar making it visible
  }
  
  function closeNav() {
    document.getElementById("sidebar").style.width = "0"; //changes the width of the sidebar making it invisible
  }

// Function to create and add slideshow slides
function createSlides() {
  const slideshowContainer = document.querySelector(".slideshow-container");

  imageFilenames.forEach((filename, index) => {
      const slide = document.createElement("div");
      slide.classList.add("slide", "fade");
      const img = document.createElement("img");
      img.src = filename;
      img.alt = `Slide ${index + 1}`;
      slide.appendChild(img);
      slideshowContainer.appendChild(slide);
  });
}

createSlides(); // Calls the function to create slides

let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = "0";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1;
  }
  slides[slideIndex - 1].style.opacity = "1";
  setTimeout(showSlides, 1000); 
}

showSlides(); // Calls the function to show slides