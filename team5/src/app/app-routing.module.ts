import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from "./pages/login/login.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import {BuyComponent} from "./pages/buy/buy.component";
import {SellComponent} from "./pages/sell/sell.component";
import {NewsComponent} from './pages/news/news.component';
import {LearningComponent} from "./pages/learning/learning.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'sell', component: SellComponent },
  { path: 'news', component: NewsComponent },
  { path: 'learning', component: LearningComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
