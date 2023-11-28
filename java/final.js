
const slides = document.querySelectorAll(".slide");

 
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});



const nextSlide = document.querySelector(".btn-next");


let curSlide = 0;

let maxSlide = slides.length - 1;


nextSlide.addEventListener("click", function () {
  
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }


  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});


 slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });

  let answers = document.querySelectorAll(".accordion"); 
  answers.forEach((event) => { 
    event.addEventListener("click", () => { 
      if (event.classList.contains("active")) { 
        event.classList.remove("active"); 
      } else { 
        event.classList.add("active"); 
      } 
    }); 
  });


