const Book = require("./model");
// POST- adds a book to the DB
const createBook = async (request, response) => {
  const newBook = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });
  console.log("!!!!!!:", newBook);
  const successResponse = {
    message: "success",
    newBook: newBook,
  };

  response.send(successResponse);
};
// GET-gets all books
const findAllBooks = async (request, response) => {
  const books = await Book.findAll();
  console.log(books);
  const successResponse = {
    message: "success",
    books: books,
  };
  console.log(successResponse);

  response.send(successResponse);
};

// GET- gets a book by author
const findBookByAuthor = async (request, response) => {
  console.log(request.params);
  const book = await Book.findOne({ where: { author: request.params.author } });
  console.log(book);
  const successResponse = {
    message: "success",
    book: book,
  };
  console.log(successResponse);

  response.send(successResponse);
};

// PUT-dynamically updates a book on title

const updateByTitleDynamic = async (request, response) => {
  console.log(request.originalUrl);
  const book = await Book.update(
    {
      title: request.body.title,
      author: request.body.author,
      genre: request.body.genre,
    },
    {
      where: { title: request.params.title },
    }
  );

  const successResponse = {
    message: "success",
    book: book,
  };

  response.send(successResponse);
};

// DELETE-deletes a single book by title
const deleteByTitle = async (request, response) => {
  const deleteBook = await Book.destroy({
    where: { title: request.body.title },
  });
  const successResponse = {
    message: "success",
    deleteBook: deleteBook,
  };
  response.send(successResponse);
};
// DELETE- deletes all books
const deleteAll = async (request, response) => {
  const deleteDB = await Book.destroy({
    truncate: true,
  });

  const successResponse = {
    message: "success",
    deleteDB: deleteDB,
  };
  response.send(successResponse);
};

module.exports = {
  createBook: createBook,
  findAllBooks: findAllBooks,
  findBookByAuthor: findBookByAuthor,
  updateByTitleDynamic: updateByTitleDynamic,
  deleteByTitle: deleteByTitle,
  deleteAll: deleteAll,
};
