class Book {
  constructor(props) {
    this.id = props.id;
    this.author = props.author;
    this.title = props.title;
    this.imageLink = props.imageLink;
    this.pages = props.pages;
    this.description = props.description;
    this.averageRating = props.averageRating;
    this.constructor.all.push(this);
  }

  static find(bookId) {
    return Book.all.find(({ id }) => id === bookId);
  }

  static findByTitle(title) {
    return Book.all.filter(book =>
      book.title.toLowerCase().match(title.toLowerCase())
    );
  }

  renderItem() {
    console.log('rendered');
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
    <i class="large book middle aligned icon"></i>
    <div class="content">
      <a data-id="${this.id}" class="header" href="/">${this.title}</a>
      <div class="description">
        ${this.author}
      </div>
    </div>
    `;
    return div;
  }

  renderCard() {
    const div = document.createElement('div');
    div.className = 'ui fluid card';
    div.innerHTML = `
      <div class="image">
        <img src=${this.imageLink}/>
      </div>
      <div class="content">
        <h1 class="ui header">
          ${this.title}
          <div class='sub header'>
            ${this.author}
          </div>
        </h1>
        <div class="meta">
          <span>${this.pages} pages</span>
        </div>
        <div class="ui divider"></div>
        <div class="description">
          ${this.description}
        </div>
      </div>`;

    return div;
  }
}

Book.all = [];
