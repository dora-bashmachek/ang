import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import FirebaseMethods from 'src/utils/firebaseMethods';
import { SneakersComponent } from './sneakers/sneakers.component';
import { SneakerComponent } from './sneaker/sneaker.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { CartComponent } from './cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
// import { MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SneakersComponent,
    SneakerComponent,
    LoginComponent,
    AuthComponent,
    CartComponent,
    FooterComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FirebaseMethods,
    // MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
