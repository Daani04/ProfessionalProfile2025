import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import { Router } from '@angular/router';
import { HomeHeaderComponent } from "../../component/home-header/home-header.component";
import { LenguajeServiceService } from '../../services/translate.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [HomeHeaderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  constructor(
    private router: Router,
    public languageService: LenguajeServiceService,

  ) {
    this.languageService.isSpanish$.subscribe(
      (isSpanish: boolean) => this.isSpanish = isSpanish
    );
  }

  public isSpanish: boolean = false;

  public displayWidth: number = 0;


  toggleLanguage(language: 'es' | 'en') {
    this.languageService.setLanguage(language);
    localStorage.setItem('language', language);

  }
  getText(es: string, en: string): string {
    return this.isSpanish ? es : en;
  }

  ngOnInit() {
    this.displayWidth = window.innerWidth;

    setInterval(() => {
      this.displayWidth = window.innerWidth;
      console.log("Display width:", this.displayWidth);
    }, 100);
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    // Observar todos los elementos que queremos animar
    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });
  }

  public goToAboutMe() {
    this.router.navigate(['about-me']);
  }
}
