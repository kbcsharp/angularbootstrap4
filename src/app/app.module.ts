import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumbotronComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
