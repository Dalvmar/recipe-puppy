import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  list: any;

  constructor(public recipeService: RecipeService) {};

  ngOnInit() {}

  getRecipeOfApi(recipe) {
    this.recipeService.recipeApi(recipe)
      .subscribe(res => {
      this.list = Object.values(res.results)
      .map(data => {
      return data;
        });
      });
  }

  
}
