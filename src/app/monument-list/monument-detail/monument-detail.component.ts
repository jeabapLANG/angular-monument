import { AppTitleService } from '../../app-title.service'; //Import AppTitleService
import { Component } from "@angular/core"; //Import Component
import { MonumentService } from '../monument.service'; //Import MonumentService

@Component({ //Declare the component
  selector: "monument-list", //Declare the html selector
  templateUrl: "./monument-detail.component.html" //Declare the html template
})
/**
 * MonumentDetailComponent class
 */
export class MonumentDetailComponent {
  private _monumentService: MonumentService; //Variable to contain the monument service

  /**
   * Create a monument detail component
   * @param {AppTitleService} appTitleService The application title service
   * @param {MonumentService} monumentService The monument service
   */
  constructor(appTitleService: AppTitleService, monumentService: MonumentService) {
      appTitleService.setTitle("Monuments"); //Set the page title

      this._monumentService = monumentService; //Set the monument list service
  }
}