import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from '../components/products/products.component';
import { ProductpageComponent } from '../components/productpage/productpage.component';
import { ServicesComponent } from '../components/services/services.component';
import { SolutionsComponent } from '../components/solutions/solutions.component';
import { AboutusComponent } from '../components/aboutus/aboutus.component';
import { PartnersComponent } from '../components/partners/partners.component';
import { HomeComponent } from '../components/home/home.component';



const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'productpage/:id', component: ProductpageComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'aboutus', component: AboutusComponent },
  {
    path: '**',
    redirectTo: '/home'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
