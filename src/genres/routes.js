const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getAllGenres, getGenreAndBooks } = require("./controllers");

genreRouter.post("/", addGenre);

genreRouter.get("/", getAllGenres);

genreRouter.get("/:genreName", getGenreAndBooks);

module.exports = genreRouter;
