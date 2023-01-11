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
import { AuthGuard } from './guards/auth.guard';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { AddUserComponent } from './pages/add-user/add-user.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/productos',
    pathMatch: 'full'
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products/add',
    component: AddProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'categorias',
    component: CategoriasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'categorias/:id',
    component: EditCategoriaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'productos',
    component: MainComponent,
    canActivate: [AuthGuard]
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
    path: 'usuarios',
    canActivate: [AuthGuard],
    component: UsuariosComponent
  },
  {
    path: 'usuarios/edit/:id',
    canActivate: [AuthGuard],
    component: EditUserComponent
  },
  {
    path: 'usuarios/add',
    canActivate: [AuthGuard],
    component: AddUserComponent
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
