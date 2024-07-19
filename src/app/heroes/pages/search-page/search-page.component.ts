import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatAutocompleteModule, MatInputModule, CommonModule],
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {

  public searchInput = new FormControl();
  public heroes: Hero[] = [];
  public selectedHero?: Hero;

  constructor(private heroesService: HeroesService) {}

  searchHero() {
    const value: string = this.searchInput.value || '';

    this.heroesService.getSuggestions(value).subscribe(
      heroes => this.heroes = heroes
    );
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent):void {
    if(!event.option.value) {
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero)
  }

}
