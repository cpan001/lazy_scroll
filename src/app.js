const baseUrl = `https://www.googleapis.com/books/v1/volumes`;

class App {
  constructor() {
    this.list = document.querySelector('.ui.relaxed.divided.list');
    this.form = document.querySelector('.ui.form');
  }

  addAllEventListeners() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
    this.list.addEventListener('click', this.handleItemClick.bind(this));
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const input = ev.target.querySelector('input');
    const term = input.value;
    input.value = '';
    this.list.innerHTML = '';
    Book.all = [];

    // const req = new XMLHttpRequest();
    //
    // req.open('GET', `${baseUrl}?q=${term}`);
    //
    // const that = this;
    //
    // req.onload = function() {
    //   const data = JSON.parse(this.response);
    // data.items
    //   .map(book => {
    //     return {
    //       id: book.id,
    //       title: book.volumeInfo.title,
    //       author: book.volumeInfo.authors[0],
    //       description: book.volumeInfo.description
    //     };
    //   })
    //   .forEach(bookData => new Book(bookData));
    //
    // that.renderBooks(Book.all);
    // };
    //
    // req.send();

    fetch(`${baseUrl}?q=${term}`)
      .then(res => res.json())
      .then(data => {
        data.items
          .map(book => {
            return {
              id: book.id,
              title: book.volumeInfo.title,
              author: book.volumeInfo.authors[0],
              description: book.volumeInfo.description
            };
          })
          .forEach(bookData => new Book(bookData));

        this.renderBooks(Book.all);
      });


    // debugger;

    //
    // this.renderBooks(Book.findByTitle(term));
  }

  handleItemClick(ev) {
    ev.preventDefault();
    const clicked = ev.target;
    if (clicked.className === 'header') {
      const id = clicked.dataset.id;
      const book = Book.find(parseInt(id));
      this.list.innerHTML = '';
      this.list.appendChild(book.renderCard());
    }
  }

  renderBooks(books) {
    books.forEach(book => {
      this.list.appendChild(book.renderItem());
    });
  }
}
