import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import { LenguajeServiceService } from '../../services/translate.service';

@Component({
  selector: 'app-projects',
  imports: [HeaderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor(
    public languageService: LenguajeServiceService,

  ) {
    this.languageService.isSpanish$.subscribe(
      (isSpanish: boolean) => this.isSpanish = isSpanish
    );
  }

  public showProjectCard: string = "none";

  public isSpanish: boolean = false;

  public showHiddenCard(project: string): void {
    this.showProjectCard = project;
    this.moveToHiddenCard(project);
  }

  public moveToHiddenCard(project: string): void {
    let cardID = "";

    if (project === "StockMaster") {
      cardID = "StockMasterInfo";
    } else if (project === "AliciaEstetica") {
      cardID = "AliciaEsteticaInfo";
    } else {
      cardID = "EcoBuddyInfo";
    }

    const tryScroll = (retries = 10) => {
      let element = document.getElementById(cardID);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (retries > 0) {
        setTimeout(() => tryScroll(retries - 1), 200);
      }
    };

    tryScroll();
  }

  toggleLanguage(language: 'es' | 'en') {
    this.languageService.setLanguage(language);
    localStorage.setItem('language', language);

  }
  getText(es: string, en: string): string {
    return this.isSpanish ? es : en;
  }

}
