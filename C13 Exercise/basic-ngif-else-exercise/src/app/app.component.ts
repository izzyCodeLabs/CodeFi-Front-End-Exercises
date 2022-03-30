import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-ngif-else-exercise';
  isShow:boolean = true;

  reverseShow() {
    if(this.isShow === true) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  }
}
