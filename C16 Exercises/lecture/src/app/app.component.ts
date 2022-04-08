import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lecture';
  isDarkMode:boolean = false;

  changeDarkMode() {
    this.isDarkMode = !this.isDarkMode
  }
}
