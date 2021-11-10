var modal = document.getElementById("id01");

/* const confetti = require("canvas-confetti");
import confetti from "canvas-confetti"; */

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.querySelector(".regbtn").addEventListener("click", runConfetti);

function runConfetti() {
  confetti;
}
