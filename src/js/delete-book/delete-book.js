import { myLibrary } from "../render-bookshelf";
import setLocalStorage from "../set-local-storage";

// Delete Book Button
const deleteBookButton = (e) => {
  const event = e;
  // HTML BookCard
  if (event.target.className === "delete-button") {
    // Remove the HTML BookCard
    event.target.parentElement.parentElement.parentElement.remove();
  } else if (event.target.className === "delete-image") {
    // Remove the HTML BookCard
    event.target.parentElement.parentElement.parentElement.parentElement.remove();
  }

  // Select all book-containers from all bookcards
  const allBookCardsContainers = document.querySelectorAll(".book-container");

  // Update all data-id after one bookcard was removed
  allBookCardsContainers.forEach((item, index) => {
    allBookCardsContainers[index].dataset.id = index;
  });

  // Delete the object from myLibrary array
  myLibrary.splice(event.target.parentNode.dataset.id, 1);

  // Update each book id after one has been deleted
  myLibrary.forEach((item, index) => {
    myLibrary[index].id = index;
  });

  // Store Library into localStorage
  setLocalStorage(myLibrary);
};

export default deleteBookButton;
