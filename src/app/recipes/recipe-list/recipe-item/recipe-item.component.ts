import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipeService) { }

  toDetails(){
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  }

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  ngOnInit(){
  }

}
