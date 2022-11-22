import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SneakerComponent } from './sneaker/sneaker.component';
import { SneakersComponent } from './sneakers/sneakers.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
 { path:'', component: HomeComponent},
 { path:'products', component: SneakersComponent},
 { path:'products/:id', component: SneakerComponent},
 { path:'login', component: LoginComponent},
 { path:'auth', component: AuthComponent},
 { path:'cart', component: CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
