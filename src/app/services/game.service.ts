import { Injectable } from '@angular/core';
import {Game} from '../modules/Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gamelist: Game[] = [];

  constructor() {
    this.gamelist.push(new Game(1, 'Fortnite', 'BR', 18));
    this.gamelist.push(new Game(1, 'Fortnite', 'BR', 18));
    this.gamelist.push(new Game(1, 'Fortnite', 'BR', 18));
    this.gamelist.push(new Game(1, 'Fortnite', 'BR', 18));
    this.gamelist.push(new Game(1, 'Fortnite', 'BR', 18));

  }
  get games() {
    return this.gamelist;
  }

  del(game: Game) {
    this.gamelist = this.gamelist.filter(g => g !== game);
  }

  save(id: number, bezeichnung: string, genre: string, fsk: number) {
    this.gamelist.push(new Game(id, bezeichnung, genre, fsk));
  }
}
