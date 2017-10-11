import { Component, OnInit, Input} from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})

export class AddHeroComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  @Input() hero: Hero = {
    id: null,
    name: '',
    avatar: '',
    description: '',
    type: '战士',
  };

  onSubmit() {
    this.heroService.addHero(this.hero).then((ret) => {
      console.log(JSON.stringify(this.hero))
    });
  }
  ngOnInit() {
  }

}

export class Hero {
  id: number;
  name: string;
  avatar: string;
  description: string;
  type: string;
}