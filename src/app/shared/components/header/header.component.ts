import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  openAnimationImages: string[] = [
    '../../../../assets/img/burger_menu_animation/0start_animation.svg',
    '../../../../assets/img/burger_menu_animation/1animation.svg',
    '../../../../assets/img/burger_menu_animation/2animation.svg',
    '../../../../assets/img/burger_menu_animation/3animation.svg',
    '../../../../assets/img/burger_menu_animation/4end_animation.svg',
  ];

  closeAnimationImages: string[] = [
    '../../../../assets/img/burger_menu_animation/4end_animation.svg',
    '../../../../assets/img/burger_menu_animation/3animation.svg',
    '../../../../assets/img/burger_menu_animation/2animation.svg',
    '../../../../assets/img/burger_menu_animation/1animation.svg',
    '../../../../assets/img/burger_menu_animation/0start_animation.svg',
  ];

  translate = inject(TranslationService);
  isMenuOpen: boolean = false;
  visitedFirst: boolean = false;
  currentIndex: number = 0;
  interval: any;

  ngOnInit() {
    clearInterval(this.interval);
  }

  onClick() {
    this.isMenuOpen = !this.isMenuOpen;
    this.currentIndex = 0;
    this.startAnimation();
  }

  startAnimation() {
    const animationImages = this.isMenuOpen
      ? this.openAnimationImages
      : this.closeAnimationImages;
    this.currentIndex = 0;
    this.interval = setInterval(() => {
      this.showNextImage(animationImages);
    }, 125);
  }

  showNextImage(images: string[]) {
    if (this.currentIndex >= images.length - 1) {
      clearInterval(this.interval);
    } else {
      this.currentIndex++;
    }
  }

  getImageSrc(): string {
    if (!this.isMenuOpen && !this.visitedFirst) {
      return this.openAnimationImages[0];
    } else {
      const animationImages = this.isMenuOpen
        ? this.openAnimationImages
        : this.closeAnimationImages;
      this.visitedFirst = true;
      return animationImages[this.currentIndex];
    }
  }
}
