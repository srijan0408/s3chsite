import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOpen = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeDropdown();
      }
    });
  }

  toggleMenu(): void {
    const icon = document.querySelector('.icons i')!;
    const menu = document.querySelector('.dropdown')!;

    menu.classList.toggle('open');

    if (this.isOpen) {
      // icon.classList.remove('rotate1');
      // icon.classList.add('rotate2');
      icon.classList.replace('fa-xmark', 'fa-bars');
    } else {
      // icon.classList.add('rotate1');
      // icon.classList.remove('rotate2');
      icon.classList.replace('fa-bars', 'fa-xmark');
    }

    this.isOpen = !this.isOpen;
  }

  closeDropdown(): void {
    const icon = document.querySelector('.icons i')!;
    const menu = document.querySelector('.dropdown')!;
    menu.classList.remove('open');
    this.isOpen = false;
    // icon.classList.remove('rotate1');
    // icon.classList.add('rotate2');
    icon.classList.replace('fa-xmark', 'fa-bars');
  }
}
