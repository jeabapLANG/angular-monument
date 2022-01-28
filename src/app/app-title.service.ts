import { Injectable } from '@angular/core'; //Import Injectable
import { Title } from '@angular/platform-browser'; //Import Title

/**
 * AppTitleService class
 */
@Injectable({ providedIn: "root" })
export class AppTitleService { //Export the AppTitleService class
  private _service: Title; //Variable to contain the title service

  private _appName: string; //Variable to contain the application name

  /**
   * Create an application service
   * @return {Title} service The service updating the page title
   */
  public constructor(service: Title) {
    this._service = service; //Set the title service used by the application component
  }

  /**
   * Set the application name
   * @param {string} name The application name
   */
  public setAppName(name: string) {
    this._appName = name; //Set the application name
  }

  /**
   * Get the application name
   * @return {string} appName The application name
   */
  public getAppName() {
    return this._appName; //Get the application name
  }

  /**
   * Set the application title
   * @param {string} title The title to set
   */
  public setTitle(title: string) {
    this._service.setTitle(title); //Set the current title of the application
  }

  /**
   * Get the application title
   * @return {string} title The current title
   */
  public getTitle(): string {
    return this._service.getTitle(); //Get the current title of the application
  }
}