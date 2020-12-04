// Displays all books from the library array to HTML
import genericBookCover from "../images/book.svg";
import featherImg from "../images/feather.svg";
import deleteImg from "../images/delete.svg";
import elementsDOM from "./elements-DOM";

const myLibrary = [];

// Displays all books from the library array to HTML
const renderBookshelf = (libraryArray) => {
  // Empties all the bookshelf
  elementsDOM.bookShelf.innerHTML = "";

  libraryArray.forEach((item, index) => {
    // Set each object id
    item.id = index;
    // Set the bookcard read status text ("Yes" or "No")
    let bookCoverImage;

    // If no bookcover has been entered
    if (libraryArray[index].bookCover === "") {
      bookCoverImage = genericBookCover;
    } else if (libraryArray[index].bookCover !== false) {
      bookCoverImage = libraryArray[index].bookCover;
    }

    // Set the bookcard read status text ("Yes" or "No")
    let sliderRoundText;
    if (libraryArray[index].readStatus === true) {
      sliderRoundText = "Read";
    } else if (libraryArray[index].readStatus === false) {
      sliderRoundText = "Not Read";
    }
    //  Displays each item from the libraryArray array into bookcards
    elementsDOM.bookShelf.insertAdjacentHTML(
      "beforeend",
      `
      <div class="book-container" data-id="${index}">
      <div class="book-image-container">
        <img class="book-image" src="${bookCoverImage}">
      </div>
      <div class="book-card">
        <div class="book-pages-date-container">
            <div class="book-date-card">${libraryArray[index].date}</div>
            <div class="book-pages-number-card">${libraryArray[index].numberOfPages} pages</div>
        </div>
        
        <div class="book-title-card">${libraryArray[index].title}</div>
        
        <div class="book-author-container">
            <img class="feather-author-card" src=${featherImg} alt="feather-image">
            <div class="book-author-card">${libraryArray[index].author}</div>
        </div>
        
        <div class="book-delete-read-status-card">
            <button class="delete-button"><img class="delete-image" src=${deleteImg} alt="remove-book"></button>

            <div class='read-status'>
                <span class="read-status-text">${sliderRoundText}</span>
                <label class="switch">
                <input class="read-status-checkbox" type="checkbox">
                <span class="slider round"></span>
                </label>
            </div>
        </div>
      </div>
     </div>`,
    );
  });

  const allReadStatusCheckboxes = document.querySelectorAll(
    ".read-status-checkbox",
  );

  // If the book is read, then the bookcard checkbox is checked (blue color and cursor on the right)
  allReadStatusCheckboxes.forEach((item, index) => {
    if (libraryArray[index].readStatus === true) {
      allReadStatusCheckboxes[index].checked = true;
    } else {
      allReadStatusCheckboxes[index].checked = false;
    }
  });

  // Update the AddBook card checkbox (if it was Yes, the checkbox becomes No again)
  elementsDOM.readStatusNo.checked = true;

  // Close the modal box
  elementsDOM.bookAddCardModal.style.display = "none";
};

export { renderBookshelf, myLibrary };
