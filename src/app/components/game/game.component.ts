import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() name;
  @Output() startPage = new EventEmitter();
  btnStart = true;
  timer = 5;
  counter = 0;
  gameResult = false;
  textResult = '';

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.btnStart = false;
    const interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(interval);
        this.result();
      }
    }, 1000);
  }

  counClick() {
    this.counter++;
  }

  result() {
    if (this.counter < 30) {
      this.textResult = 'you are Junior';
    } else if (this.counter > 30 || this.counter < 60) {
      this.textResult = 'you are Midlle';
    } else if (this.counter > 60 || this.counter < 100) {
      this.textResult = 'you are Sineor';
    } else if (this.counter > 100) {
      this.textResult = 'God Mode';
    }
    this.gameResult = true;
  }

  restartGame() {
    this.clear();
    this.gameResult = false;
  }

  clear() {
    this.textResult = '';
    this.timer = 5;
    this.counter = 0;
    this.btnStart = true;
  }

  closeGame() {
    this.startPage.emit();
  }

}
