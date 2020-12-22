import { myLibrary, renderBookshelf } from "../render-bookshelf";
import addAllEventListeners from "../add-all-event-listeners";
import setModalPlaceholders from "../add-book/set-modal-placeholders";
import defaultLibrary from "./default-library";

// Initiate Library
const initLibrary = () => {
  addAllEventListeners();

  // Initiate with localStorage if there is one
  const isLocalStoragePresent = localStorage.getItem("myLibraryArray");

  if (isLocalStoragePresent) {
    const localStorageLibraryArray = JSON.parse(isLocalStoragePresent);
    // Empty projectsArray from everything then push all localStorageProjectsArray into it
    myLibrary.splice(0, Infinity, ...localStorageLibraryArray);
    renderBookshelf(myLibrary);
    return;
  }

  // If no previous library stored into localStorage, implement Default Library
  defaultLibrary();

  // Set Add Book Modal placeholders
  setModalPlaceholders();

  // Render the Library
  renderBookshelf(myLibrary);
};

export default initLibrary;
