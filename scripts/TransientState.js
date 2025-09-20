const transientState =  {
    paintId: 0,
    interiorId: 0,
    techId: 0,
    wheelId: 0
};

export const setPaintColor = (paintSelection) => {
    transientState.paintId = paintSelection;
};

export const setInterior = (interiorSelection) => {
    transientState.interiorId = interiorSelection;
};

export const setTechPackage = (techPackageSelection) => {
    transientState.techId = techPackageSelection;
};

export const setWheels = (wheelSelection) => {
    transientState.wheelId = wheelSelection
};

export const saveSelections = async () => {

 // Get the current transient state ...

    const customSelections = [ ... transientState ];

        // Validate before sending 

        if (
            customSelections.interiorId === 0 ||
            customSelections.paintId === 0||
            customSelections.techId === 0||
            customSelections.wheelId === 0
            
        ) { window.alert("Please complete all selections before submitting")
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

    const response = await fetch("http://localhost:8088/customOrders", postSelections);

    const newCustomOrder = new CustomEvent("newSelectionCreated");
    document.dispatchEvent(newCustomOrder);
    }

    
