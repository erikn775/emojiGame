let emoji = document.getElementById("emoji");


function moveEmojiLeft() {
    let leftNumbers = emoji.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left >= -100) {
      emoji.style.left = `${left - 6}px`;
    }
    else {
        emoji.style.left = "400px";
        emoji.innerHTML = "&#128518";
    }
} 

function moveEmojiRight() {
    let leftNumbers = emoji.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left >= -100) {
      emoji.style.left = `${left + 6}px`;
    }
    if (left >= 400) {
        emoji.style.left = "-100px";
        emoji.innerHTML = "&#128517";
    }
} 

function moveEmojiUp() {
    let leftNumbers = emoji.style.bottom.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left >= -100) {
        emoji.style.bottom = `${left + 6}px`;
      }
    if (left >= 476) {
        emoji.style.bottom = "-10px";
        emoji.innerHTML = "&#128523";
    }
}

function moveEmojiDown() {
    let leftNumbers = emoji.style.bottom.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left >= -100) {
        emoji.style.bottom = `${left - 6}px`;
      }
    else {
        emoji.style.bottom = "476px";
        emoji.innerHTML = "&#128521";
    }

}

  document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
      moveEmojiLeft();
    }

    if (event.key === "ArrowRight") {
        moveEmojiRight();
    }

    if (event.key === "ArrowUp") {
        moveEmojiUp();
    }

    if (event.key === "ArrowDown") {
        moveEmojiDown();
    }

    if (event.key === "Enter") {
        emoji.innerHTML = "&#128512";
    }
});
