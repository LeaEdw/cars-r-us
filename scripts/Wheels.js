import { setWheels } from "./TransientState.js";

const handleWheelChoice = (event) => {
  if (event.target.name === "wheel") {
    let updatedWheelOption = parseInt(event.target.value);
    setWheels(updatedWheelOption);
    console.log(updatedWheelOption);
  }
};

export const choiceWheels = async () => {
  const response = await fetch("http://localhost:3000/wheels");
  const wheels = await response.json();

  document.addEventListener("change", handleWheelChoice);
  let html = `<h2>Wheels</h2>
                <select required name="wheel" id="wheels-dropdown">
                    <option  value="0" disabled selected > Select one </option>;
              `;

  const wheelsHTML = wheels.map((wheel) => {
    return `
                <option 
                    name="wheel" 
                    value="${wheel.id}" 
                    data-price="${wheel.price}" /> 
                        ${wheel.diameter}" ${wheel.type} - ${wheel.color}
            
            `;
  });

  html += wheelsHTML.join("");
  html += `</select>`;

  return html;
};
