import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Details } from './details/details';
import { Home } from './home/home';
import { Admin } from './admin/admin';
import { UserList } from './admin/user-list/user-list';
import { ProductList } from './admin/product-list/product-list';

export const prerender = false;

const routes: Routes = [
  {path: '', component: Home},
  {path: 'home', component: Home},
  
  {path: 'detalles', component: detalle},
  {
    path: 'admin', component: Admin,
    children: [
      {path: 'users', component: UserList},
      {path: 'products', component: ProductList}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
