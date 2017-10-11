import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        return this.http.get('opennews/Hero/listAll')
            .toPromise()
            .then(response => response.json().data as Hero[])
    }

    addHero(hero: Hero): Promise<void> {
        return this.http.post('opennews/Hero/create', JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(response => response.json().data)
    }
}

export class Hero {
    id: number;
    name: string;
    avatar: string;
    description: string;
    type: string;
}