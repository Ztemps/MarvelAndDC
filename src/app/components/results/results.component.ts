import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnInit {

  heroesArr: any[];
  searchValue: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroService: HeroesService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.searchValue = params['value'];
      this.heroesArr = [];
      this.heroesArr = this._heroService.searchHeroes(params['value']);
      console.log('HEROLIST: ', this.heroesArr);
    });
  }

  seeMore( index: number ) {
    this.router.navigate(['/hero', index]);
  }
}
