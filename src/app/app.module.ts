import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { MaterialModule } from './modules/material/material.module';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { MenudataserverService } from './components/base/header/menudataserver.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PartnersComponent } from './components/partners/partners.component';
import { HeaderComponent } from './components/base/header/header.component';
import { FooterComponent } from './components/base/footer/footer.component';

import {AppRoutingModule} from './app-routing/app-routing.module';
import { CarouselComponent } from './components/base/carousel/carousel.component';
import { SiderightComponent } from './components/base/sideright/sideright.component';
import { ImgfullComponent } from './components/base/imgfull/imgfull.component';
import { ListtitleComponent } from './components/base/listtitle/listtitle.component';
import { ContentlistComponent } from './components/base/contentlist/contentlist.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { ProductcontentComponent } from './components/base/productcontent/productcontent.component';
import { ProductService } from './components/productpage/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    SolutionsComponent,
    AboutusComponent,
    PartnersComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    SiderightComponent,
    ImgfullComponent,
    ListtitleComponent,
    ContentlistComponent,
    ProductpageComponent,
    ProductcontentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    MenudataserverService,
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
