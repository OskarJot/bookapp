import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bookapp';
  activeLink: string = 'recipies';

  switchMenu(link: string) {
    this.activeLink = link;
  }
}
