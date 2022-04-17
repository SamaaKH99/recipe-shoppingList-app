import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {


  @Input() recipe!: Recipe;

  @Input() details!: string;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppinglist(this.recipe.ingredients);
  }

}
