import { Component } from '@angular/core';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css']
})
export class DiasComponent {
  dia?:string; //se camabia a string antes era number
  //dia es string pero por el momento no se va ingresar valor
}
