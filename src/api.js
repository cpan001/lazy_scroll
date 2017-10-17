class Api {
  constructor() {
    this.baseUrl = "https://www.googleapis.com/books/v1/volumes?q="
    this.startIndex = 0
  }

  fetchFromApi(){
    return fetch(`${this.baseUrl}${this.searchTerm}&startIndex=${this.startIndex}`)
    .then(res => res.json())
  }

  setSearchTerm(){
     this.searchTerm = document.querySelector('.field input').value
     this.startIndex = 0
     this.splitTerm()
  }

  addAllEventListeners(){
    const submitForm = document.getElementById('submit-form')
    submitForm.addEventListener('submit', this.handleSubmit.bind(this));
    document.addEventListener('scroll', this.scrollDownListen.bind(this));

  }

  handleSubmit(ev){
    ev.preventDefault();
    this.setSearchTerm()
  }

  scrollDownListen(){
    if (Math.ceil(window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      this.startIndex += 10
      this.fetchFromApi()
      .then(json => {this.addToPage(json.items)})
       console.log('at the bottom');
    }
  }

  addToPage(items){
    const books = (items.map(book => {
        return {
          id: book.id,
          title: book.volumeInfo.title,
          author: book.volumeInfo.authors[0],
          description: book.volumeInfo.description
        };
      })
      .map(bookData => new Book(bookData)));
      books.forEach(book => document.querySelector('.ui.relaxed.divided.list').appendChild(book.renderItem()))
  }

  splitTerm(){
    this.searchTerm.split(" ").join("+")
  }

}
