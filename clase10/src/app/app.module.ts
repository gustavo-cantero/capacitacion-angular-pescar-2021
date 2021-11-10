import { ErrorHandler, Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DefaultPipe } from './pipes/default.pipe';
import { PipesComponent } from './pipes/pipes.component';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  handleError(error: any) {
    alert(error.message);
    alert(error.stack);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    DefaultPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
