const elementsDOM = {
  addBookButton: document.querySelector("#add-book-button"),
  allReadStatusCheckboxes: document.querySelectorAll(".read-status-checkbox"),
  allValues: document.querySelectorAll(
    "#book-title-input, #book-author-input, #book-date-input, #book-number-pages-input, #book-cover-link-input",
  ),
  bookAddCardModal: document.querySelector("#book-addcard-modal"),
  bookShelf: document.querySelector("#bookshelf"),
  closeModal: document.querySelector("#close-modal"),
  modalErrorMessage: document.querySelector("#modal-error-message"),
  openModalButton: document.querySelector("#open-modal-button"),
  readStatusNo: document.querySelector("#read-status-no"),
  readStatusYes: document.querySelector("#read-status-yes"),
};

export default elementsDOM;
