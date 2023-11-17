import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() showDetailsRecepies = new EventEmitter<Recipe>();

  constructor(private recepiesService: RecipesService) {}

  recepies: Recipe[];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.recepies = this.recepiesService.getRecepiesList();
  }

  clickedRecipe: any = {};

  showRecipeDetail(recepie: Recipe) {
    this.showDetailsRecepies.emit(recepie);
    // console.log(this.clickedRecipe);
  }
}
