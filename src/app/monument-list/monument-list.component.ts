import { AppTitleService } from '../app-title.service'; //Import AppTitleService
import { Component } from "@angular/core"; //Import Component
import { MonumentService } from './monument.service'; //Import MonumentService
import { Monument } from '../shared/monument.model'; //Import Monument

@Component({ //Declare the component
  selector: "monument-list", //Declare the html selector
  templateUrl: "./monument-list.component.html", //Declare the html template
  styleUrls: ["./monument-list.component.css"] //Declare the style template
})
/**
 * MonumentListComponent class
 */
export class MonumentListComponent {
  private _monumentService: MonumentService; //Variable to contain the monument service

  /**
   * Create a monument list component
   * @param {AppTitleService} appTitleService The application title service
   * @param {MonumentService} monumentService The monument service
   */
  constructor(appTitleService: AppTitleService, monumentService: MonumentService) {
      appTitleService.setTitle("Monuments"); //Set the page title

      this._monumentService = monumentService; //Set the monument list service
  }

  /**
   * Get the monuments
   * @return {Monument[]} monuments The monuments
   */
  getMonuments(): Monument[] {
    return this._monumentService.getMonuments(); //Return the monuments contained by the monument service
  }
}