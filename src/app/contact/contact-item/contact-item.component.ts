import { Component, Input } from '@angular/core'; //import Component and Input
import { Contact } from '../../shared/contact.model'; //Import Contact

@Component({ //Declare the component
  selector: 'contact-item-component', //Declare the html selector
  templateUrl: './contact-item.component.html', //Declare the html template
  styleUrls: ['./contact-item.component.css'] //Declare the css template
})
/**
 * ContactItemComponent class
 */
export class ContactItemComponent {
  @Input() contact: Contact; //Variable containing possible class input contact
}