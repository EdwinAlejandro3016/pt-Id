import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// pages
import { MainComponent } from './pages/main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { EditCategoriaComponent } from './pages/edit-categoria/edit-categoria.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/productos',
    pathMatch: 'full'
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'products/add',
    component: AddProductComponent
  },
  {
    path: 'categorias',
    component: CategoriasComponent
  },
  {
    path: 'categorias/:id',
    component: EditCategoriaComponent
  },
  {
    path: 'productos',
    component: MainComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
