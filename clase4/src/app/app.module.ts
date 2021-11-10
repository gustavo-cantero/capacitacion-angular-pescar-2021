import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleValueService } from './simple-value.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: 'TITLE',
      useValue: 'Ejemplo de servicios'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
