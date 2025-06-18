import steps from "./data/data.js";

const container = document.getElementById("steps_container");

steps.forEach((step) => {
  const div = document.createElement("div");
  div.innerHTML = `
   <span class="text-[56px] text-color">${step.id}</span>
    <p class="text-lg max-w-[390px] hover:text-content hover:pb-[42px]">${step.text}</p>
  `;
  container.appendChild(div);
});
