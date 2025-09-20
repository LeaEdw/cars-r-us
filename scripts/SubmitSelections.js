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
