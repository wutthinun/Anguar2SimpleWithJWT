import {Routes, RouterModule} from "@angular/router";
import {DocumentComponent} from "./document/document.component";
import {ContractComponent} from "./contract/contract.component";
import {HomeComponent} from "./home/home.component";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {AuthenCheck} from "./authen-check";
/**
 * Created by wutthinan on 12/5/2016 AD.
 */

const appRouter: Routes = [
  { path: 'home', redirectTo: '' },
  { path: 'document', component: DocumentComponent, canActivate: [AuthenCheck] },
  { path: 'contract', component: ContractComponent, canActivate: [AuthenCheck] },
  { path: '', component: HomeComponent, canActivate: [AuthenCheck] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
]

export const routing = RouterModule.forRoot(appRouter)
