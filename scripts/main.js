import { choicePaints } from "./Paints.js";
import { choiceTech } from "./Technologies.js";
import { choiceWheels } from "./Wheels.js";

const container = document.querySelector("#container");

const render = async () => {
  const paintOptionHTML = await choicePaints();
const wheelOptionHTML = await choiceWheels();
  const techOptionHTML = await choiceTech();

  const composedHTML = `

        <article class="paint options">
            <section>
                ${paintOptionHTML}
            </section>

            <section class="material options">
                
            </section>

            <section class="package options">
                ${techOptionHTML}
            </section>

            <section class="wheel options">
                ${wheelOptionHTML}
            </section>

            <section class="button">

            </section>
        
        </article>

        <article class="customOrders">

        </article>
    `;

  container.innerHTML = composedHTML;
};

render();
