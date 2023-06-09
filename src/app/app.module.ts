import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { contadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { SwitchComponent } from './switch/switch.component';
import { BuclesComponent } from './bucles/bucles.component';
import { MenuComponent } from './menu/menu.component';
import { TurneroComponent } from './turnero/turnero.component';
import { DiasComponent } from './dias/dias.component';

@NgModule({
  declarations: [
    AppComponent,
    contadorComponent,
    BotonesComponent,
    FormularioComponent,
    SwitchComponent,
    BuclesComponent,
    MenuComponent,
    TurneroComponent,
    DiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
