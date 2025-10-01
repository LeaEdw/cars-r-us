// Import the setInterior function from the transient state module...
import { setInterior } from "./TransientState.js";

// Create the handler function for the dropdown menu...

const handleInteriorChoice = (event) => {
    if (event.target.name === "interior") {
        let updatedInteriorOption = parseInt(event.target.value)
        setInterior(updatedInteriorOption);
        console.log(updatedInteriorOption)
    }
}

export const choiceInterior = async () => {
  const response = await fetch("http://localhost:3000/interiors");
  const interiors = await response.json();

// Add the event listener ...

document.addEventListener("change", handleInteriorChoice)

  let html = `<h2>Interior</h2>`;

  const interiorsHTML = interiors.map((interior) => {
    return `
            <div class="order-item">
                <input 
                    type="radio" 
                    name="interior" 
                    value="${interior.id}"
                    data-price="${interior.price}" />
                       ${interior.color} ${interior.material}
            </div>
        `;
  });

  html += interiorsHTML.join("");

  return html;
};
