import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // Array of ingredients. (Will be used alot in the recipe section)
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Eggs',7),
    new Ingredient('Tomatoes', 4)
  ];

  constructor() { }

  ngOnInit() {
  }

}
