import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { HeroImagePipe } from '../../pipes/hero-image.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  standalone: true,
  imports: [MatDividerModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, ReactiveFormsModule, HeroImagePipe],
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup({
    id:               new FormControl(''),
    superhero:        new FormControl('', {nonNullable: true}),
    publisher:        new FormControl<Publisher>(Publisher.DCComics),
    alter_ego:        new FormControl(''),
    first_appearance: new FormControl(''),
    characters:       new FormControl(''),
    alt_img:          new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics'},
    { id: 'Marvel Comics', desc: 'Marvel - Comics'},
  ];

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router, private snackbar: MatSnackBar, private dialog: MatDialog ) {}

  ngOnInit(): void {
    if(!this.router.url.includes('edit')) return;

    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.heroesService.getHeroById(id))
    ).subscribe( hero => {
      if(!hero) return this.router.navigateByUrl('/');
      this.heroForm.reset(hero);
      return;
    })
  }

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  onSubmit():void {

    if(this.heroForm.invalid) return;

    if(this.currentHero.id) {
      this.heroesService.updateHero(this.currentHero).subscribe(hero => {
        this.showSnackBar(`${hero.superhero} updated!`)
      });
      return;
    }

    this.heroesService.addHero(this.currentHero).subscribe( hero => {
      this.router.navigate(['/heroes/edit', hero.id])
      this.showSnackBar(`${hero.superhero} created!`)
    });

  }

  onDeleteHero() {
    if (!this.currentHero.id) throw Error('Hero id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value
    })

    dialogRef.afterClosed()
      .pipe(
        filter( (result: boolean) => result ),
        switchMap(() => this.heroesService.deleteHeroById(this.currentHero.id)),
        filter( (wasDeleted: boolean) => wasDeleted ),
      )
      .subscribe( result => {
        this.router.navigate(['/heroes'])
      }

      )


  }

  showSnackBar( message: string ): void {
    this.snackbar.open(message, 'done', {
      duration: 2500,
    })
  }

}
