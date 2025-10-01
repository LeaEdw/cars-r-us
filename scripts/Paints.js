// import the handler function from the Transient State Module
import { setPaintColor } from "./TransientState.js";

const handlePaintChoice = (event) => {
    if (event.target.name === "paint") {
        let updatedPaintOption = parseInt(event.target.value)
        setPaintColor(updatedPaintOption);
        console.log(updatedPaintOption)
    }
}

export const choicePaints = async () => {
    const response = await fetch("http://localhost:3000/paints");
    const paints = await response.json();

// The event listener for the handler function ...

document.addEventListener("change", handlePaintChoice)

    let html = `<h2>Paint</h2>`;

    const paintsHTML = paints.map((paint) => {
        return `
            <div>
                <input 
                    type="radio" 
                    name="paint" 
                    value="${paint.id}"
                    data-price="${paint.price}" />
                        ${paint.color}
            </div>
        `
    });

    html += paintsHTML.join("");

    return html;
};