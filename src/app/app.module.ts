import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouterModule } from "./app-router.module";
import { storeActions } from "./store/root.actions";
import {StoreModule} from "./store/store.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    StoreModule
  ],
  providers: [...storeActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
