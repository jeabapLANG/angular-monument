import { NgModule } from '@angular/core'; //Import NgModule
import { RouterModule, Routes } from '@angular/router'; //Import RouterModule and Routes

import { HomeComponent } from './home/home.component'; //Import HomeComponent
import { ContactComponent } from './contact/contact.component'; //Import ContactComponent
import { MonumentListComponent } from './monument-list/monument-list.component';
import { MonumentDetailComponent } from './monument-list/monument-detail/monument-detail.component';

const appRoutes: Routes = [ //Create the application routes
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "monuments", component: MonumentListComponent, children: [
        { path: ":id", component: MonumentDetailComponent }
    ]},
    { path: "contact", component: ContactComponent }
];

@NgModule({ //Declare the NgModule
    imports: [RouterModule.forRoot(appRoutes)], //Declare the module impots
    exports: [RouterModule] //Declare the module exports
})
export class AppRoutingModule { } //Export the AppRoutingModule class
