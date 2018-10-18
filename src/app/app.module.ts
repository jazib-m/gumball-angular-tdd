import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GumballMachineComponent } from './gumball-machine/gumball-machine.component';

@NgModule({
  declarations: [
    AppComponent,
    GumballMachineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
