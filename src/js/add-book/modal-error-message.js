// Set some delay
import elementsDOM from "../elements-DOM";

const setMessageDelay = () => {
  setTimeout(() => {
    elementsDOM.modalErrorMessage.style.display = "none";
  }, 2000);
};

// Display Wait Message
const errorMessage = (message) => {
  elementsDOM.modalErrorMessage.style.display = "flex";
  elementsDOM.modalErrorMessage.textContent = message;
  setMessageDelay();
};

export default errorMessage;
