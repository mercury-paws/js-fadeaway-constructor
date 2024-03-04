const $ = function (selector) {
  const elements = document.querySelectorAll(selector);

  // actual library functionality

  const library = {
    elements,
    addClass(className) {
      this.elements.forEach((element) => {
        element.classList.add(className);
      });
      return library;
    },
    // add the fadeout
    fadeOut(duration) {
      this.elements.forEach((element) => {
        let currentOpacity = 1;
        const decrement = 1 / (duration / 10);

        const fade = setInterval(() => {
          currentOpacity -= decrement;
          element.style.opacity = currentOpacity;
          if (currentOpacity <= 0) {
            clearInterval(fade);
            element.style.display = "none";
          }
        }, 10);
      });
      return library;
    },
  };
  return library;
};

$(".text").addClass("fade").fadeOut(1000);

const inputText = document.querySelector(".inputText");
const button = document.querySelector(".button");
const list = document.querySelector(".list");

button.addEventListener("click", function () {
  const newLI = document.createElement("LI");
  console.log(newLI);
  const liContent = document.createTextNode(inputText.value);
  console.log(liContent);
  newLI.appendChild(liContent);
  list.appendChild(newLI);
});
