import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { ProductCardDetailComponent } from './components/product-card-detail/product-card-detail.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { EditCategoriaComponent } from './pages/edit-categoria/edit-categoria.component';
import { AlertComponent } from './components/alert/alert.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { BuscadorComponent } from './components/buscador/buscador.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    CardProductComponent,
    ProductCardDetailComponent,
    ProductDetailComponent,
    AddProductComponent,
    CategoriasComponent,
    EditCategoriaComponent,
    AlertComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
