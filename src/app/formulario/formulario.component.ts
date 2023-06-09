import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  abrirAlerta:boolean = false;
  mostrarEnConsola(nombre:string){
    console.log(nombre);
    this.abrirAlerta=true; //muestre enncosola y cabie de false a true
  }

  mostrarEnConsola2(apellido:string){
    console.log(apellido);
  }

  mostrarEnConsola3(edad:string){
    console.log(edad);
  }

  mostrarEnConsola4(fechaDeNacimiento:string){
    console.log(fechaDeNacimiento);
  }

  mostrarEnConsola5(Tel:string){
    console.log(Tel);
  }

  mostrarEnConsola6(email:string){
    console.log(email);
  }
}
