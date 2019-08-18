import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  goToGame = false;
  title = 'Clicker';

  routeGame() {
    this.goToGame = true;
  }

  start() {
    console.log('fuck');
    this.goToGame = false;
  }
}
