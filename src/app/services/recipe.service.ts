import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  private urlApi = "/api/?q="


  constructor(private http: Http) {}

  recipeApi(recipe) {
    recipe = encodeURIComponent(recipe); 
    const url = this.urlApi + recipe;
    return this.http
    .get(url)
    .pipe(map(res => res.json()));
  }
}