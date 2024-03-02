let library = [];

function addBook(title, author, pages, genre) {
    const book = {
        title: title,
        author: author,
        pages: pages,
        genre: genre
    };
    library.push(book);
    displayBooks(library);
}

function searchBooks() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = library.filter(book => book.title.toLowerCase().includes(searchTerm));
    displayBooks(filteredBooks);
    if (filteredBooks.length === 0) {
        document.getElementById('searchMessage').innerText = 'No books found.';
    } else {
        document.getElementById('searchMessage').innerText = '';
    }
}

function displayBooks(books) {
    const bookList = document.getElementById('books');
    bookList.innerHTML = '';
    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}, ${book.pages} pages, Genre: ${book.genre}`;
        bookList.appendChild(li);
    });
}

document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const genre = document.getElementById('genre').value;
    addBook(title, author, pages, genre);
});
