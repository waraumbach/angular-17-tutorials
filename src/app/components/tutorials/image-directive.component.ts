import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-directive',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <p>
      image-directive works!
    </p>
    
  `,
})
export class ImageDirectiveComponent {

}
