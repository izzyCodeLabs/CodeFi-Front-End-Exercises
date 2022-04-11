import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-two-levels-custom-events';
  book = {title:"n/a", author:"n/a"}

  updateBook(newBook:{title:string, author:string}) {
    this.book = newBook;
  }
}
