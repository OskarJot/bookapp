import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
@Input() item: {name: string, desc: string, imagePath: string}
@Output() itemClicked = new EventEmitter<void>();

clickRecipeItem() {
  this.itemClicked.emit();
  
}

}
