alert("Welcome to Domslair Library!")
let availableBooks = ["english", "maths", "biology", "chemistry", "physics", "urdu", "islamiat", "quranic education"]
// console.log(availableBooks.length);

let choice = prompt("Choose one of the following options\n1. Issue Book\n2. Return Book\n3. Search Book\n4. Show All Books").toLowerCase()

let issueBookName;
if (choice == "issue book" || choice == 1) {
    issueBookName = prompt("Which book do you want to issue?").toLowerCase()

    if (availableBooks.includes(issueBookName)) {
        let index = availableBooks.indexOf(issueBookName);
        availableBooks.splice(index, 1);
        alert("Book Issued Successfully");
        // console.log(availableBooks);

    } else {
        alert("Book Not Available");
    }
} else if (choice == "return book" || choice == 2) {
    let returnBook = prompt("Enter Book name you want to return:").toLowerCase()
    if (availableBooks.includes(returnBook)) {
        alert("Book Returned Successfully")
    } else {
        availableBooks.push(returnBook)
        alert("Book Returned Successfully")
    }

} else if (choice == "search book" || choice == 3) {

    let searchBook = prompt("Enter the book you want to search:").toLowerCase()

    for (let i = 0; i < availableBooks.length; i++) {
        if (searchBook == availableBooks[i]) {
            alert("This book is available!")
        } else {
            alert("This book is not available")
        }
    }
} else if (choice == "show all books" || choice == 4) {
    let availableBookText = "Available Books:\n";

    for (let i = 0; i < availableBooks.length; i++) {
        availableBookText += (i + 1) + ". " + availableBooks[i] + "\n";
    }

    alert(availableBookText);
}

