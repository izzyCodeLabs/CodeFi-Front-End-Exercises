import { Component } from '@angular/core';
import { Recipe } from './recipe-book/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course-project';
  loadedFeature = 'recipe';

  onNavigate(feature:string) {
    this.loadedFeature = feature;
  }
}
