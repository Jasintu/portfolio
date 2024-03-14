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
        sections[currentSectionIndex].style.visibility = "hidden";
        squares[currentSectionIndex].classList.remove('square_mark');
        sections[currentSectionIndex].style.animation = "none";
        currentSectionIndex++;
        sections[currentSectionIndex].style.opacity = "1";
        sections[currentSectionIndex].style.visibility = "visible";
        sections[currentSectionIndex].style.animation = "animation_background 0.4s ease";
        squares[currentSectionIndex].classList.add('square_mark');
      } else if (event.deltaY < 0 && currentSectionIndex > 0) {
        sections[currentSectionIndex].style.opacity = "0";
        sections[currentSectionIndex].style.visibility = "hidden";
        squares[currentSectionIndex].classList.remove('square_mark');
        sections[currentSectionIndex].style.animation = "none";
        currentSectionIndex--;
        sections[currentSectionIndex].style.opacity = "1";
        sections[currentSectionIndex].style.animation = "animation_background_reverse 0.4s ease";
        sections[currentSectionIndex].style.visibility = "visible";
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

function changeLabelStyle(labelId) {
  var label = document.getElementById(labelId);
  label.classList.add('focus');
}

function restoreLabelStyle(labelId) {
  var label = document.getElementById(labelId);
  label.classList.remove('focus');
}

let startY;

window.addEventListener('touchstart', handleTouchStart, false);
window.addEventListener('touchmove', handleTouchMove, false);

function handleTouchStart(event) {
    startY = event.touches[0].clientY;
}

function handleTouchMove(event) {
        if (!startY) {
            return;
        }

        let currentY = event.touches[0].clientY;
        let deltaY = currentY - startY;

        if (deltaY < 0 && currentSectionIndex <= 2) {
          sections[currentSectionIndex].style.opacity = "0";
        sections[currentSectionIndex].style.visibility = "hidden";
        squares[currentSectionIndex].classList.remove('square_mark');
        sections[currentSectionIndex].style.animation = "none";
        currentSectionIndex++;
        sections[currentSectionIndex].style.opacity = "1";
        sections[currentSectionIndex].style.visibility = "visible";
        sections[currentSectionIndex].style.animation = "animation_background 0.4s ease";
        squares[currentSectionIndex].classList.add('square_mark');
        } else if (deltaY > 0 && currentSectionIndex >= 1) {
          sections[currentSectionIndex].style.opacity = "0";
        sections[currentSectionIndex].style.visibility = "hidden";
        squares[currentSectionIndex].classList.remove('square_mark');
        sections[currentSectionIndex].style.animation = "none";
        currentSectionIndex--;
        sections[currentSectionIndex].style.opacity = "1";
        sections[currentSectionIndex].style.animation = "animation_background_reverse 0.4s ease";
        sections[currentSectionIndex].style.visibility = "visible";
        squares[currentSectionIndex].classList.add('square_mark');
        }
        startY = null;
    }
  
    console.log("Você gostou do meu portfólio? gostaria de saber como foi feito?")
    console.log("Você pode conferir aqui : https://github.com/Jasintu/portfolio")
    console.log("Obrigado pelo seu tempo! :)")