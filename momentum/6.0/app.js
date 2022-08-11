const body = document.querySelector("body");

function handleTitleClick() {
  const wframe = window.innerWidth;
  const resizedTomatoClass = "resizedTomato";
  const resizedCyanClass = "resizedCyan";
  if (body.classList.contains(resizedTomatoClass)) {
    body.classList.remove(resizedTomatoClass);
    body.classList.add(resizedCyanClass);
  } else {
    body.classList.remove(resizedCyanClass);
    body.classList.add(resizedTomatoClass);
  }
}

window.addEventListener("resize", handleTitleClick);
