import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'header';

  updateTitle(text) {
    this.title = text;
    console.log(this.title);
  }
}
