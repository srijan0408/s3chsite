import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  isContentVisible: number = 0;
  isActive:boolean = false;

  imagePaths: string[] = [
    '',
    'assets/m1.jpg',
    'assets/wd2.jpg',
    'assets/c1.jpg',
    'assets/do1.jpg',
    'assets/t11.jpg',
    'assets/dm1.jpg'
  ];

  imageUrl : string = 'assets/oo1.jpg';
  toggleContent(buttonIndex: number) {
    
  
      this.isContentVisible = buttonIndex;
      this.isActive = true;
      this.imageUrl = this.imagePaths[buttonIndex];
  }
}
