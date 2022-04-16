import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //Takes input from the recipe model and recipe array
  @Input() recipe!: Recipe;
  // Output so we can listen to this event from outside the component
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() { }

  @Output() recipeSelectedDetails = new EventEmitter<void>();
  toDetails(){
    //window.scrollTo(0,document.body.scrollHeight);
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    //this.recipeSelectedDetails.emit();
    //document.getElementById('details')?.scrollIntoView();
  }



  onSelected(){
    this.recipeSelected.emit();
  }

  ngOnInit(){
  }

}
