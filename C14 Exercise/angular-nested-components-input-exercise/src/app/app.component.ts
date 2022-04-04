import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-nested-components-input-exercise';
  myPosts:string[] = ["I love pizza.", "Have you heard about videogames?", "Check out this funny cat."];
}
