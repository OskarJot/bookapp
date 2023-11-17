// import { Injectable } from '@angular/core';

import { Ingredient } from "../shared/ingredient.model";

// @Injectable({
//   providedIn: 'root'
// })
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 6),
    new Ingredient('Banana', 2),
  ];

  constructor() {}

  addNewIngredients() {
    
  }
}
