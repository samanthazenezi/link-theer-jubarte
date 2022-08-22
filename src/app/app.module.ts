import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagemComponent } from './imagem/imagem.component';
import { LinksComponent } from './links/links.component';
import { FooterComponent } from './footer/footer.component';
import { FeitoporComponent } from './feitopor/feitopor.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagemComponent,
    LinksComponent,
    FooterComponent,
    FeitoporComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
