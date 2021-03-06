import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  @Output() sendBook = new EventEmitter<{title:string, author:string}>();
  constructor() { }

  ngOnInit(): void {
  }
  onSendBook(newBook:{title:string, author:string}) {
    this.sendBook.emit(newBook);
    console.log("Passing book from bookshelf to app-component!")
  }
}
