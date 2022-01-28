import { Injectable } from '@angular/core'; //Import Injectable
import { Contact } from '../shared/contact.model'; //Import Contact

import contactsData from '../../assets/contacts.json'; //Import MonumentsData

/**
 * ContactService class
 */
@Injectable({ providedIn: "root" }) //Create the injectable
export class ContactService { //Export the ContactService class
    private _contacts: Contact[]; //Variable containing the team contacts

    /**
     * Create a contact service component
     */
    public constructor() {}
    
    /**
     * Get the contacts
     * @return {Contact[]} contacts The contacts in the service
     */
    public getContacts(): Contact[] {
        return this._contacts; //Return the application contacts
    }

    /**
     * Initialize the contacts
     */
    initialize(): void {
        this._contacts = contactsData; //Set the contacts data
    }
}