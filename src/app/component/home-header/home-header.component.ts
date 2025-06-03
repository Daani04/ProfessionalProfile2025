import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LenguajeServiceService } from '../../services/translate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent {
  
  public isSpanish: boolean = false;

    constructor(
      private router: Router,
      private languageService:LenguajeServiceService ,
 
    )
      {
      this.languageService.isSpanish$.subscribe(
        (isSpanish: boolean) => this.isSpanish = isSpanish
      );
    }
 
 
    toggleLanguage(language: 'es' | 'en') {
      this.languageService.setLanguage(language);
      localStorage.setItem('language', language);
     
    }
     getText(es: string, en: string): string {
    return this.isSpanish ? es : en;
  }

  public goHomePage(): void {
     this.router.navigate(['/home']);
  }

}
