import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookHttpService } from '../book-http.service';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-http-book',
  templateUrl: './edit-http-book.component.html',
  styleUrls: ['./edit-http-book.component.css']
})
export class EditHttpBookComponent implements OnInit {

  newBook: Book = {
    bookId: 0,
    bookTitle: "",
    bookAuthor: "",
    bookGenre: "",
    bookCost: 0,
    bookImageUrl: ""
  }

  constructor(private activatedRoute: ActivatedRoute, 
              private bookHttpService: BookHttpService,
              private router: Router) { }

  ngOnInit(): void {
    // to take out the route parameter, we need to inject ActivatedRoute in the constructor
    let bookId: any = this.activatedRoute.snapshot.paramMap.get("myId");
    console.log(bookId);
    // fetch the book with the bookId from the service layer
   this.bookHttpService.fetchABook(bookId).subscribe((response)=>{
    this.newBook = response;
   });

  }

  test(myTitle: any){
    console.log(myTitle);
  }
  
  updateBook(){
    this.bookHttpService.updateBook(this.newBook).subscribe((response)=>{
      console.log(response);
      // once update is over navigate back to ListHttpBookComponent
      this.router.navigate(['book-http-crud']);
    });
  }
}
