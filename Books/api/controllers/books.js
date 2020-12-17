const Book = require('../models/book');

exports.index = async (req, res, next) => {
  try {
    const books = await Book.find();

    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  try {
    const { title, author } = req.body;
    console.log(req.body);
    const qt = await Book.create({
      author: author,
      title: title
    });

    res.status(200).json({ message: "Book was created successfully", quote: qt });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { _id, title, author } = req.body;
    console.log(req.body);
    const qt = await Book.findOneAndUpdate({ _id: _id }, {
      author,
      title
    });

    res.status(200).json({ message: "Book was updated successfully", book: qt });
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    // Fix this statement below... where do we get the _id from?
    // const { _id }
    const { _id } = req.body;
    console.log("req.body from destryo", req.body);
    await Book.findOneAndDelete({ _id: _id });

    res.status(200).json({ message: "Book was deleted successfully" });
  } catch (error) {
    next(error);
  }
};