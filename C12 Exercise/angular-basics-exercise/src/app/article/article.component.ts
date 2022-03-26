import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  title:string = "To Lorem or to Ipsum";
  content:string = "Non-tech content here!";
  techContent:string = "Tech content here!"
  isTechRelated:boolean = true;
  toggleTechRelated() {
    if (this.isTechRelated === true) {
      this.isTechRelated = false;
    }
    else {
      this.isTechRelated = true;
    }
  }
}
