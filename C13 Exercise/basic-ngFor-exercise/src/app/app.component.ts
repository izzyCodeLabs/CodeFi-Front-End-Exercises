import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-ngFor-exercise';
  foods:string[] = ['apple', 'pizza', 'salad', 'fish filet', 'curry', 'banana'];
}
