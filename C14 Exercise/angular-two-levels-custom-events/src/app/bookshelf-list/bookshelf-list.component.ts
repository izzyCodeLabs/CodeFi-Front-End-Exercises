import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bookshelf-list',
  templateUrl: './bookshelf-list.component.html',
  styleUrls: ['./bookshelf-list.component.css']
})
export class BookshelfListComponent implements OnInit {
  @Output() sendBook = new EventEmitter<{title:string, author:string}>();
  books = [{title: "Book1", author:"Author1"}, {title: "Book2", author:"Author2"}, {title: "Book3", author:"Author3"}];

  constructor() { }

  ngOnInit(): void {
  }

  onSendBook(newBook:{title:string, author:string}) {
    this.sendBook.emit(newBook);
    console.log("Passing book from bookshelf-list to bookshelf!")
  }
}
