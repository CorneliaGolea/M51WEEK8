const { request, response } = require("express");
const Author = require("./model");
const Book = require("./model");

const { findBookByAuthor } = require("../books/controllers");
// POST- adds an author to DB
const addAuthor = async (request, response) => {
  const newAuthor = await Author.create({
    authorName: request.body.authorName,
  });
  const successResponse = {
    message: "success",
    newAuthor,
  };
  response.send(successResponse);
};

// GET - gets a single author by author name and retrives associated books

// const findAuthorByNameAndAllBooks = async (request, response) => {
//   const foundAuthor = await Author.findAll(

//     {
//       where: {
//         author: require.params.authorName,
//       },
//     }
//   );
//   const findBooksByAuthor = await Book.findAll({
//     where: {
//       author: require.params.authorName,
//     },
//   });

//   const successResponse = {
//     message: "success",
//     author: foundAuthor,
//     findBooksByAuthor,
//   };
//   response.send(successResponse);
// };

module.exports = {
  addAuthor: addAuthor,
  findAuthorByNameAndAllBooks: findAuthorByNameAndAllBooks,
};
