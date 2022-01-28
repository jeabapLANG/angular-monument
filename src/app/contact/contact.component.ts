import { Component } from "@angular/core"; //Import Component
import { AppTitleService } from "../app-title.service";
import { ContactService } from "./contact-service"; //Import ContactService

@Component({ //Declare the component
    selector: "contact-component", //Declare the html selector
    templateUrl: "./contact.component.html", //Declare the html template
    styleUrls: ['./contact.component.css'] //Declare the css template
})
/**
 * ContactComponent class
 */
export class ContactComponent {
    private _contactService: ContactService; //Variable to contain the contact service

    /**
     * Create a contact component
     * @param {ContactService} contactService The contact service 
     */
    public constructor(appTitleService: AppTitleService, contactService: ContactService) {
        appTitleService.setTitle("Contact"); //Set the page title

        this._contactService = contactService; //Set the contact service
    }

    /**
     * Get the contacts
     * @return {Contact[]} contacts The contacts
     */
    public getContacts() {
        return this._contactService.getContacts(); //Return the contacts contained by the contact service
    }
}