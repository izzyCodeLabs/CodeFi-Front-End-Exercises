import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookshelf-list',
  templateUrl: './bookshelf-list.component.html',
  styleUrls: ['./bookshelf-list.component.css']
})
export class BookshelfListComponent implements OnInit {

  books = [{title: "Book1", author:"Author1"}, {title: "Book2", author:"Author2"}, {title: "Book3", author:"Author3"}];

  constructor() { }

  ngOnInit(): void {
  }

}
