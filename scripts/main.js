// Imports from the module which are used to generate the HTML

import { choicePaints } from "./Paints.js";
import { choiceTech } from "./Technologies.js";
import { choiceWheels } from "./Wheels.js";
import { choiceInterior } from "./Interiors.js";
import { saveButton } from "./SubmitSelections.js";
import { SubmissionList } from "./SubmitSelections.js";

// Selects the container in which the HTML will be generated using the imported functions

const container = document.querySelector("#container");

// The function that handles the rendering of the DOM

const render = async () => {
  const paintOptionHTML = await choicePaints();
  const interiorOptionHTML = await choiceInterior();
  const wheelOptionHTML = await choiceWheels();
  const techOptionHTML = await choiceTech();
  const buttonHTML = saveButton();
  const submissionHTML = await SubmissionList();

  const composedHTML = `

        <article class="choices">
            <section class="paint options">
                ${paintOptionHTML}
            </section>
        
            <section class="interior options">
                ${interiorOptionHTML}
            </section>

            <section class="package options">
                ${techOptionHTML}
            </section>

            <section class="wheel options">
                ${wheelOptionHTML}
            </section>

            <div class="button options">
                ${buttonHTML}
            </div>
        </article>
        <aside class="customOrders">
            ${submissionHTML}
        </aside>
    `;

  container.innerHTML = composedHTML;
};

// Calls the function that was created to generate the HTML in the DOM
document.addEventListener("stateChanged", (event) => {
  console.log("State of data has changed. Regenerating HTML...");
  render();
});

render();
// Trigger a special event "stateChanged" when a new order is saved- have the
// render function listen for that event so that the DOM can be re-rendered
