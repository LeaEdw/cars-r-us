import { setTechPackage } from "./TransientState.js";

const handleTechChoice = (event) => {
  if (event.target.name === "tech") {
    let updatedTechOption = parseInt(event.target.value)
    setTechPackage(updatedTechOption);
    console.log(updatedTechOption)
  }
};

export const choiceTech = async () => {
  const response = await fetch("http://localhost:3000/technologies");
  const technologies = await response.json();

  // The event listener ...
  
  document.addEventListener("change", handleTechChoice)

  let html = `<h2>Technology</h2>
                <select required name="tech" id="tech-dropdown" class="order-item"
>
                    <option  value="0" disabled selected > Select one </option>;
              `

  const technologyHTML = technologies.map((tech) => {
    return `
                <option 
                    name="tech" 
                    value="${tech.id}" 
                    data-price="${tech.price}" /> 
                        ${tech.package}
            `;
  });

  html += technologyHTML.join("");
  html += `</select>`

  return html;
};
