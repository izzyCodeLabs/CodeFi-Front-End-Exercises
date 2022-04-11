import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Test Recipe 1', 'Does it work?', 'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg'),
    new Recipe('Test Recipe 2', 'Does it work?', 'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg'),
    new Recipe('Test Recipe 3', 'Does it work?', 'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg')
  ];
  @Output() displayedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe(recipe:Recipe) {
    this.displayedRecipe.emit(recipe);
  }
}
