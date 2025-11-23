import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Details } from './details/details';
import { Admin } from './admin/admin';
import { UserList } from './admin/user-list/user-list';
import { ProductList } from './admin/product-list/product-list';

@NgModule({
  declarations: [
    App,
    Home,
    Details,
    Admin,
    UserList,
    ProductList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
