const { Router } = require("express");
const authorRouter = Router();

const Author = require("./model");
const Book = require("./model");

const { addAuthor, findAuthorByNameAndAllBooks } = require("./controllers");

authorRouter.post("/authors", addAuthor);
authorRouter.get("/authors/:authorName", findAuthorByNameAndAllBooks);

module.exports = authorRouter;
