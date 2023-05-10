import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NgprimeModule } from './ngprime.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NgprimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
