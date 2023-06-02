import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('typedText') typedTextRef!: ElementRef;

  ngAfterViewInit(): void {
    const targetElement = this.typedTextRef.nativeElement;

    const typed = new Typed(targetElement, {
      strings: ['Cloud Projects', 'Websites', 'DevOps Projects','And Many More.....'],
      typeSpeed: 120,
      backSpeed: 40,
      loop: true,
      showCursor: false 
    });
  }
  
  

}
