import { Component, OnInit } from '@angular/core';
import {GameService} from '../services/game.service';
import {Game} from '../modules/Game';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public id: number;
  public bezeichnung: string;
  public genre: string;
  public fsk: number;

  constructor(private service: GameService) {
  }

  save() {
    this.service.save(this.id, this.bezeichnung, this.genre, this.fsk);
  }

  ngOnInit() {
  }


}
