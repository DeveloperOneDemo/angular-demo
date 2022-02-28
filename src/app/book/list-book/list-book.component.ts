import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  allBooks: Book[] = [];
  toggleAdd: boolean = false;

  newBook: Book = {
    bookId: 0,
    bookTitle: "",
    bookAuthor: "",
    bookGenre: "",
    bookCost: 0,
    bookImageUrl: ""
  }
  //commenting this line because we can use private in front of the parameter
  //bookService: BookService;

  // Dependency Injection (DI)
  constructor(private bookService: BookService) {
    //commenting this line because we can use private in front of the parameter
    //this.bookService = bookService;

    // commented out because we pass bookService as a parameter to the constructor(DI)
    //this.bookService = new BookService();
   }

  // not used anywhere, just to show how an object literal is created
  oneBook: Book = {
    bookId: 101,
    bookTitle: "Harry Potter and the Order of Phoenix",
    bookAuthor: "J.K.Rowling",
    bookGenre: "Fiction",
    bookCost: 45,
    bookImageUrl: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  };

  // commented because this is shifted to book.service.ts
  // allBooks: Book[] = [
  //   {
  //     bookId: 101,
  //     bookTitle: "Harry Potter and the Order of Phoenix",
  //     bookAuthor: "J.K.Rowling",
  //     bookGenre: "Fiction",
  //     bookCost: 45,
  //     bookImageUrl: "https://images.unsplash.com/photo-1611676279444-5577698aa13c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  //   },
  //   {
  //     bookId: 102,
  //     bookTitle: "Harry Potter and the Sorceres Stone",
  //     bookAuthor: "J.K.Rowling",
  //     bookGenre: "Fiction",
  //     bookCost: 100,
  //     bookImageUrl: "https://images.unsplash.com/photo-1610466025839-ec6040c347b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  //   },
  //   {
  //     bookId: 103,
  //     bookTitle: "Harry Potter and the Order of Phoenix",
  //     bookAuthor: "J.K.Rowling",
  //     bookGenre: "Fiction",
  //     bookCost: 145,
  //     bookImageUrl: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
  //   }
  // ];

  
  ngOnInit(): void {
    this.allBooks = this.bookService.fetchAllBooks();
  }

  toggleAddForm(){
    if(this.toggleAdd){
      this.toggleAdd = false;
    }else{
      this.toggleAdd = true;
    }
  }

  deleteBook(bookId: number){
   this.allBooks = this.bookService.deleteBook(bookId);
  }

  addBook(){
    // doing this because am working with arrays, otherwise not required
    let addNewBook: Book = {
      bookId: 0,
      bookTitle: this.newBook.bookTitle,
      bookAuthor:this.newBook.bookAuthor,
      bookGenre: this.newBook.bookGenre,
      bookCost: this.newBook.bookCost,
      bookImageUrl: this.newBook.bookImageUrl
    }

    this.bookService.addBook(addNewBook);
    this.allBooks = this.bookService.fetchAllBooks();
  }
}
