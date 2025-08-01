import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [],
  templateUrl: './star.html',
  styleUrl: './star.css',
})
export class Star {
  @Input({ required: true }) title!: string;
  @Input() isDark?: boolean = false;
}
