import { SlicePipe } from "@angular/common";
import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes:Recipe[] = [
    new Recipe('Test Recipe 1', 'Does it work?', 'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg'),
    new Recipe('Test Recipe 2', 'Does it work?', 'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg'),
    new Recipe('Test Recipe 3', 'Does it work?', 'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
