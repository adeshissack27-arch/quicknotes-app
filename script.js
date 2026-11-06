
// Select the HTML elements
const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const notesList = document.querySelector("#notes-list");
const noteCount = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");

// Store notes in an array
let notes = [];

// Display notes on the page
function render() {
    notesList.replaceChildren();

    notes.forEach((note) => {
        const li = document.createElement("li");
        li.classList.add(`category-${note.category}`);

        const text = document.createElement("p");
        text.textContent = note.text;

        const category = document.createElement("span");
        category.textContent = `Category: ${note.category}`;
        category.classList.add("note-meta");

        const date = document.createElement("span");
        date.textContent = note.createdAt;
        date.classList.add("note-meta");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");

        li.append(text, category, date, deleteButton);
        notesList.appendChild(li);
    });

    // Display the number of notes
    noteCount.textContent = `You have ${notes.length} notes.`;
}

// Add a new note
noteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = noteInput.value.trim();
    const category = noteCategory.value;

    if (text === "") {
        errorMessage.textContent = "Please type a note first.";
        return;
    }

    const newNote = {
        id: Date.now(),
        text: text,
        category: category,
        createdAt: new Date().toLocaleString()
    };

    notes.push(newNote);

    errorMessage.textContent = "";
    noteInput.value = "";

    render();
});

// Display the initial list
render();
