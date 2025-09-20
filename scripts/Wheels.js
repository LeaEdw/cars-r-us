export const choiceWheels = async () => {
  const response = await fetch("http://localhost:8088/wheels");
  const wheels = await response.json();

  // Add event listener...

  let html = `<h2>Wheels</h2>`;

  const wheelsHTML = wheels.map((wheel) => {
    return `<div>
                <option 
                    type="radio" 
                    name="wheel" 
                    value='${wheel.id}' 
                    data-price="${wheel.price}" /> 
                        ${wheel.metal}
            </div>`;
  });

  html += wheelsHTML.join("");

  return html
};
