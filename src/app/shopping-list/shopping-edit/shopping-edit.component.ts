import {
  Component,
  ElementRef,
  EventEmitter,
  ViewChild,
  Output,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) numberInput: ElementRef;

  @Output() addIngredient = new EventEmitter<Ingredient>();

  ingredienName = '';
  ingredientAmount: number;

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
    this.addIngredient.emit(newIngredient);
  }
}
