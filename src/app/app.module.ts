import { APP_INITIALIZER, NgModule } from '@angular/core'; //Import NgModule
import { BrowserModule, Title } from '@angular/platform-browser'; //Import BrowserModule and Title

import { AppRoutingModule } from './app-routing.module'; //Import AppRoutingModule

import { AppComponent } from './app.component'; //Import AppComponent
import { ContactItemComponent } from './contact/contact-item/contact-item.component';
import { ContactService } from './contact/contact-service';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { MonumentItemComponent } from './monument-list/monument-item/monument-item.component';
import { MonumentListComponent } from './monument-list/monument-list.component';
import { MonumentService } from './monument-list/monument.service';

export function appInit(monumentService: MonumentService, contactService: ContactService) { //AppInit function for services
  return () => {
    monumentService.initialize();
    contactService.initialize();
  }; 
}

@NgModule({ //Declare the NgModule
  declarations: [ //Set the declarations
    AppComponent, //Declare AppComponent
    HeaderComponent, //Declare HeaderComponent
    ContactComponent, //Declare ContactComponent
    ContactItemComponent, //Declare ContactItemComponent
    MonumentListComponent, //Declare MonumentListComponent
    MonumentItemComponent //Declare MonumentItemComponent
  ],
  imports: [ //Declare the imports
    BrowserModule, //Declare BrowserModule
    AppRoutingModule //Declare AppRoutingModule
  ],
  providers: [ //Declare the providers
    Title, //Declare Title
    {
      provide: APP_INITIALIZER,
      useFactory: appInit,
      multi: true,
      deps: [ 
        MonumentService, 
        ContactService
      ]
    }
  ],
  bootstrap: [AppComponent] //Set the bootstrap
})
export class AppModule { } //Export the AppModule class
