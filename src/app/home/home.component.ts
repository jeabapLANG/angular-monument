import { AppTitleService } from '../app-title.service'; //Import AppTitleService
import { Component } from "@angular/core"; //Import Component

@Component({ //Declare the component
  selector: "home-component", //Declare the html selector
  templateUrl: "./home.component.html", //Declare the html template
  styleUrls: ['./home.component.css'] //Declare the css template
})
/**
 * HomeComponent class
 */
export class HomeComponent {
  /**
   * Create a home component
   * @param {AppTitleService} appTitleService The application title service
   */
  constructor(appTitleService: AppTitleService) {
    appTitleService.setTitle("Home"); //Set the page title
  }
}