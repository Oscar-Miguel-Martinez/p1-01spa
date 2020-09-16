import { Component,  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe: Heroe;
  constructor(private activatedRouter: ActivatedRoute, private heroesService: HeroesService) {
    this.activatedRouter.params.subscribe((params) =>{
      this.heroe = this.heroesService.getHeroe(params ['id'])
    });
  }

}

interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
