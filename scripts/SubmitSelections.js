import { saveSelections } from "./TransientState.js";

const handleSelectionSubmission = (clickEvent) => {
  if (clickEvent.target.id === "save-button") {
    saveSelections();
    console.log("Button Clicked");
  }
};

export const saveButton = () => {
  document.addEventListener("click", handleSelectionSubmission);
  return `<button id='save-button'>Save</button>`;
};

// Make sure each new object has a foreign key for each  of the chosen options

export const SubmissionList = async () => {
  // Fetch the submission from the API

  const response = await fetch("http://localhost:3000/customOrders?_expand=paint&_expand=interior&_expand=technology&_expand=wheel");
  const orders = await response.json();

  let html = `<div class="submissions">
                <h2>Orders</h2>
              `;
  
  const customSelections = orders.map((order) => {
    let orderId = String(order.id).padStart(3, "0");

    const paintColor = order.paint?.color || "Unknown color";
    const interiorMaterial = order.interior?.material || "Unknown material";
    const interiorColor = order.interior?.color || "Unknown color";
    const techPackage = order.technology?.package || "Unknown package";
    const wheelType = order.wheel?.type || "Unknown wheel type";
    const wheelDiameter = order.wheel?.diameter || "Unknown diameter";
    const wheelColor = order.wheel?.color || "Unknown color";

    const totalCost = (order.paint.price.price || 0) + (order.interior.price || 0) + (order.technology.price || 0) + (order.wheel.price || 0);

  
    return `<section class="order">
                <h3 class="order-item">#${orderId}</h3>
                <div class="order-item">Paint: ${paintColor}</div>
                <div class="order-item">Interior: ${interiorColor} ${interiorMaterial}</div>
                <div class="order-item">Technology: ${techPackage}</div>
                <div class="order-item">Wheels: ${wheelDiameter}" ${wheelColor} ${wheelType}</div>
                <div>Total Cost: $${totalCost}</div>
            </section>    
    `    

  });
  html += customSelections.join("");
  html += `</div>`;

  return html;
};