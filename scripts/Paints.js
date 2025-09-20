// import the handler function from the Transient State Module

export const choicePaints = async () => {
    const response = await fetch("http://localhost:8088/paints");
    const paints = await response.json();

    // Add here event listener for the handler function ...

    let html = `<h2>Paints</h2>`;

    const paintsHTML = paints.map((paint) => {
        return `
            <div>
                <input 
                    type="radio" 
                    name="paint" 
                    value="${paint.id}"
                    data-price="${paint.price}"/>
                        ${paint.color}
            </div>
        `
    });

    html += paintsHTML.join("");

    return html;
};