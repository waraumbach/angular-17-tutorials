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

    <div>
      <img ngSrc="assets/logo.png" width="400" height="200" ngSrcset="100w, 200w, 300w"
      sizes="(max-width: 768px) 100vw, 300vw"/>
    </div>
    
  `,
})
export class ImageDirectiveComponent {

}
