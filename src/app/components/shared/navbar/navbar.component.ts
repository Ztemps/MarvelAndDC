import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
    private _heroesService: HeroesService,
    private router: Router) { }

  ngOnInit() {
  }

  searchHero(value: string) {

    if (value.length >= 1 ) {
      this.router.navigate(['/results', value]);
    }
  }
}
