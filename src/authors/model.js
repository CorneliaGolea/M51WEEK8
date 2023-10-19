const { DataTypes } = require("sequelize");

const connection = require("../db/connection");

const Author = connection.define("Author", {
  authorName: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

const Book = connection.define("Book", {
  title: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
  },
  genre: {
    type: DataTypes.STRING,
  },
});

module.exports = Author;
