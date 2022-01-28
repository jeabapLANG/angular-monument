import { Component, Input } from "@angular/core"; //Import Component //Import Component
import { Monument } from "src/app/shared/monument.model"; //Import Monument

@Component({ //Declare the component
    selector: "monument-component", //Declare the html selector
    templateUrl: "./monument-item.component.html", //Declare the html template
    styleUrls: ["./monument-item.component.css"] //Declare the style template
})
/**
 * MonumentItemComponent class
 */
export class MonumentItemComponent {
    @Input() monument: Monument; //Variable containing possible class input monument
    @Input() id: number; //Variable containing possible class input id
}