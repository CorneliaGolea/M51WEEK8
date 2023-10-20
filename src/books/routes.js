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
  getBookAndAuthor,
} = require("./controllers");

bookRouter.post("/", createBook);
bookRouter.get("/", findAllBooks);
bookRouter.get("/:author", findBookByAuthor);
bookRouter.put("/:title", updateByTitleDynamic);
bookRouter.delete("/deleteByTitle", deleteByTitle);
bookRouter.delete("/deleteAll", deleteAll);
bookRouter.get("/:title", getBookAndAuthor);

module.exports = bookRouter;
