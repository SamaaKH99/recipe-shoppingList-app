import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipes/recipe.model";
import { Ingredient } from "./shared/ingredient.model";
import { ShoppinglistService } from "./shoppinglist.service";

// To inject a service into a service:
@Injectable()

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Mexican Chicken Burger', 
        'Ready in under 20 minutes, this burger with spiced chipotle chicken breast, in toasted brioche with guacamole, makes for a satisfying weeknight treat for one', 
        '/assets/images/mexican-chicken-burger.jpg', [new Ingredient("Chicken", 2)]),
    
        new Recipe('Chicken Hummus Bowl', 
        'Make our healthy chicken and hummus salad bowl for a delicious budget lunch option. It can be thrown together in just 10 minutes and delivers three of your 5-a-day', 
        '/assets/images/Quick-Chicken.jpg',
        [   new Ingredient("Chicken", 2),
            new Ingredient("Hummus",10)
        ]),
    
        new Recipe('Breakfast Burritos', 
        'Prep this hearty burrito brunch the day before for easy assembling in the morning. The recipe is just what you need after party excesses or on New Year’s Day',
        '/assets/images/easy-breakfast-burritos.jpg', [new Ingredient("Tomatoes", 3)] ),
    
        new Recipe('Mexican Chicken stew', 
        'Mexican chicken stew. Bring a touch of Mexican flavour to your midweek meal with this low-fat, one-pan supper.', 
        '/assets/images/stew.jpg', 
        [
            new Ingredient("Chicken", 3),
            new Ingredient("Buns", 3)
        ])
    ];

    constructor(private shoppinglistservice: ShoppinglistService) { }

    
    getRecipes(){
        //Slice will return a new array which is a copy of this array outside.
        return this.recipes.slice();
    }

    addIngredientsToShoppinglist(ingredients: Ingredient[]){
        this.shoppinglistservice.addIngredients(ingredients);
    }

}