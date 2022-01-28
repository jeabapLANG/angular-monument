import { Component, OnInit } from '@angular/core'; //Import Component
import { AppTitleService } from './app-title.service';

@Component({ //Declare the component
  selector: 'app-root', //Declare the html selector
  templateUrl: './app.component.html', //Declare the html template
  styleUrls: ['./app.component.css'] //Declare the css template
})
/**
 * AppComponent class
 */
export class AppComponent implements OnInit { //Export the AppComponent class
  private _appTitleService: AppTitleService; //Variable to contain the title service

  /**
   * Create an application component
   * @param {AppTitleService} appTitleService The service containing the title
   */
  public constructor(appTitleService: AppTitleService) {
    this._appTitleService = appTitleService; //Set the title service used by the application component
  }

  ngOnInit(): void {
    this._appTitleService.setAppName("🗼 Monument"); //Set the application name
    this._appTitleService.setTitle(this._appTitleService.getAppName()); //Set the current page title to the application name 
  }
}
