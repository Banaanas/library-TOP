import elementsDOM from "./elements-DOM";
import deleteBookButton from "./delete-book/delete-book";
import readStatusToggle from "./read-status-toggle";
import addBookToLibrary from "./add-book/add-book-library";
import setModalPlaceholders from "./add-book/set-modal-placeholders";

// Add all DOM Event Listeners
const addAllEventListeners = () => {
  // Open the modal box
  elementsDOM.openModalButton.addEventListener("click", () => {
    elementsDOM.bookAddCardModal.style.display = "block";
    // Reset all placeholder values
    setModalPlaceholders();
  });

  // Close the modal box when clicked on X
  elementsDOM.closeModal.addEventListener("click", () => {
    elementsDOM.bookAddCardModal.style.display = "none";
  });

  // Add Delete function to all delete button / Event Delegation
  elementsDOM.bookShelf.addEventListener("click", (event) => {
    if (
      event.target.className !== "delete-button"
      && event.target.className !== "delete-image"
    ) {
      return;
    }

    deleteBookButton(event);
  });

  // Add Switch Toggle function to all switch button / Event Delegation
  elementsDOM.bookShelf.addEventListener("click", (event) => {
    if (event.target.className !== "slider round") {
      return;
    }
    readStatusToggle(event);
  });

  // AddBook function when addbook button is pushed
  elementsDOM.addBookButton.addEventListener("click", addBookToLibrary);

  // AddBook function when Enter Key is pushed
  // Clear placeholder value when input focused
  elementsDOM.allValues.forEach((item, index) => {
    elementsDOM.allValues[index].addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        addBookToLibrary();
      }
    });

    // eslint-disable-next-line no-unused-vars
    elementsDOM.allValues[index].addEventListener("focus", (event) => {
      if (index !== 3) {
        elementsDOM.allValues[index].placeholder = "";
      }
    });
  });
};

export default addAllEventListeners;
