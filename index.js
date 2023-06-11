// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "100px";
dodger.style.bottom = "0px";
dodger.style.left = "0px";

document.moveDodgerLeft("keydown", function (event) {
    console.log(event);
  });
  document.moveDodgerLeft("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left - 1}px`;
    }
  });
  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
  
    if ( left < 360) {
      dodger.style.left = `${left + 4}px`;
    }
  }