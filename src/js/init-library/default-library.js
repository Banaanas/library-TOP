import BookFactory from "../book/book-factory";
import lesIllusionsPerduesImg from "../../images/LesIllusionsPerdues.jpeg";
import leLivreDeLIntranquiliteImg from "../../images/LeLivredelIntranquilité.jpg";
import laHordeDuContreventImg from "../../images/LaHordeDuContrevent.jpeg";
import BookClass from "../book/book-constructor";
import thePowerOfTheDogImg from "../../images/ThePowerOfTheDog.jpg";
import lesLiaisonsDangereusesImg from "../../images/LesLiaisonsDangereuses.jpeg";
import guerreEtPaixImg from "../../images/GuerreEtPaix.jpeg";
import { myLibrary } from "../render-bookshelf";

// Set a default Library if there is no library stored into localStorage
const defaultLibrary = () => {
  // The objective of this My Library Project was to use both constructor and function
  // factory in the same Project. That's why there is a Book Function Factory and
  // a Book Constructor.

  // Factory Function - Create 3 books
  const lesIllusionsPerdues = BookFactory(
    0,
    "Les Illusions Perdues",
    "Honoré de Balzac",
    1848,
    960,
    `${lesIllusionsPerduesImg}`,
    true,
  );
  const leLivreDelIntranquilité = BookFactory(
    1,
    "Le Livre de l'Intranquillité",
    "Fernando Pessoa",
    1982,
    610,
    `${leLivreDeLIntranquiliteImg}`,
    false,
  );
  const laHordeDuContrevent = BookFactory(
    2,
    "La Horde du Contrevent",
    "Alain Damasio",
    2004,
    548,
    `${laHordeDuContreventImg}`,
    true,
  );

  // BookClass Instances - Create 3 books
  const thePowerOfTheDog = new BookClass(
    3,
    "The Power of the Dog",
    "Don Winslow",
    2007,
    539,
    `${thePowerOfTheDogImg}`,
    false,
  );
  const lesLiaisonsDangereuses = new BookClass(
    4,
    "Les Liaisons Dangereuses",
    "Pierre Choderlos de Laclos",
    1782,
    400,
    `${lesLiaisonsDangereusesImg}`,
    true,
  );
  const guerreEtPaix = new BookClass(
    5,
    "Guerre et Paix",
    "Léon Tolstoï",
    1869,
    1225,
    `${guerreEtPaixImg}`,
    false,
  );

  myLibrary.push(lesIllusionsPerdues);
  myLibrary.push(leLivreDelIntranquilité);
  myLibrary.push(laHordeDuContrevent);
  myLibrary.push(thePowerOfTheDog);
  myLibrary.push(lesLiaisonsDangereuses);
  myLibrary.push(guerreEtPaix);
};

export default defaultLibrary;
