import { EventEmitter } from "@angular/core";
import { Ingredient } from "./shared/ingredient.model";

export class ShoppinglistService{
    ingredientsChange = new EventEmitter<Ingredient[]>();
    // Array of ingredients. (Will be used alot in the recipe section)
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Eggs',7),
        new Ingredient('Tomatoes', 4)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChange.emit(this.ingredients.slice());
    }

    // ############# There is a better way that this !
    // addIngredients(ingredients: Ingredient[]){
    //     for (let ingredient of ingredients){
    //         this.addIngredient(ingredient);
    //     }
    // }

    // ES6 feature ...
    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChange.emit(this.ingredients.slice());
    }

}