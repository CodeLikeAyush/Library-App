function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() {

}

Display.prototype.clear = function () {
    libraryForm = document.getElementById('libraryForm');
    libraryForm.clear();


}
let index = 0;
Display.prototype.displayTable = function (book) {
    let tableBody = document.getElementById('tableBody');
    console.log(tableBody);
    let tableBodyString = `<tr id="${index + 1}">
                                <td>${book.name}</td>
                                <td>${book.author}</td>
                                <td>${book.type}</td>
                                <td>
                                    <button type="button" class="btn btn-danger" onclick="deltFunc(${index + 1})"  id="remove-${index + 1}">Remove Book</button>
                                </td>
                            </tr>`

    tableBody.innerHTML += tableBodyString;
    index++;
}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}


let libraryForm = document.getElementById('libraryForm');

libraryForm.addEventListener('submit', addBook);
function addBook(evetnObject) {
    evetnObject.preventDefault();

    console.log(`Adding book`);

    let bookName = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let fiction = document.getElementById('fiction');
    console.log(fiction);
    let computerProgramming = document.getElementById('computerProgramming');
    let cooking = document.getElementById('cooking');

    let type;
    if (fiction.checked) {
        type = 'Fiction';
    }

    else if (computerProgramming.checked) {
        type = 'Computer Programming';
    }
    else if (cooking.checked) {
        type = 'Cooking';
    }
    let book = new Book(bookName, author, type);
    console.log(book);

    if (bookName === '' || author === '' || type === '') {
        let alert = document.getElementById('alert');
        let alertHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Warning:</strong> This book can't be added. Check if all fields are filled     properly.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        alert.innerHTML = alertHTML;


    }

    else {


        let tabulateBook = new Display();

        tabulateBook.displayTable(book);


        tabulateBook.clear();
        let alert = document.getElementById('alert');
        let alertHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Success:</strong> Book added successfully.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                         </div>`;
        alert.innerHTML = alertHTML;

    }
    setTimeout(() => {
        let alert = document.getElementById('alert');
        alert.innerHTML = '';
    }, 2000);
}

function deltFunc(id) {
    console.log(id);
    // let eleme = 
    // console.log(typeof(document.getElementById(id).textContent))
    let remvBook = document.getElementById(id);
    remvBook.remove();
    index--;
}

function alert(Status, message) {
    if (Status === "Success") {

    }

}