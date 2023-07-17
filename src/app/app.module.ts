import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomReactComponentWrapperComponent } from './react-wrapper';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomReactComponentWrapperComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
