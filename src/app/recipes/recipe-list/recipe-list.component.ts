import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelectedDetails = new EventEmitter<string>();
  constructor(private recipeService: RecipeService) { }

  recipes!: Recipe[];
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }


  onRecipeSelectedDetails(details: string){
    this.recipeWasSelectedDetails.emit(details);
  }

}
