// Imports from the module which are used to generate the HTML

import { choicePaints } from "./Paints.js";
import { choiceTech } from "./Technologies.js";
import { choiceWheels } from "./Wheels.js";
import { choiceInterior } from "./Interiors.js";
import { saveButton } from "./SubmitSelections.js";

// Selects the container in which the HTML will be generated using the imported functions

const container = document.querySelector("#container");

// The function that handles the rendering of the DOM

const render = async () => {
  const paintOptionHTML = await choicePaints();
  const interiorOptionHTML = await choiceInterior();
  const wheelOptionHTML = await choiceWheels();
  const techOptionHTML = await choiceTech();
  const buttonHTML = await saveButton();

  const composedHTML = `

        <article class="paint options">
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

            <section class="button options">
                ${buttonHTML}
            </section>
        
        </article>

        <article class="customOrders">

        </article>
    `;

  container.innerHTML = composedHTML;
};

// Calls the function that was created to generate the HTML in the DOM

render();
