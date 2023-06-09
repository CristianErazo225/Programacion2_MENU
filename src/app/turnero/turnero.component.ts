import { Component } from '@angular/core';

@Component({
  selector: 'app-turnero',
  templateUrl: './turnero.component.html',
  styleUrls: ['./turnero.component.css']
})
export class TurneroComponent {
  numero:number = 1;

    decrementar(){
      this.numero--;
    }

    incrementar(){
      this.numero++;
    }
}
