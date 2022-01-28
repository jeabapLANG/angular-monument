import { Injectable } from '@angular/core'; //Import Injectable
import { Monument } from '../shared/monument.model'; //Import Monument

import monumentsData from '../../assets/monuments.json'; //Import MonumentsData

/**
 * MonumentService class
 */
@Injectable({ providedIn: "root" }) //Create the injectable
export class MonumentService { //Export the MonumentService class
    private _monuments: Monument[] = [
        new Monument("../../assets/arc-triomphe.jpg", 
            "Arc de Triomphe", 
            "L'arc de triomphe", 
            "localisation", 
            "http://www.paris-arc-de-triomphe.fr"
        ),
        new Monument("../../assets/arc-triomphe.jpg", 
            "Arc de Triomphe", 
            "L'arc de triomphe", 
            "localisation", 
            "http://www.paris-arc-de-triomphe.fr"
        ),
    ]; //Variable containing the team contacts

    /**
     * Create a monument service component
     */
    public constructor() {}

    /**
     * Get the monuments
     * @return {Monument[]} monuments The monuments
     */
    public getMonuments(): Monument[] {
        return this._monuments; //Return the monuments contained by the monument service
    }
    /**
     * Get the requested monument
     * @param {number} id The monument id 
     * @return {Monument} monument The monument
     */
    public getRecipeById(id: number): Monument {
        return this._monuments[id]; //Return the requested monument
    }

    /**
     * Initialize the monuments
     */
    initialize(): void {
        this._monuments = monumentsData; //Load the monuments
        console.log(this._monuments);
    }
}