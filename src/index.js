// Google Books API docs:
// https://developers.google.com/books/docs/v1/using
// search term:
// `https://www.googleapis.com/books/v1/volumes?q=ruby+programming`
// author name:
// `https://www.googleapis.com/books/v1/volumes?q=inauthor:eco`

document.addEventListener('DOMContentLoaded', function() {
  const app = new App();
  const api = new Api()
  api.addAllEventListeners();
  app.addAllEventListeners();

  // app.renderBooks(fetchBooks().map(bookData => new Book(bookData)));
});
// https://www.googleapis.com/books/v1/volumes?q=ruby+programming&startIndex=0
//
//
// https://www.googleapis.com/books/v1/volumes?q=ruby+programming&startIndex=10
