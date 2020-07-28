// Changes Slider Round color and alignment when clicked on
import { myLibrary } from "./render-bookshelf";
import setLocalStorage from "./set-local-storage";

const readStatusToggle = (e) => {
  const event = e;
  // Get book id
  const indexSwitch = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.dataset
    .id;

  // Changes text, alignment and checked attribute
  if (myLibrary[indexSwitch].readStatus === true) {
    event.target.parentElement.parentElement.firstChild.nextSibling.textContent = "Not Read";
    event.target.style.textAlign = "right";
    event.target.checked = true;

    myLibrary[indexSwitch].readStatus = false; // Changes the readstatus object
    // Store Library into localStorage
    setLocalStorage(myLibrary);
  } else if (myLibrary[indexSwitch].readStatus === false) {
    event.target.parentElement.parentElement.firstChild.nextSibling.textContent = "Read";
    event.target.style.textAlign = "left";
    event.target.checked = false;

    myLibrary[indexSwitch].readStatus = true; // Changes the readstatus object

    // Store Library into localStorage
    setLocalStorage(myLibrary);
  }
};

export default readStatusToggle;
