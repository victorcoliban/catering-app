import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  mapHtml: any;

  constructor(private sanitizer: DomSanitizer) {
    const embedUrl = 'https://www.google.com/maps/embed/v1/place?q=Brunnenmarkt%20/%20Yppenplatz,%20in%20front%20of%20Brunnengasse%2070-72,%201160,%20Vienna,%20Austria&key=YOUR_API_KEY';
    this.mapHtml = this.sanitizer.bypassSecurityTrustHtml(`<iframe width="600" height="450" frameborder="0" style="border:0" src="${embedUrl}" allowfullscreen></iframe>`);
  }
}
