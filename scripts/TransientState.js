// Set up a transient state data structure and provide the initial values
const transientState = {
  paintId: 0,
  interiorId: 0,
  technologyId: 0,
  wheelId: 0,
  id: 0,
};

// Functions to modify each property of the transient state objectHelp
export const setPaintColor = (paintSelection) => {
  transientState.paintId = paintSelection;
};

export const setInterior = (interiorSelection) => {
  transientState.interiorId = interiorSelection;
};

export const setTechPackage = (techSelection) => {
  transientState.technologyId = techSelection;
};

export const setWheels = (wheelSelection) => {
  transientState.wheelId = wheelSelection;
};

export const saveSelections = async () => {
  // Get the current transient state ...

  const customSelections = { ...transientState };

  // Validate before sending

  if (
    customSelections.interiorId === 0 ||
    customSelections.paintId === 0 ||
    customSelections.technologyId === 0 ||
    customSelections.wheelId === 0
  ) {
    window.alert("Please complete all selections before submitting");
    return;
  }

  const postSelections = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(customSelections),
  };

  // Send the data to the API

  const response = await fetch(
    "http://localhost:3000/customOrders",
    postSelections
  );

  const newCustomOrder = new CustomEvent("stateChanged");
  document.dispatchEvent(newCustomOrder);
};

// Make sure that the transient state is reset to zero after submission
