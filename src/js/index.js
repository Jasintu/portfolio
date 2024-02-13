let sections = [document.getElementById("section1"), document.getElementById("section2"), document.getElementById("section3"), document.getElementById("section4")];
let squares = [document.getElementById("square1"), document.getElementById("square2"), document.getElementById("square3"), document.getElementById("square4")]
let currentSectionIndex = 0;
let isScrolling = false;
squares[currentSectionIndex].classList.add('square_mark');
window.addEventListener("wheel", scrollHandler);
function scrollHandler(event) {
  if (!isScrolling) {
    isScrolling = true;
    setTimeout(() => {
      if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
        sections[currentSectionIndex].style.opacity = "0";
        squares[currentSectionIndex].classList.remove('square_mark');
        currentSectionIndex++;
        sections[currentSectionIndex].style.opacity = "1";
        squares[currentSectionIndex].classList.add('square_mark');
      } else if (event.deltaY < 0 && currentSectionIndex > 0) {
        sections[currentSectionIndex].style.opacity = "0";
        squares[currentSectionIndex].classList.remove('square_mark');
        currentSectionIndex--;
        sections[currentSectionIndex].style.opacity = "1";
        squares[currentSectionIndex].classList.add('square_mark');
      }
      isScrolling = false;
    }, 300);
    window.removeEventListener("wheel", scrollHandler);
    setTimeout(() => {
      window.addEventListener("wheel", scrollHandler);
    }, 300);
  }
}

console.log("Acho que você gostou do meu portfólio e provavelmente gostaria de saber como foi feito, né? :)")
console.log("Você pode conferir aqui : https://github.com/Jasintu/portfolio")