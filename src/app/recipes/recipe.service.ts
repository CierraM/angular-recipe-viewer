import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";


@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    
    private recipes: Recipe[] = [
        new Recipe(
            'Almond Tofu',
            'This is a test', 
            'https://img.game8.co/3291373/05f46c6993703cf9b85d78a7dd7524e3.png/show',
            [
                { name: 'milk', amount: 3 },
                { name: 'sugar', amount: 1 },
                {name: 'almond', amount: 1}
            ]
            ),
        new Recipe(
            'Golden Shrimp Balls', 
            'This is a delicious recipe', 
            'https://img.game8.co/3322872/51037dfa197654ea94172c70706d2fdb.png/show',
            [
                { name: 'shrimp', amount: 5 },
                { name: 'potato', amount: 4 },
                {name: 'flour', amount: 3}
            ]
            ),
        new Recipe(
            'Golden Crab', 
            'delicoius golden crab', 
            'https://img.game8.co/3294654/5ec3f2f608e31a54788107670d569ab1.png/show',
            [
                { name: 'egg', amount: 5 },
                { name: 'flour', amount: 5 },
                { name: 'crab', amount: 4 },
                {name: 'salt', amount: 3}
            ]
            ),
        new Recipe(
            'Fullmoon Egg', 
            'not sure exactly what this is', 
            'https://img.game8.co/3324957/367e22c7a41d0d3fa287a726f60588e4.png/show',
            [
                { name: 'fish', amount: 4 },
                { name: 'shrimp', amount: 2 },
                { name: 'egg', amount: 2 },
                { name: 'flour', amount: 1}
            ]
            ),
        new Recipe(
            'Mint Jelly', 
            'gross', 
            'https://img.game8.co/3337954/6d80e0630e3f9a560948b6c160e2cf05.png/show',
            [
                { name: 'mint', amount: 1 },
                {name: 'sugar', amount: 1}
            ]
            )
    ];

    constructor(private shoppingListService: ShoppingListService) {

    }
    
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients)
    }

    getRecipe(id: number) {
        return this.recipes[id]
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe)
        this.recipesChanged.next(this.recipes.slice())
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice())

    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1)
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice())
    }
}