import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  dia?:string; //se camabia a string antes era number
  //dia es string pero por el momento no se va ingresar valor
}
