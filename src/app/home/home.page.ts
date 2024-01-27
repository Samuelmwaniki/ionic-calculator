import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
// string to display buttons with numbers on screen
  display: string = '';
  buttons: string[] = ['1', '2', '3', '/', '4', '5', '6', '*', '7', '8', '9', '-', 'C', '0', '+','=', ];

  //
  onButtonClick(button: string) {
    if (button === 'C') {
      this.display = '';
    } else if (button === '=') {
      try {
        this.display = eval(this.display).toString();
      } catch (error) {
        this.display = 'Error';
      }
    } else if (button === '+') {
      this.display += '+';
    } else if (button === '-') {
      this.display += '-';
    } else if (button === '*') {
      this.display += '*';
    } else if (button === '/') {
      this.display += '/';
    } else {
      this.display += button;
    }
  }
}