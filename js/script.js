const title = document.querySelector("h1");
const original = title.textContent;
title.textContent = "";

[...original].forEach((letter, index) => {
  const span = document.createElement("span");
  span.textContent = letter;
  span.style.opacity = "0";
  span.style.display = "inline-block";
  span.style.transform = "translateY(18px)";
  span.style.transition = `all .7s ease ${index * 0.12}s`;
  title.appendChild(span);
});

window.addEventListener("load", () => {
  document.querySelectorAll("h1 span").forEach(span => {
    span.style.opacity = "1";
    span.style.transform = "translateY(0)";
  });
});
