import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  hero: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.hero = this._heroeService.getHeroe(params['id']);
      console.log('this.heroe', this.hero);
    });
  }

}
