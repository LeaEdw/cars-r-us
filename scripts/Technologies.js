import { setTechPackage } from "./TransientState.js";

const handleTechChoice = (event) => {
  if (event.target.name === "technology") {
    let updatedTechOption = parseInt(event.target.value)
    setTechPackage(updatedTechOption);
    console.log(updatedTechOption)
  }
}

export const choiceTech = async () => {
  const response = await fetch("http://localhost:8088/technology");
  const technologies = await response.json();

  // The event listener ...
  
  document.addEventListener("change", handleTechChoice)

  let html = `<h2>Technology</h2>`;

  const technologyHTML = technologies.map((tech) => {
    return `
            <div>
                <input 
                    type="radio" 
                    name="technology" 
                    value="${tech.id}"
                    data-price="${tech.price}" />
                        ${tech.package}
            </div>
        `;
  });

  html += technologyHTML.join("");

  return html;
};
