import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BookHttpService } from '../book-http.service';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-list-http-book',
  templateUrl: './list-http-book.component.html',
  styleUrls: ['./list-http-book.component.css']
})
export class ListHttpBookComponent implements OnInit {

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

  constructor(private bookHttpService: BookHttpService, private router: Router) { }
 
  ngOnInit(): void {
    this.loadAllBooks();  
  }

  loadAllBooks(){
    this.bookHttpService.fetchAllBooks().subscribe((response)=>{
      // the response that we receive here is an array of Book
      console.log(response);
      this.allBooks = response;
    });
  }

  toggleAddForm(){
    if(this.toggleAdd){
      this.toggleAdd = false;
    }else{
      this.toggleAdd = true;
    }
  }

  goToEditBook(bookId: number){
    this.router.navigate(['book-http-edit', bookId]);
  }

  deleteBook(bookId: number){
   this.bookHttpService.deleteBook(bookId).subscribe((response)=>{
     console.log(response);
     
     this.loadAllBooks();
   })
  }

  addBook(){
   this.bookHttpService.addBook(this.newBook).subscribe((response)=>{
     console.log(response);
     this.newBook = {
      bookId: 0,
      bookTitle: "",
      bookAuthor: "",
      bookGenre: "",
      bookCost: 0,
      bookImageUrl: ""
    }
     this.loadAllBooks();
   })
  }
}
