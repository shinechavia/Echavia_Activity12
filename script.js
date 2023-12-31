// Get references to the input element, button, and task list
const inputElement = document.getElementById("todoInput");
const addButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Function to create a new task list item with a delete and done button
function createTaskListItem(taskText) {
// Create a new <li> element
const listItem = document.createElement("li");

// Create a div to hold the task text and buttons
const contentContainer = document.createElement("div");
contentContainer.style.display = "flex";
contentContainer.style.justifyContent = "space-between";
contentContainer.style.alignItems = "center";

// Create a <span> element for the task text
const taskSpan = document.createElement("span");
taskSpan.textContent = taskText;

// Create a div to hold the buttons
const buttonContainer = document.createElement("div");

// Create a done button with a green checkmark icon
const doneButton = document.createElement("button");
doneButton.innerHTML = `
<span class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
</span>
`;

// Create a delete button
const deleteButton = document.createElement("button");
deleteButton.innerHTML = `
<span class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
</span>
`;

// Add a click event listener to the done button
doneButton.addEventListener("click", function () {
// Toggle the "done" class on the task text
taskSpan.classList.toggle("done");
});

// Add a click event listener to the delete button
deleteButton.addEventListener("click", function () {
// Remove the parent <li> element when the delete button is clicked
taskList.removeChild(listItem);
});

// Append the done and delete buttons to the button container
buttonContainer.appendChild(doneButton);
buttonContainer.appendChild(deleteButton);

// Append the task text span to the content container
contentContainer.appendChild(taskSpan);

// Append the button container to the content container
contentContainer.appendChild(buttonContainer);

// Append the content container to the <li> element
listItem.appendChild(contentContainer);

// Apply styles to the delete button to make it red and change color on hover
deleteButton.style.backgroundColor = "#ce483f"; // Red background color
deleteButton.style.color = "white"; // Text color
deleteButton.style.border = "none"; // Remove the default button border
deleteButton.style.borderRadius = "5px"; // Add a border radius for rounded corners
deleteButton.style.padding = "5px 15px"; // Add padding to the delete button
deleteButton.style.marginLeft = "3px"; // Add margin to the left of the delete button
deleteButton.style.cursor = "pointer"; // Change cursor on hover
deleteButton.style.marginBottom = "10px"; // Add margin to the bottom of the done button

// Change text color on hover
deleteButton.addEventListener("mouseenter", function () {
deleteButton.style.color = "white"; // Change text color to white on hover
deleteButton.style.transform = "scale(1.1)"; // Zoom in by 10%
});

deleteButton.addEventListener("mouseleave", function () {
deleteButton.style.color = "white"; // Restore text color on mouse leave
deleteButton.style.transform = "scale(1)"; // Restore the original size
});

// Apply styles to the done button to make it a green checkmark
doneButton.style.backgroundColor = "#43ce7d"; // Green background color
doneButton.style.color = "white"; // Text color
doneButton.style.border = "none"; // Remove the default button border
doneButton.style.borderRadius = "5px"; // Add a border radius for rounded corners
doneButton.style.padding = "5px 15px"; // Add padding to the delete button
doneButton.style.marginRight = "10px"; // Add margin to the left of the delete button
doneButton.style.cursor = "pointer"; // Change cursor on hover
doneButton.style.marginBottom = "10px"; // Add margin to the bottom of the done button

// Change text color on hover
doneButton.addEventListener("mouseenter", function () {
doneButton.style.color = "white"; // Change text color to white on hover
doneButton.style.transform = "scale(1.1)"; // Zoom in by 10%
});

doneButton.addEventListener("mouseleave", function () {
doneButton.style.color = "white"; // Restore text color on mouse leave
doneButton.style.transform = "scale(1)"; // Zoom in by 10%
});

// Align the buttons horizontally
buttonContainer.style.display = "flex";
buttonContainer.style.flexDirection = "row"; // Change to "row" for horizontal alignment

return listItem;
}
// Add a click event listener to the "Add Task" button
addButton.addEventListener("click", function () {
// Get the value of the input field
const taskText = inputElement.value.trim();

// Check if the input is not empty
if (taskText !== "") {
// Create a new task list item with delete and done buttons
const listItem = createTaskListItem(taskText);

// Append the task list item to the task list
taskList.appendChild(listItem);

// Clear the input field
inputElement.value = "";
} else {
console.log("Input is empty"); // Add this line for debugging
alert("Please enter a task before adding it to the list.");
}
});