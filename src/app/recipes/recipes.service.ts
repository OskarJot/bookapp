// import { Injectable } from '@angular/core';
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class RecipesService {
  constructor(private shoppingService: ShoppingListService) {}

  recepieSelected = new EventEmitter<Recipe>();

  recepies: Recipe[] = [
    new Recipe(
      'This is Test1 Recipe',
      'Desc this Repice Test2',
      'https://www.foodandwine.com/thmb/tAS-x_IC4ss1cb9EdDpsr0UExdM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg',
      [new Ingredient('Brad', 1), new Ingredient('Brad', 5)]
    ),
    new Recipe(
      'This is Test2 Recipe',
      'Desc this Repice Test2',
      'https://www.foodandwine.com/thmb/tAS-x_IC4ss1cb9EdDpsr0UExdM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg',
      [new Ingredient('Fruit', 1), new Ingredient('Eggs', 5)]
    ),
    new Recipe(
      'This is Test3 Recipe',
      'Desc this Repice Test2',
      'https://www.foodandwine.com/thmb/tAS-x_IC4ss1cb9EdDpsr0UExdM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg',
      [new Ingredient('Potato', 1), new Ingredient('Paper', 5)]
    ),
  ];

  getRecepiesList() {
    return this.recepies.slice();
  }

  addIngridientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngridients(ingredients);
  }
}
