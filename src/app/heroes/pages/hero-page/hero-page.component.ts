import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HeroImagePipe } from '../../pipes/hero-image.pipe';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [MatGridListModule, MatProgressSpinnerModule, MatCardModule, MatListModule, MatButtonModule, CommonModule, HeroImagePipe],
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(

      switchMap( ({id}) => this.heroesService.getHeroById( id ))
    ).subscribe( hero => {
      if (!hero) return this.router.navigate(['/heroes/list']);
      this.hero = hero;
      return;
    })
  }

  goBack():void {
    this.router.navigateByUrl('heroes/list')
  }

}
