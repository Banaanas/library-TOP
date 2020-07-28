// The objective of this My Library Project was to use both constructor and function
// factory in the same Project. That's why there is a Book Function Factory and
// a Book Constructor.

// Book Factory Function
const BookFactory = (
  id,
  title,
  author,
  date,
  numberOfPages,
  bookCover,
  readStatus,
) => ({
  id,
  title,
  author,
  date,
  numberOfPages,
  bookCover,
  readStatus,
});

export default BookFactory;
