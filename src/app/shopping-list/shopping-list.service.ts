// import { Injectable } from '@angular/core';

import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

// @Injectable({
//   providedIn: 'root'
// })
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 6),
    new Ingredient('Banana', 2),
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngridients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
