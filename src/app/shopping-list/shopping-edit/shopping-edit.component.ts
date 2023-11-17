import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) numberInput: ElementRef;

  ingredienName = '';
  ingredientAmount: number;

  constructor(private slShoppingList: ShoppingListService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  sendInput() {
    this.ingredienName = this.nameInput.nativeElement.value;
    this.ingredientAmount = this.numberInput.nativeElement.value;
    const newIngredient = new Ingredient(
      this.ingredienName,
      this.ingredientAmount
    );
    this.slShoppingList.onIngredientAdded(newIngredient);
  }
}
