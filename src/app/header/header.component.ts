import { Component } from "@angular/core"; //Import Component
import { AppTitleService } from "../app-title.service";

@Component({ //Declare the component
    selector: "header-component", //Declare the html selector
    templateUrl: "./header.component.html" //Declare the html template
})
/**
 * HeaderComponent class
 */
export class HeaderComponent {
  private _appTitleService: AppTitleService; //Variable to contain the title service

  public collapsed = true; //Variable containing the collapse state of the header

  public title: string; //Variable containing the header title

  /**
   * Create a header component
   * @param {AppTitleService} appTitleService The service containing the application title
   */
  constructor(appTitleService: AppTitleService) {
    this._appTitleService = appTitleService; //Set the title service used by the application component

    this.title = appTitleService.getAppName(); //Set the header title with the application name
  }

  ngOnInit(): void {
    this.title = this._appTitleService.getAppName(); //Set the header title with the application name
  }
}
