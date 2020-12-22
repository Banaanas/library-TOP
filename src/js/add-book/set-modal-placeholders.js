import elementsDOM from "../elements-DOM";

// Reset all Add Book Modal placeholder values
const setModalPlaceholders = () => {
  elementsDOM.allValues[0].placeholder = "Les Fleurs du mal";
  elementsDOM.allValues[1].placeholder = "Beaudelaire";
  elementsDOM.allValues[2].placeholder = "1857";
  elementsDOM.allValues[3].placeholder = "288";
  elementsDOM.allValues[4].placeholder =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Baudelaire_-_Les_Fleurs_du_mal%2C_Conard%2C_1922.djvu/page15-380px-Baudelaire_-_Les_Fleurs_du_mal%2C_Conard%2C_1922.djvu.jpg";
};

export default setModalPlaceholders;
