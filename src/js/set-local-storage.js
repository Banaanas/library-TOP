const setLocalStorage = (array) => {
  // Put the Library Array into storage
  localStorage.setItem("myLibraryArray", JSON.stringify(array));
};

export default setLocalStorage;
