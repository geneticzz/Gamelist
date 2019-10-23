import { Component, OnInit } from '@angular/core';
import {GameService} from '../services/game.service';
import {Game} from '../modules/Game';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public service: GameService) {
  }

  get games() {
    return this.service.games;
  }

  ngOnInit() {
  }

  del(game: Game) {
    this.service.del(game);
  }

  alert(game: Game) {
    alert('Sie haben ' + game.bezeichnung + ' ausgewählt');
  }
}
