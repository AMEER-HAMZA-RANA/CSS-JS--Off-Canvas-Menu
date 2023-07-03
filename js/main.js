const button = document.querySelector("button");
const body = document.body;

button.addEventListener("click", (event) => {
  // siteContainer.classList.add(offsite-is-open);
  // offsiteContainer.classList.add(offsite-is-open);
  body.classList.toggle("offsite-is-open");
});
