import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // array of recipes of type Recipe model (array of Recipe model props)
  recipes: Recipe[] = [
    new Recipe('Mexican Chicken Burger', 
    'Ready in under 20 minutes, this burger with spiced chipotle chicken breast, in toasted brioche with guacamole, makes for a satisfying weeknight treat for one', 
    '/assets/images/mexican-chicken-burger.jpg'),

    new Recipe('Chicken Hummus Bowl', 
    'Make our healthy chicken and hummus salad bowl for a delicious budget lunch option. It can be thrown together in just 10 minutes and delivers three of your 5-a-day', 
    '/assets/images/Quick-Chicken.jpg'),

    new Recipe('Breakfast Burritos', 
    'Prep this hearty burrito brunch the day before for easy assembling in the morning. The recipe is just what you need after party excesses or on New Year’s Day',
    '/assets/images/easy-breakfast-burritos.jpg'),

    new Recipe('Mexican Chicken stew', 
    'Mexican chicken stew. Bring a touch of Mexican flavour to your midweek meal with this low-fat, one-pan supper.', 
    '/assets/images/stew.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
