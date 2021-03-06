import { Injectable } from "@angular/core";
//import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  //recipeSelected = new Subject<Recipe>();
  private recipes:Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Thin breaded fried meat, yum!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1920px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Burger',
      'It\'s a big ol burger, heck yeah.',
      'https://images.heb.com/is/image/HEBGrocery/recipe-hm-large/big-texas-bacon-cheeseburger-recipe.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Sauce', 1)
      ]),
  ];

  constructor(private slService:ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(idx:number) {
    return this.recipes[idx];
  }

  addIngredientsToList(ingredients:Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
