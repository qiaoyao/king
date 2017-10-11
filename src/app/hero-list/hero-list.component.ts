import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  public Heros: Array<Hero>;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().then((ret) => {
      console.log(JSON.stringify(ret))
    });
    this.Heros = [
      { id: 1, name: 'Bombasto', avatar: '', description: 'RubberMan Celeritas', type: 'Shooter' },
      { id: 2, name: 'Dombasto', avatar: '', description: 'RubberMan Celeritas', type: 'Shooter' },
      { id: 3, name: 'Tombasto', avatar: '', description: 'RubberMan Celeritas', type: 'Shooter' },
      { id: 4, name: 'Pombasto', avatar: '', description: 'RubberMan Celeritas', type: 'Shooter' },
      { id: 5, name: 'Mombasto', avatar: '', description: 'RubberMan Celeritas', type: 'Shooter' },
      { id: 6, name: 'Kombasto', avatar: '', description: 'RubberMan Celeritas', type: 'Shooter' }
    ]
  }
}

export class Hero {
  id: number;
  name: string;
  avatar: string;
  description: string;
  type: string;
}