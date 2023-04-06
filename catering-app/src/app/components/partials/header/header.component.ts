import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isCollapsed = true;
  isPulsing = true;

  togglePulsing() {
    this.isPulsing = !this.isPulsing;
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
