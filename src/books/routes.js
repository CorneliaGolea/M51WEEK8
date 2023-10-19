const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const {
  createBook,
  findAllBooks,
  findBookByAuthor,
  updateByTitleDynamic,
  deleteByTitle,
  deleteAll,
} = require("./controllers");

bookRouter.post("/books", createBook);
bookRouter.get("/books", findAllBooks);
bookRouter.get("/books/:author", findBookByAuthor);
bookRouter.put("/books/:title", updateByTitleDynamic);
bookRouter.delete("/books/deleteByTitle", deleteByTitle);
bookRouter.delete("/books/deleteAll", deleteAll);

module.exports = bookRouter;
