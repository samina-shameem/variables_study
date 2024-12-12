//select DOM elements
const title = document.getElementById("title");//title element.
const nameInput = document.getElementById("nameInput");//input field.
const displayButton = document.getElementById("displayButton");//button.
const output = document.getElementById("output");//output area.

//add an event listner to the button.
displayButton.addEventListener("click", () => {

    const userName = nameInput.value;//store the input value in a variable.

    //store the input value in a variable.
    if (userName.trim() === "") {

        //if input is empty,show a warnig.
        output.textContent = "Please enter your name";
        output.style.color = "red";//set text color to red for the warning.

    } else {
        //if input is valid display the name
        output.textContent = `Hello, ${userName}!`;
        output.style.color = "#007bff" ;//reset text color to blue

    }

});