import { Component } from '@angular/core';
import {
  ElementRef,
  Renderer2,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from '@angular/core';
import * as bootstrap from 'bootstrap'; // Import Bootstrap JavaScript functions

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {

  activeLink: string = ''

  @ViewChildren('dropdownToggle') dropdownToggles: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.initializeDropdowns();
  }

  private initializeDropdowns(): void {
    this.dropdownToggles.forEach((dropdownToggle) => {
      const dropdown = new bootstrap.Dropdown(dropdownToggle.nativeElement);
    });
  }

  activeMenuLink(link: string) {
    this.activeLink = link;
  }
}
