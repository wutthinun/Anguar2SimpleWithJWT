import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DocumentComponent } from './document/document.component';
import { HeaderComponent } from './header/header.component';
import { ContractComponent } from './contract/contract.component';
import {routing} from "./app.routing";
import {HomeService} from "./home/home.service";
import {DocumentService} from "./document/document.service";
import {ContractService} from "./contract/contract.service";
import { LoginComponent } from './login/login.component';
import { AuthenService } from './authen.service';
import { AuthenCheck } from './authen-check';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocumentComponent,
    HeaderComponent,
    ContractComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    HomeService,
    DocumentService,
    ContractService,
    AuthenService,
    AuthenCheck
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
