import { Component } from '@angular/core';
import { Star } from '../star/star';

@Component({
  selector: 'app-portfolio',
  imports: [Star],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  selectedImgSrc: string | null = null;

  onSelectCard(event: MouseEvent) {
    const image: HTMLImageElement = (event.target as HTMLElement).closest(
      '.card'
    )?.children[0] as HTMLImageElement;

    this.selectedImgSrc = image.getAttribute('src');
  }

  onCloseModel(event: MouseEvent) {
    const element = event.target as HTMLElement;
    if (element.classList.contains('model')) {
      this.selectedImgSrc = null;
    }
  }
}
