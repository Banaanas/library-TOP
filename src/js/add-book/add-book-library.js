// Create new book and push it into myLibrary array
import BookFactory from "../book/book-factory";
import elementsDOM from "../elements-DOM";
import { myLibrary, renderBookshelf } from "../render-bookshelf";
import setModalPlaceholders from "./set-modal-placeholders";
import setLocalStorage from "../set-local-storage";
import errorMessage from "./modal-error-message";

// Push the new book into myLibrary array
const addBookToLibrary = () => {
  // addBookToLibrary only works if each field is filled
  if (
    elementsDOM.allValues[0].value === ""
    || elementsDOM.allValues[1].value === ""
    || elementsDOM.allValues[2].value === ""
    || elementsDOM.allValues[3].value === ""
  ) {
    errorMessage("Please, fill all the fields");
    return;
  }

  if (elementsDOM.allValues[2].value > new Date().getFullYear()) {
    errorMessage("Something is wrong with your date");
    return;
  }

  if (elementsDOM.allValues[2].value > new Date().getFullYear()) {
    errorMessage("Something is wrong with your date");
    return;
  }

  const newBook = new BookFactory(
    myLibrary.length, // set new Book ID
    elementsDOM.allValues[0].value, // Title
    elementsDOM.allValues[1].value, // Author
    elementsDOM.allValues[2].value, // Year of Publication
    elementsDOM.allValues[3].value, // Number of Pages
    elementsDOM.allValues[4].value, // Book Cover
    // readStatus is set just after
  );

  myLibrary.push(newBook);

  // Set new book object readStatus value
  if (elementsDOM.readStatusYes.checked === true) {
    newBook.readStatus = true;
  } else {
    newBook.readStatus = false;
  }

  renderBookshelf(myLibrary);

  // Reset all AddBook Card values
  elementsDOM.allValues.forEach((item, index) => {
    elementsDOM.allValues[index].value = "";
  });

  // Reset all placeholder values
  setModalPlaceholders();

  // Store Library into localStorage
  setLocalStorage(myLibrary);
};

export default addBookToLibrary;
